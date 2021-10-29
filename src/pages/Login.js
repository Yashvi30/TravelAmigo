import { useState } from "react";
import { useAuth } from "reactfire";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const [error, setError] = useState(null);

  const auth = useAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then(() => {
        setError(null);
      })
      .catch((err) => {
        console.log(JSON.stringify(err));
        setError(err);
      });
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailChangeHandler = (e) => setEmail(e.target.value);
  const passwordChangeHandler = (e) => setPassword(e.target.value);

  const signInWithEmail = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setError(null);
      })
      .catch((err) => {
        console.log(JSON.stringify(err));
        setError(err);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    signInWithEmail();

    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1>Login to TravelAmigo!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <br />
          <input type="email" value={email} onChange={emailChangeHandler} />
        </div>
        <div>
          <label>Password</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={passwordChangeHandler}
          />
        </div>
        <div>
          <button type="submit">Log in</button>
          <button type="reset">Clear</button>
        </div>
      </form>
      <hr />
      <button onClick={signInWithGoogle}>Login with Google</button>
      {error && <p>{error.code}</p>}
    </div>
  );
};

export default Login;
