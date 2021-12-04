import styled from 'styled-components';
import { PizzaImageMap } from '../../utils/pizzaHelpers';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  padding: 2rem;
  width: 200px;
  height: 300px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
`

const Name = styled.h4`
  margin-bottom: 0;
`

const Pizza = ({ pizza }) => {
  return (
    <Container>
      {PizzaImageMap[pizza.name]}
      <Name>{pizza.name}</Name>
      <p>${pizza.cost}</p>
    </Container>
  );
};

export default Pizza;
