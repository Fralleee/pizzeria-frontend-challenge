import styled from 'styled-components';
import { Button } from 'components/common/Button';

// #region styled
const Container = styled.div`
  width: 100%;
  min-height: 120px;
  padding: 0 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Bonus = styled.div`
  height: 50px;
  width: 100%;
  text-align: center;
  padding: 1rem;
  background: #f0f0f0;
`
const OrderButton = styled(Button)`
  width: 100%;
  margin-top: 1rem;
`
const TextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0.25rem 0;
`
const Text = styled.h3` margin: 0; ` 
const SmallText = styled.h4`
  margin: 0;
  color: #666;
`
// #endregion

const OrderSummary = ({ order }) => {
  const totalAmountWithoutBonus = order.reduce((acc, curr) => acc += curr.cost * curr.amount, 0);
  const bonusThreshhold = 50;
  const bonusAmountPercentage = .1;
  const eligibleForBonus = totalAmountWithoutBonus > bonusThreshhold;
  const bonusText = eligibleForBonus
    ? `You have received ${bonusAmountPercentage * 100}% bonus` 
    : `Spend $${(Math.round(totalAmountWithoutBonus - bonusThreshhold * 100) / 100).toFixed(2)} to receive ${bonusAmountPercentage * 100}% bonus`
  const totalAmount = eligibleForBonus ? totalAmountWithoutBonus * 1 - bonusAmountPercentage : totalAmountWithoutBonus;

  return (
    <Container>
      <Bonus>{bonusText}</Bonus>
      {eligibleForBonus && (
        <TextContainer>
          <SmallText>Bonus</SmallText>
          <SmallText>-${(Math.round(totalAmountWithoutBonus * bonusAmountPercentage * 100) / 100).toFixed(2)}</SmallText>
        </TextContainer>
      )}
      <TextContainer>
        <Text>Total</Text>
        <Text>${(Math.round(totalAmount * 100) / 100).toFixed(2)}</Text>
      </TextContainer>
      <OrderButton>Place order</OrderButton>
    </Container>
  );
};

export default OrderSummary;