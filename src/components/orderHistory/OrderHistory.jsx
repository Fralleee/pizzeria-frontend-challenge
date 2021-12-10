import styled from "styled-components"
import { useState } from "react"
import { collection, getFirestore, orderBy, query, where } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"
import { useCollectionData } from "react-firebase-hooks/firestore"
import OrderHistoryList from "./OrderHistoryList"
import OrderHistoryHeader from "./OrderHistoryHeader"

//#region styled
const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 800px;
  height: 800px;
  max-width: 90vw;
  max-height: 90vh;
  background: white;
  padding-bottom: 2rem;
  box-shadow: var(--modal-shadow);
`
//#endregion

const OrderHistory = ({ close }) => {
  const auth = getAuth()
  const firestore = getFirestore()
  const [user] = useAuthState(auth)
  const [orders] = useCollectionData(
    query(
      collection(firestore, "orders"),
      where("user", "==", user.email),
      orderBy("timestamp", "desc")
    )
  )
  const [selectedOrder, setSelectedOrder] = useState({})
  return (
    <Container>
      <OrderHistoryHeader />
      <OrderHistoryList orders={orders} selected={selectedOrder} onSelect={order => setSelectedOrder(order)} />
    </Container>
  )
}

export default OrderHistory