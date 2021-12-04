import styled from 'styled-components';
import {  collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Loader from '../common/Loader'
import Pizza from "./Pizza";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const PizzaOptions = ({ db }) => {
  const query = collection(db, "pizzas");
  const [pizzas, loading] = useCollectionData(query);
  return loading ? <Loader /> : (
    <Container>
      {pizzas.map(pizza => <Pizza pizza={pizza} />)}
    </Container>
  );
};

export default PizzaOptions;