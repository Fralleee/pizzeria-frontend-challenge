import "firebase/auth";
import { signInWithPopup, GoogleAuthProvider, } from "firebase/auth";
import { Button } from 'components/common/Button';

export const SignIn = ({ auth }) => {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).catch((error) => {
      // catch and forget
      console.log(error);
    });
  };

  return <Button onClick={signInWithGoogle}>Sign-in with Google</Button>;
}