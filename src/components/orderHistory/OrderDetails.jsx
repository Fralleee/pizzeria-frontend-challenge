import styled from "styled-components"

//#region styled
const Container = styled.ul`
  position: relative;
  background: white;
  list-style: none;
  padding: 0;  
  margin: 0;
  width: 100%;
`

const Pizza = styled.li`
  display: flex;
  /* justify-content: space-between; */
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
//#endregion

const OrderDetails = ({ order }) => {
  const pizzaOrders = order?.order ? JSON.parse(order.order) : []
  return (
    <Container>
      {pizzaOrders.map(pizza => (
        <Pizza key={pizza.id}>
          {pizza.name}
          <em>({pizza.size})</em>
          <em>x{pizza.amount}</em>
          <span>${pizza.totalCost}</span>
        </Pizza>
      ))}
    </Container>
  )
}

export default OrderDetails