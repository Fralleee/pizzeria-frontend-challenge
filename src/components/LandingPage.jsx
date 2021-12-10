import styled from "styled-components"
import { getAuth } from "firebase/auth"
import { SignIn } from "./SignInButton"

//#region styled
const Header = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -150px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: calc(10px + 2vmin);
`
//#endregion

const LandingPage = () => {
  const auth = getAuth()
  return (
    <Header>
      <h1>Diwala Pizzeria</h1>
      <SignIn auth={auth} />
    </Header>
  )
}

export default LandingPage
