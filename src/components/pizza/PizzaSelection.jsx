import styled from "styled-components"
import { collection, getFirestore } from "firebase/firestore"
import { useCollectionData } from "react-firebase-hooks/firestore"
import BackgroundImage from "images/background.svg"
import Pizza from "./Pizza"

//#region styled
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 3rem;
  padding-bottom: 200px;
  user-select: none;
  
  @media (max-width: 500px) {
    margin: 0;
    width: 100%;
    max-width: none;
  }
`

const PizzaContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  z-index: 1;
`

const Title = styled.h1`
  font-family: 'Dancing Script', cursive;
  text-align: center;
  font-size: 6rem;
  margin: 1rem;
  font-weight: bold;
  user-select: none;
  
  @media (max-width: 500px) {
    font-size: 3rem;
    margin: 0 1rem;
  }
`

const Background = styled.img`
  position:absolute;
  left: 2rem;
  right: 2rem;
  top:100px;
  bottom: 0;
  opacity: 0.1;
    
  @media (max-width: 500px) {
    top:100px;
  }
`
//#endregion

const PizzaSelection = () => {
  const firestore = getFirestore()
  const query = collection(firestore, "pizzas")
  const [pizzas] = useCollectionData(query)
  return (
    <Container>
      <Background src={BackgroundImage} alt="Background vector graphics" />
      <Title>Get your dough here!</Title>
      <PizzaContainer>
        {pizzas?.map(pizza => <Pizza key={pizza.name} pizza={pizza} />)}
      </PizzaContainer>
    </Container>
  )
}

export default PizzaSelection