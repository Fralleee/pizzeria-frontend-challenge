import styled from 'styled-components';
import OrderHeader from './OrderHeader';
import OrderList from './OrderList';
import OrderSummary from './OrderSummary';
import Button from 'components/common/Button';
import { IoCloseSharp } from 'react-icons/io5'

// #region styled
const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100px;
  width: 400px;
  max-width: 90vw;
  max-height: 90vh;
  background: white;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 12px 24px 0px;
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
  box-shadow: rgba(17, 12, 46, 0.25) -2px 2px 8px 2px;
  
  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`
// #endregion

const Order = ({ close }) => {
  const order = [
    { name: 'Margherita', size: 'small', cost: 6, amount: 2 },
    { name: 'Margherita', size: 'medium', cost: 8, amount: 1 },
    { name: 'Margherita', size: 'large', cost: 8, amount: 1 },
    { name: 'Funghi', size: 'small', cost: 8, amount: 1 },
    { name: 'Funghi', size: 'medium', cost: 8, amount: 1 },
    { name: 'Funghi', size: 'large', cost: 8, amount: 1 },
    { name: 'Tomaso', size: 'small', cost: 8, amount: 1 },
    { name: 'Tomaso', size: 'medium', cost: 8, amount: 1 },
    { name: 'Tomaso', size: 'large', cost: 8, amount: 11 }
  ]
  return (
    <Container>
      <CloseButton onClick={close}><IoCloseSharp /></CloseButton>
      <OrderHeader />
      <OrderList order={order} />
      <OrderSummary order={order} />
    </Container>
  );
};

export default Order;