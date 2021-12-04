import {  collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

const PizzaOptions = ({ db }) => {
  const query = collection(db, "pizzas");
  const [pizzas] = useCollectionData(query);
  return (
    <pre style={{ textAlign: "left" }}>
      {JSON.stringify({ pizzas }, null, 2)}
    </pre>
  );
};

export default PizzaOptions;