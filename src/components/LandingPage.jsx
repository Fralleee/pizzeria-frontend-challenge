import styled from 'styled-components';
import { SignIn } from "./SignInButton";

const Header = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
`

const LandingPage = ({ auth }) => {
  return (
    <Header>
      <h1>Diwala Pizzeria</h1>
      <SignIn auth={auth} />
    </Header>
  );
};

export default LandingPage;
