import { useState } from "react";
import { useAuth } from "reactfire";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const auth = useAuth();
  const provider = new GoogleAuthProvider();
  const [error, setError] = useState(null);

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setError(null);
      })
      .catch((err) => {
        console.log(JSON.stringify(err));
        setError(err);
      });
  };

  return (
    <div>
      <h1>Login to TravelAmigo!</h1>
      <button onClick={signIn}>Login with Google</button>
      {error && <p>{JSON.stringify(error)}</p>}
    </div>
  );
};

export default Login;
