import styled from 'styled-components';
import { collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Loader from 'components/common/Loader'
import Pizza from "./Pizza";
import BackgroundImage from "images/background.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 200px;
  
  @media (max-width: 500px) {
    margin: .5rem 0;
    width: 100%;
    max-width: none;
  }
`

const PizzaContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
`

const BG = styled.img`
  position:absolute;
  left: 0;
  right: 0;
  top:0;
  bottom: 0;
  z-index: -1;
  opacity: 0.1;
  /* max-width: 80%; */
` 

const PizzaSelection = ({ db }) => {
  const query = collection(db, "pizzas");
  const [pizzas, loading] = useCollectionData(query);
  return (
    <Container>
    <BG src={BackgroundImage} alt="Background vector graphics" />
      <Title>Get your dough here!</Title>
      {loading ? <Loader /> : (
        <PizzaContainer>
          {pizzas.map(pizza => <Pizza key={pizza.name} pizza={pizza} />)}
        </PizzaContainer>
      )}
    </Container>
  );
};

export default PizzaSelection;