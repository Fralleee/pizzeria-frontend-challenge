import styled from 'styled-components';

// #region styled
const Container = styled.ul`
  min-height: 100px;
  max-height: 300px;
  overflow-y: scroll;
  width: 100%;
  padding: 0 1rem;
  list-style: none;
`

const OrderItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-top: .5rem;
`

const ItemName = styled.h4`
  display: flex;
  align-items: center;
  font-weight: bold;
  margin: 0;
`
const ExtraInformation = styled.span`
  font-weight: normal;
  color: #aaa;
  font-style: italic;
  margin: 0;
  margin-left: .5rem;
`
const Cost = styled.h5`
  font-weight: normal;
  margin: 0;
  min-width: 80px;
  text-align: right;
  font-size: 1.125rem;
`

const CostAndAmount = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 200px;
`
// #endregion

const OrderList = ({ order }) => {
  return (
    <Container>
      {order.map(item => (
        <OrderItem key={item.name + item.size}>
          <ItemName>
            {item.name}
            <ExtraInformation>{item.size}</ExtraInformation>
            <ExtraInformation>x{item.amount}</ExtraInformation>
          </ItemName>
          <CostAndAmount>
            <Cost>${(Math.round(item.cost * item.amount * 100) / 100).toFixed(2)}</Cost>
          </CostAndAmount>
        </OrderItem>
      ))}
    </Container>
  );
};

export default OrderList;