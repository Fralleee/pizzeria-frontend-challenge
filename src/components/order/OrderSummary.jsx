import { OrderContext } from "contexts/OrderContext"
import { useContext, useState } from "react"
import styled from "styled-components"
import { Button } from "components/common/Button"
import { getBonusAmounts, getBonusText, getNextAvailableBonusText, calculateBonus } from "businessLogic/bonusLogic"
import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore"
import { compileOrder } from "businessLogic/orderLogic"
import { useAuthState } from "react-firebase-hooks/auth"
import { getAuth } from "firebase/auth"
import { generateName } from "utils/nameGenerator"

//#region styled
const Container = styled.div`
  width: 100%;
  min-height: 120px;
  padding: 0 1rem 1rem 1rem;
  display: flex;;
  flex-direction: column;
  align-items: center;
`
const Bonus = styled.div`
  width: 100%;
  height: 75px;
  text-align: center;  
  padding: 1rem;
  background: #f0f0f0;
  margin: 1rem 0;

  p {
    margin: 0;
  }
`
const OrderButton = styled(Button)`
  width: 12em;
  margin-top: 1rem;
`
const TextContainer = styled.div`
  width: 100%;
  height: 25px;
  display: flex;
  justify-content: space-between;
`
const Text = styled.h3` margin: 0; `
const SmallText = styled.h4`
  margin: 0;
  color: #666;
  font-weight: normal;
`
//#endregion

const OrderSummary = ({ close }) => {
  const auth = getAuth()
  const [user] = useAuthState(auth)
  const { order, clear } = useContext(OrderContext)
  const bonus = calculateBonus(order)
  const bonusText = bonus.appliedBonus && getBonusText(bonus.appliedBonus)
  const bonusAmounts = getBonusAmounts(bonus.amount, bonus.appliedBonus)
  const nextAvailableBonusText = bonus.nextAvailableBonus && getNextAvailableBonusText(bonus.amount, bonus.nextAvailableBonus)
  const [loading, setLoading] = useState(false)

  const placeOrder = async () => {
    setLoading(true)
    const firestore = getFirestore()
    await addDoc(collection(firestore, "orders"), {
      name: generateName(),
      timestamp: serverTimestamp(),
      user: user.email,
      bonusAmount: bonusAmounts.bonusOnly,
      totalAmount: bonusAmounts.total,
      order: compileOrder(order, bonus.appliedBonus)
    })
    setLoading(false)
    clear()
    close()
  }

  return (
    <Container>
      <Bonus>
        <p>{bonusText}</p>
        {nextAvailableBonusText && <p>{nextAvailableBonusText}</p>}
      </Bonus>
      {bonus.appliedBonus && (
        <TextContainer>
          <SmallText>Bonus</SmallText>
          <SmallText>-${(Math.round(bonusAmounts.bonusOnly * 100) / 100).toFixed(2)}</SmallText>
        </TextContainer>
      )}
      <TextContainer>
        <Text>Total</Text>
        <Text>${(Math.round(bonusAmounts.total * 100) / 100).toFixed(2)}</Text>
      </TextContainer>
      <OrderButton disabled={order.length === 0 || loading} tabIndex={0} onClick={placeOrder}>Place order</OrderButton>
    </Container>
  )
}

export default OrderSummary