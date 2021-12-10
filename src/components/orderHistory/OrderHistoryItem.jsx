import { useRef } from "react"
import styled from "styled-components"
import OrderHistoryDetails from "./OrderHistoryDetails"

//#region styled
const Container = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: white;
  transition: all .2s ease;
  
  &:nth-child(even) {
    background-color: ghostwhite;
  }
  
  &:hover {
    background-color: whitesmoke;
  }

  ${props => props.open ? `
    box-shadow: var(--center-shadow);
    margin: 1rem 0;
    background-color: white !important;
  ` : `
    opacity: 0.5;
  `}
`
const OrderHeader = styled.div`
  padding: 1rem;
  cursor: pointer; 
  user-select: none; 

  span {    
    display: flex;
    flex-direction: column; 
    flex-wrap: wrap; 
    max-width: 50vw;
  }
  
  ${props => props.open && "border-bottom: 1px solid #ccc"};
`
const Info = styled.div`
    position: absolute;
    top: 1.5rem;
    right: 2rem;
`
//#endregion

const OrderHistoryItem = ({ open, setOpen, order, count }) => {
  const formattedDate = new Date(order.timestamp.seconds * 1000).toLocaleString("sv-SE")
  const itemRef = useRef(null)

  const openItem = () => {
    if (!open)
      itemRef.current.scrollIntoView()
    setOpen(!open ? order.name : "")
  }
  return (
    <Container open={open} ref={itemRef}>
      <OrderHeader tabIndex={0} open={open} onClick={openItem}>
        <span>
          Order #{count} ({order.name})
          <em>{formattedDate}</em>
        </span>
        <Info>{open ? "Close" : "View"}</Info>
      </OrderHeader>
      {open && <OrderHistoryDetails order={order} />}
    </Container>
  )
}

export default OrderHistoryItem