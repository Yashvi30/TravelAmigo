import { useState } from "react";
import { useAuth } from "reactfire";
import {
  // signInWithPopup,
  // GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Link } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState(null);

  const auth = useAuth();
  // const googleProvider = new GoogleAuthProvider();

  // const signInWithGoogle = () => {
  //   signInWithPopup(auth, googleProvider)
  //     .then(() => {
  //       setError(null);
  //     })
  //     .catch((err) => {
  //       console.log(JSON.stringify(err));
  //       setError(err);
  //     });
  // };

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

  const handleReset = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    setError(null);
  };

  return (
    <div className="h-full flex justify-center items-center p-16">
      <div className="p-4 rounded-lg shadow-lg flex flex-col gap-4 bg-gray-200">
        <h1 className="text-3xl font-bold">Login to TravelAmigo!</h1>

        <form
          onSubmit={handleSubmit}
          onReset={handleReset}
          className="flex flex-col gap-2"
        >
          <div className="flex flex-col gap-1">
            <label className="font-bold text-gray-800">Email</label>
            <input
              type="email"
              value={email}
              onChange={emailChangeHandler}
              className="rounded-lg border-4 border-purple-300"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-bold text-gray-800">Password</label>
            <input
              type="password"
              value={password}
              onChange={passwordChangeHandler}
              className="rounded-lg border-4 border-purple-300"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-2">
            <button
              type="submit"
              className="p-2 bg-indigo-500 text-white font-bold prose-xl shadow-md w-full"
            >
              Log in
            </button>
            <button
              type="reset"
              className="p-2 bg-gray-500 text-white font-bold prose-xl shadow-md w-full"
            >
              Clear
            </button>
          </div>
        </form>
        <Link
          to="/signup"
          as="button"
          className="p-2 bg-green-500 text-white font-bold prose-xl shadow-md text-center"
        >
          Sign up
        </Link>
        {error && (
          <p className="text-red-500 text-center prose-2xl font-bold">
            {error.code}
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
