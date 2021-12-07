import MargheritaImage from "images/margherita.svg"
import VegetarianImage from "images/vegetarian.svg"
import PepperoniImage from "images/pepperoni.svg"
import FunghiImage from "images/funghi.svg"
import TomasoImage from "images/tomaso.svg"

export const pizzaImages = {
  Margherita: <img src={MargheritaImage} alt="Margherita vector graphics" />,
  Vegetarian: <img src={VegetarianImage} alt="Vegetarian vector graphics" />,
  Pepperoni: <img src={PepperoniImage} alt="Pepperoni vector graphics" />,
  Funghi: <img src={FunghiImage} alt="Funghi vector graphics" />,
  Tomaso: <img src={TomasoImage} alt="Tomaso vector graphics" />
}
export const pizzaSizes = [
  { size: "S", extraCost: 0, description: "Small size (20 cm)" },
  { size: "M", extraCost: 3, description: "Medium size (26 cm)" },
  { size: "L", extraCost: 6, description: "Large size (32 cm)" }
]