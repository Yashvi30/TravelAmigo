import { signOut } from "@firebase/auth";
import { Link } from "react-router-dom";
import { useAuth, useSigninCheck } from "reactfire";
import { useHistory } from "react-router";
import Loader from "./Loader";

const Navbar = () => {
  const { status, data: signInData } = useSigninCheck();
  const auth = useAuth();
  const history = useHistory();

  const signOutUser = () => {
    signOut(auth);
    history.push("/");
  };

  if (status === "loading") {
    return <Loader />;
  }

  return (
    <nav className="bg-purple-600 text-white flex flex-col md:flex-row gap-4 items-center px-4 py-2 md:h-16">
      <h1 className="text-xl font-bold bg-green-500 px-4 py-2 rounded-xl shadow-md flex gap-4 items-center">
        <img
          className="w-8 h-8 drop-shadow-md"
          src="/android-chrome-512x512.png"
          alt=""
        />
        <Link to="/" className="">
          TravelAmigo
        </Link>
      </h1>
      <div className="flex-1"></div>
      {signInData.signedIn && (
        <div className="font-bold prose-lg">
          <Link to={`/user/${signInData?.user?.uid}`}>My Profile</Link>
        </div>
      )}

      {signInData.signedIn && (
        <div className="font-bold prose-lg">
          <Link to="/add-trip">Add trip</Link>
        </div>
      )}

      {signInData.signedIn && (
        <div className="font-bold prose-lg">
          <Link to="/trips">Look for trips</Link>
        </div>
      )}

      {signInData.signedIn && (
        <div className="font-bold prose-lg">
          <button className="font-bold" onClick={signOutUser}>
            Sign out
          </button>
        </div>
      )}

      {!signInData.signedIn && (
        <div className="font-bold prose-lg">
          <div className="font-bold prose-lg">
            <Link to="/signup">Sign up</Link>
          </div>
        </div>
      )}

      {!signInData.signedIn && (
        <div className="font-bold prose-lg">
          <div className="font-bold prose-lg">
            <Link to="/login">Log in</Link>
          </div>
        </div>
      )}

      {signInData.signedIn && (
        <div>
          <img
            className="w-8 h-8 rounded-full shadow-xl"
            src={
              signInData?.user?.photoURL ||
              "https://randomuser.me/api/portraits/lego/5.jpg"
            }
            alt=""
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
