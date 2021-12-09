import styled from "styled-components"
import { useState } from "react"
import { collection, getFirestore, query, where } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"
import { useCollectionData } from "react-firebase-hooks/firestore"
import { IoCloseSharp } from "react-icons/io5"
import Button from "components/common/Button"
import OrderList from "./OrderList"
import OrderDetails from "./OrderDetails"
import OrderHistoryHeader from "./OrderHistoryHeader"

//#region styled
const Container = styled.div`
  position: relative;
  min-height: 100px;
  width: 600px;
  max-width: 90vw;
  max-height: 90vh;
  background: white;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 12px 24px 0px;
`
const Row = styled.div`
  min-height: 300px;
  display: flex;
`
const CloseButton = styled(Button)`
  position: absolute;
  top: -.5em;
  right: -.5em;
  width: 2em;
  height: 2em;
  border-radius: 50%;
  line-height: 2.25em;
  font-size: 2rem;
  z-index: 1;
  box-shadow: rgba(17, 12, 46, 0.25) -2px 2px 8px 2px;
  
  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`
//#endregion

const OrderHistory = ({ close }) => {
  const auth = getAuth()
  const firestore = getFirestore()
  const [user] = useAuthState(auth)
  const [orders] = useCollectionData(query(collection(firestore, "orders"), where("user", "==", user.email)))
  const [selectedOrder, setSelectedOrder] = useState({})
  return (
    <Container>
      <CloseButton onClick={close}><IoCloseSharp /></CloseButton>
      <OrderHistoryHeader />
      <Row>
        <OrderList orders={orders} selected={selectedOrder} onSelect={order => setSelectedOrder(order)} />
        <OrderDetails order={selectedOrder} />
      </Row>
    </Container>
  )
}

export default OrderHistory