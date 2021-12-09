import styled from "styled-components"

//#region styled
const Container = styled.ul`
  position: relative;
  display: flex;
  background: ghostwhite;
  list-style: none;
  padding: 0;  
  margin: 0;
`

const Order = styled.li`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  em {
    font-size: 80%;
  }

  &.active {
    background-color: var(--primary-color);
    color: white;
  }
`
//#endregion

const OrderList = ({ orders = [], selected, onSelect }) => {
  const onClick = order => () => onSelect(order)
  const formatDate = timestamp => new Date(timestamp.seconds * 1000).toLocaleDateString("sv-SE")
  return (
    <Container>
      {orders.map(order => (
        <Order key={order.name} className={selected.name === order.name ? "active" : ""} onClick={onClick(order)}>
          {order.name}
          <em>{formatDate(order.date)}</em>
        </Order>
      ))}
    </Container>
  )
}

export default OrderList