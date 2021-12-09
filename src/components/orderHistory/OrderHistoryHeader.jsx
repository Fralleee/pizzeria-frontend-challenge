import styled from "styled-components"

//#region styled
const Container = styled.div`
  height: 50px;
  line-height: 50px;
  text-indent: 1rem;
  width: 100%;
  font-size: 1.25rem;
  background-color: var(--primary-color);
  color: white;
`
//#endregion

const OrderHistoryHeader = () => {
  return (
    <Container>My orders</Container>
  )
}

export default OrderHistoryHeader