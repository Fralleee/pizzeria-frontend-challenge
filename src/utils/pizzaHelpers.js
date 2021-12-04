import styled from "styled-components";
import MargheritaImage from "../images/margherita.svg";
import VegetarianImage from "../images/vegetarian.svg";
import PepperoniImage from "../images/pepperoni.svg";

const PizzaImage = styled.img`
  max-width: 160px;
`;

export const PizzaImageMap = {
  Margherita: (
    <PizzaImage src={MargheritaImage} alt="Margherita vector graphics" />
  ),
  Vegetarian: (
    <PizzaImage src={VegetarianImage} alt="Vegetarian vector graphics" />
  ),
  Pepperoni: (
    <PizzaImage src={PepperoniImage} alt="Pepperoni vector graphics" />
  ),
};
