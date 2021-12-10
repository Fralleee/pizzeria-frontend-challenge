import { sortByTimestamp } from "businessLogic/sortingLogic"
import styled from "styled-components"

//#region styled
const Container = styled.div`
  position: relative;
  background: ghostwhite;
  padding-left: 2rem;
  width: 100%;
  color: black;
  
  @media (max-width: 500px) {
    padding-left: 0;
  }
`
const ListContainer = styled.ul`
  background: white;
  list-style: none;
  border-bottom: 1px solid #ccc;
  border-left: 1px solid #ccc;
  padding: 0;  
  margin: 0;
  width: 100%;

  @media (max-width: 500px) {
    border-left: none;
  }
`
const Pizza = styled.li`
  display: flex;
  padding: 1rem 2rem;
  width: 100%;

  & em {
    margin-left: .5rem;
  }

  & span {
    margin-left: auto;
  }
  
  &:nth-child(even) {
    background-color: ghostwhite;
  }
`
const TextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0rem 2rem;
`
const Text = styled.h3` margin: 0; `
const SmallText = styled.h4`
  margin: 0;
  color: #666;
  font-weight: normal;
`
//#endregion

const OrderHistoryDetails = ({ order }) => {
  const pizzaOrders = order?.order ?? []
  return (
    <Container>
      {
        pizzaOrders.length > 0 &&
        <>
          <ListContainer>
            {pizzaOrders.sort(sortByTimestamp).map(pizza => (
              <Pizza key={pizza.id}>
                {pizza.name}
                <em>({pizza.size})</em>
                <em>x{pizza.amount}</em>
                <span>${(Math.round(pizza.totalCost * 100) / 100).toFixed(2)}</span>
              </Pizza>
            ))}
          </ListContainer>
          <TextContainer style={{ marginTop: "1rem" }}>
            <SmallText>Bonus</SmallText>
            <SmallText>-${(Math.round(order.bonusAmount * 100) / 100).toFixed(2)}</SmallText>
          </TextContainer>
          <TextContainer style={{ marginBottom: "1rem" }}>
            <Text>Total</Text>
            <Text>${(Math.round(order.totalAmount * 100) / 100).toFixed(2)}</Text>
          </TextContainer>
        </>
      }
    </Container>
  )
}

export default OrderHistoryDetails