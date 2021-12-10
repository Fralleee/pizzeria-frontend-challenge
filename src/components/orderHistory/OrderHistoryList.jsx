import { useState } from "react"
import styled from "styled-components"
import OrderHistoryItem from "./OrderHistoryItem"

//#region styled
const Container = styled.ul`
  position: relative;
  background: ghostwhite;
  list-style: none;
  height: 100%;
  min-width: 200px;
  overflow-y: auto;
  padding: 0;  
  margin: 3rem 1rem;
  border: 1px solid #ccc;
`
//#endregion

const OrderHistoryList = ({ orders = [] }) => {
  const [open, setOpen] = useState("")
  return (
    <Container>
      {orders.map((order, index) =>
        <OrderHistoryItem
          key={order.name}
          open={open === order.name}
          setOpen={setOpen} order={order}
          count={orders.length - index}
        />
      )}
    </Container>
  )
}

export default OrderHistoryList