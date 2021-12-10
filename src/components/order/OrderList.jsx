import { OrderContext } from "contexts/OrderContext"
import { useContext } from "react"
import styled from "styled-components"
import OrderAmountButton from "./OrderAmountButton"

//#region styled
const Container = styled.ul`
  min-height: 100px;
  height: 260px;
  max-height: 35vh;
  overflow-y: scroll;
  width: 100%;
  padding: 0 1rem;
  list-style: none;
`

const OrderItem = styled.li`
  position: relative;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`

const ItemName = styled.h4`
  display: flex;
  align-items: center;
  font-weight: bold;
  margin: 0;
`
const ExtraInformation = styled.span`
  font-weight: normal;
  color: #aaa;
  font-style: italic;
  margin: 0;
  margin-left: .5rem;
`
const Cost = styled.h5`
  font-weight: normal;
  margin: 0;
  min-width: 80px;
  text-align: right;
  font-size: 1.125rem;
`

const CostAndAmount = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 200px;
`

const NoPizza = styled.h4`
  font-weight: normal;
  color: #aaa;
  font-style: italic;
  text-align: center;
`
//#endregion

const OrderList = () => {
  const { order, remove, increment, decrement } = useContext(OrderContext)

  const handleAmountButton = (item, change) => {
    if (change < 0 && item.amount === 1) remove(item)
    else if (change < 0) decrement(item)
    else increment(item)
  }

  return (
    <Container>
      {order.length === 0 ? (
        <NoPizza>Nothing here</NoPizza>
      ) : (
        order.map(item => (
          <OrderItem key={item.name + item.size}>
            <OrderAmountButton item={item} callback={handleAmountButton} />
            <ItemName>
              {item.name}
              <ExtraInformation>{item.size}</ExtraInformation>
            </ItemName>
            <CostAndAmount>
              <Cost>${(Math.round(item.cost * item.amount * 100) / 100).toFixed(2)}</Cost>
            </CostAndAmount>
          </OrderItem>
        ))
      )}
    </Container>
  )
}

export default OrderList