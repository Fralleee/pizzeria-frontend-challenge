import { OrderContext } from "contexts/OrderContext"
import { useContext } from "react"
import styled from "styled-components"
import { Button } from "components/common/Button"
import { getBonusAmounts, getBonusText, getNextAvailableBonusText, calculateBonus } from "businessLogic/bonusLogic"

//#region styled
const Container = styled.div`
  width: 100%;
  min-height: 120px;
  padding: 0 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Bonus = styled.div`
  width: 100%;
  text-align: center;
  padding: 1rem;
  background: #f0f0f0;
  margin: 1rem 0;

  p {
    margin: 0;
  }
`
const OrderButton = styled(Button)`
  width: 100%;
  margin-top: 1rem;
`
const TextContainer = styled.div`
  width: 100%;
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

const OrderSummary = () => {
  const { order } = useContext(OrderContext)
  const bonus = calculateBonus(order)
  const bonusText = bonus.appliedBonus && getBonusText(bonus.appliedBonus)
  const bonusAmounts = getBonusAmounts(bonus.amount, bonus.appliedBonus)
  const nextAvailableBonusText = bonus.nextAvailableBonus && getNextAvailableBonusText(bonus.amount, bonus.nextAvailableBonus)

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
      <OrderButton disabled={order.length === 0}>Place order</OrderButton>
    </Container>
  )
}

export default OrderSummary