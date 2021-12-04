import "firebase/auth";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

export const SignIn = ({ auth }) => {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).catch((error) => {
      // catch and forget
      console.log(error);
    });
  };

  return <button onClick={signInWithGoogle}>Sign-in with Google</button>;
}

export const SignOut = ({ auth }) => auth.currentUser && <button onClick={() => signOut(auth)}>Sign-out</button>;