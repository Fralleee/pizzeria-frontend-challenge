import "firebase/firestore";
import "firebase/auth";

import firebase from "firebase/compat/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import FirebaseConfig from "./firebaseConfig";
import LandingPage from "./Components/LandingPage";
import PizzaOptions from "./Components/PizzaOptions";
import "./App.css";

firebase.initializeApp(FirebaseConfig);

const auth = getAuth();
const firestore = getFirestore();

const App = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header className="App-header">
        <LandingPage user={user} auth={auth} />
        <PizzaOptions db={firestore} />
      </header>
    </div>
  );
};

export default App;
