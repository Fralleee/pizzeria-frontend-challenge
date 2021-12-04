import "firebase/firestore";
import "firebase/auth";

import firebase from "firebase/compat/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import FirebaseConfig from "../firebaseConfig";
import LandingPage from "components/LandingPage";
import PizzaOptions from "components/pizza/PizzaOptions";
import UserControls from "components/UserControls";

firebase.initializeApp(FirebaseConfig);

const auth = getAuth();
const firestore = getFirestore();

const App = () => {
  const [user] = useAuthState(auth);
  return user ? (
    <div>
      <UserControls auth={auth} />
      <PizzaOptions db={firestore} />
    </div>
  ) : (
    <LandingPage auth={auth} />
  );
};

export default App;
