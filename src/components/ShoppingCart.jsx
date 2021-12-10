import styled from "styled-components"
import { useContext, useState } from "react"
import { Button } from "components/common/Button"
import { FaShoppingCart } from "react-icons/fa"
import Modal from "components/common/Modal"
import Order from "components/order/Order"
import { IoCloseSharp } from "react-icons/io5"
import { OrderContext } from "contexts/OrderContext"
import { scaleIn } from "styles/Animation"

//#region styled
const CartButton = styled(Button)`
  position: absolute;
  top: 64px;
  right: 1rem;
  margin-left: 180px;
  margin-top: 1rem;
  height: 3rem;
  width: 3rem;
  animation: ${scaleIn} 200ms var(--bounce) 0ms;
`
const Counter = styled.div`
  position: absolute;
  bottom: -12px;
  right: -12px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  line-height: 32px;
  background: white;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
`
//#endregion

const ShoppingCart = () => {
  const { counter } = useContext(OrderContext)
  const [open, setOpen] = useState(false)
  const openModal = () => setOpen(true)
  const closeModal = () => setOpen(false)
  return (
    <>
      <CartButton key={counter} tabIndex={0} onClick={openModal}>
        {open ? <IoCloseSharp /> : <FaShoppingCart />}
        {counter > 0 && <Counter>{counter}</Counter>}
      </CartButton>
      <Modal isOpen={open} close={closeModal}><Order close={closeModal} /></Modal>
    </>
  )
}

export default ShoppingCart