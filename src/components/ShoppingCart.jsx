import styled from 'styled-components';
import { useState } from 'react';
import { Button } from 'components/common/Button';
import { FaShoppingCart } from 'react-icons/fa'
import Modal from 'components/common/Modal';
import Order from 'components/order/Order';

// #region styled
const CartButton = styled(Button)`
  position: fixed;
  top: 64px;
  margin-left: 180px;
  margin-top: 1rem;
  height: 3rem;
  width: 3rem;
`
// #endregion

const ShoppingCart = () => {
  const [open, setOpen] = useState(false);
  const [origin, setOrigin] = useState({});

  const openModal = e => {
    const rect = e.currentTarget.getBoundingClientRect();
    setOrigin({ left: rect.left - rect.width * 0.5, top: rect.top - rect.height * 0.5 });
    setOpen(true);
  }
  const closeModal = () => setOpen(false);
  return (
    <>
      <CartButton onClick={openModal}><FaShoppingCart /></CartButton>
      {open && <Modal origin={origin} close={closeModal}><Order close={closeModal}/></Modal>}
    </>
  );
};

export default ShoppingCart;