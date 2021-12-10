import { useContext, useState } from "react"
import styled from "styled-components"
import { Button } from "components/common/Button"
import Toggle from "components/common/Toggle"
import { pizzaSizes, pizzaImages } from "constants/pizzaConstants"
import { OrderContext } from "contexts/OrderContext"

//#region styled
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
  box-shadow: var(--modal-shadow);
  border-radius: 28px;
  transition: all 0.2s ease;
  user-select: none;
  
  @media (max-width: 500px) {
    font-size: 0.7rem;
  }

  & img {
    border-radius: 50%;
    max-width: 60%;
  box-shadow: var(--pizza-shadow);
  }  
`
const PlaceOrder = styled(Button)`
  margin-top: 1em;
  font-size: 1.2rem;
  width: 10em;
  
  @media (max-width: 500px) {
    margin-top: 1em;
    font-size: .8rem;
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
//#endregion

const PizzaCustomization = ({ pizza, close }) => {
  const { add } = useContext(OrderContext)
  const [size, setSize] = useState(pizzaSizes[0])
  const sizeOptions = pizzaSizes.map(x => x.size)

  const selectedSize = (e, i) => setSize(pizzaSizes[i])

  const placeOrder = () => {
    add({ ...pizza, size: size.size })
    close()
  }

  return (
    <Container>
      <Name>{pizza.name}</Name>
      <Ingredients>{pizza.ingredients}</Ingredients>
      {pizzaImages[pizza.name]}
      <Size>{size.description}</Size>
      <Cost>${(Math.round((pizza.cost + size.extraCost) * 100) / 100).toFixed(2)}</Cost>
      <Toggle items={sizeOptions} defaultChecked={sizeOptions[0]} callback={selectedSize} />
      <PlaceOrder tabIndex={0} onClick={placeOrder}>Get in my belly!</PlaceOrder>
    </Container>
  )
}

export default PizzaCustomization
