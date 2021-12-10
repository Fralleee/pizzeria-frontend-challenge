import styled from "styled-components"
import OrderHeader from "./OrderHeader"
import OrderList from "./OrderList"
import OrderSummary from "./OrderSummary"

//#region styled
const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 600px;
  width: 400px;
  max-width: 90vw;
  max-height: 90vh;
  background: white;
  box-shadow: var(--modal-shadow);
`
//#endregion

const Order = ({ close }) => {
  return (
    <Container>
      <div>
        <OrderHeader />
        <OrderList />
      </div>
      <OrderSummary close={close} />
    </Container>
  )
}

export default Order