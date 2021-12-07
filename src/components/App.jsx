import "firebase/firestore"
import "firebase/auth"

import firebase from "firebase/compat/app"

import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"

import FirebaseConfig from "../firebaseConfig"
import LandingPage from "components/LandingPage"
import PizzaSelection from "components/pizza/PizzaSelection"
import UserControls from "components/UserControls"
import { OrderProvider } from "contexts/OrderContext"

firebase.initializeApp(FirebaseConfig)

const auth = getAuth()
const firestore = getFirestore()

const App = () => {
  const [user] = useAuthState(auth)
  return user ? (
    <OrderProvider>
      <UserControls auth={auth} />
      <PizzaSelection db={firestore} />
    </OrderProvider>
  ) : (
    <LandingPage auth={auth} />
  )
}

export default App
