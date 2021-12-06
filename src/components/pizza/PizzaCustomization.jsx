import { useState } from "react";
import { IoCloseSharp } from 'react-icons/io5'
import styled from 'styled-components';
import { Button } from 'components/common/Button';
import Toggle from 'components/common/Toggle';
import { PizzaImageMap } from 'utils/pizzaHelpers';
import { sizes } from 'utils/sizeHelpers';

const Container = styled.div`
  padding: 2em 1.5em;
  margin: 1em;
  width: 400px;
  height: 700px;
  max-width: 80vw;
  max-height: 80vh;
  display: flex;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: rgba(51, 47, 75, 0.25) 0px 48px 100px 0px;
  border-radius: 28px;
  transition: all 0.2s ease;
  user-select: none;
  
  @media (max-width: 500px) {
    font-size: 0.7rem;
  }

  & img {
    border-radius: 50%;
    max-width: 60%;
    box-shadow: rgba(177, 116, 10, 0.6) 0px 4px 36px;
  }  
`
const PlaceOrder = styled(Button)`
  margin-top: 1em;
  border-radius: 5px;
  font-size: 1.2rem;
  width: 12em;
  
  @media (max-width: 500px) {
    margin-top: 1em;
    font-size: .8rem;
  }
`

const CloseButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
  width: 2em;
  height: 2em;
  border-radius: 50%;
  line-height: 2.25em;
  font-size: 2rem;
  
  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`

const Name = styled.h1`
  margin-bottom: .5em;
`

const Ingredients = styled.h3`
  max-width: 350px;
  text-align: center;
  margin-top: 0;
  margin-bottom: 1.5em;
  font-weight: normal;
  color: gray;
`

const Size = styled.h3`
  text-align: center;
  margin-top: 2em;
  font-weight: normal;
  margin-bottom: .25em;
`

const Cost = styled.h1`
  padding: 0 3em;
  text-align: center;
  margin-top: 0;
  
  @media (max-width: 500px) {
    margin-bottom: .5em;
  }
`

const PizzaCustomization = ({ pizza, close }) => {
  const [size, setSize] = useState(sizes[0]);
  const sizeOptions = sizes.map(x => x.size);

  const selectedSize = (e, i) => {
    setSize(sizes[i]);
  }

  return (
    <Container>
      <CloseButton onClick={close}><IoCloseSharp /></CloseButton>
      <Name>{pizza.name}</Name>
      <Ingredients>{pizza.ingredients}</Ingredients>
      {PizzaImageMap[pizza.name]}

      <Size>{size.description}</Size>
      <Cost>${(Math.round((pizza.cost + size.extraCost) * 100) / 100).toFixed(2)}</Cost>
      <Toggle items={sizeOptions} defaultChecked={sizeOptions[0]} callback={selectedSize} />
      <PlaceOrder>Get in my belly!</PlaceOrder>
    </Container>
  );
};

export default PizzaCustomization;
