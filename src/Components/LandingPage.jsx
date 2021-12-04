import { SignIn, SignOut } from "./Authentication";

const LandingPage = ({ user, auth }) => {
  return (
    <section>
      {user ? (
        <div>
          <center>
            Welcome back {user.displayName}
            <SignOut auth={auth} />
          </center>
        </div>
      ) : (
        <div>
          <h1>Diwala Pizzeria</h1>
          <SignIn auth={auth} />
        </div>
      )}
    </section>
  );
};

export default LandingPage;
