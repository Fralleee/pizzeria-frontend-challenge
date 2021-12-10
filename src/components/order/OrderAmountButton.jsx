import styled from "styled-components"
import { IoMdAdd, IoMdRemove, IoMdTrash } from "react-icons/io"

//#region styled
const Container = styled.div`
  position: absolute;
  top: 28px;
  display: flex;
  font-size: 1rem;
  line-height: 24px;
`

const Display = styled.div`
  height: 24px;
  min-width: 32px;
  text-align: center;
  margin: 0 .5em;
  background-color: #f0f0f0;
  color: #666;  
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
`

const Button = styled.button`
  height: 24px;
  color: white;
  background-color: var(--primary-color);
  line-height: 26px;
  border-radius: 5px;
  cursor: pointer;
`
//#endregion

const OrderAmountButton = ({ item, callback }) => {
  return (
    <Container>
      <Button tabIndex={0} onClick={() => callback(item, -1)}>{item.amount > 1 ? <IoMdRemove /> : <IoMdTrash />}</Button>
      <Display>{item.amount}</Display>
      <Button tabIndex={0} onClick={() => callback(item, 1)}><IoMdAdd /></Button>
    </Container>
  )
}

export default OrderAmountButton
