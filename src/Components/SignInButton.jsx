import styled from 'styled-components';
import "firebase/auth";
import { signInWithPopup, GoogleAuthProvider, } from "firebase/auth";

const SignInButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  height: 50px;
  width: 240px;
  box-shadow: 0 0 1px 1px rgba(100, 100, 111, 0.2);
  font-size: 16px;
  line-height: 48px;
  border-radius: 48px;
  border: 1px solid transparent;

  &:hover {    
    border-color: var(--primary-color);
    background-color: white;
    color: var(--primary-color);
  }
`

export const SignIn = ({ auth }) => {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).catch((error) => {
      // catch and forget
      console.log(error);
    });
  };

  return <SignInButton onClick={signInWithGoogle}>Sign-in with Google</SignInButton>;
}