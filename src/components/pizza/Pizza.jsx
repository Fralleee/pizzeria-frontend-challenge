import styled from "styled-components"
import { useState } from "react"
import Modal from "components/common/Modal"
import { pizzaSizes, pizzaImages } from "constants/pizzaConstants"
import PizzaCustomization from "./PizzaCustomization"
import { ButtonNoStyle } from "components/common/Button"

//#region styled
const Container = styled(ButtonNoStyle)`
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  margin: 1rem;
  width: 250px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 28px;
  box-shadow: var(--card-shadow);
  transition: all 0.2s ease;
  /* user-select: none; */
  cursor: pointer;  

  & img {
    max-width: 160px;
    transition: all 0.3s ease-out;
  }

  &:hover {
    transform: scale(1.1);
  box-shadow: var(--card-shadow-hover);
    
    & img {
      max-width: 160px;
      transform: translateY(-6px) scale(1.1);
    }
  }
`

const Name = styled.h2`
  margin-bottom: .25rem;
  font-weight: normal;
`

const Description = styled.h4`
  margin-top: 0;
  font-weight: normal;
  text-align: center;
  color: gray;
`

const Info = styled.h4`
  margin-top: 0;
  font-weight: normal;
  font-style: italic;
  color: gray;
`

const PriceRange = styled.h2`
  margin-top: 0;
  margin-bottom: 1rem;
`
//#endregion

const Pizza = ({ pizza }) => {
  const [open, setOpen] = useState(false)
  const [origin, setOrigin] = useState({})

  const maxExtraCost = Math.max(...pizzaSizes.map(x => x.extraCost))

  const openModal = e => {
    const rect = e.currentTarget.getBoundingClientRect()
    setOrigin({ left: rect.left - rect.width * 0.5, top: rect.top - rect.height * 0.5 })
    setOpen(true)
  }
  const closeModal = () => setOpen(false)

  const minCost = (Math.round(pizza.cost * 100) / 100).toFixed(2)
  const maxCost = (Math.round((pizza.cost + maxExtraCost) * 100) / 100).toFixed(2)
  return (
    <>
      <Container tabIndex={0} onClick={openModal}>
        {pizzaImages[pizza.name]}
        <Name>{pizza.name}</Name>
        <Description>{pizza.description}</Description>
        <PriceRange>${minCost} - {maxCost}</PriceRange>
        <Info>Click to customize</Info>
      </Container>
      <Modal isOpen={open} origin={origin} close={closeModal}><PizzaCustomization pizza={pizza} close={closeModal} /></Modal>
    </>
  )
}

export default Pizza
