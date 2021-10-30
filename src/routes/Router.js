import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { useAuth, useSigninCheck } from "reactfire";

import Loader from "../components/Loader";

import Landing from "../pages/Landing";
import Login from "../pages/Login";
import ContactUs from "../pages/ContactUs";
import User from "../pages/User";
import Chat from "../components/Chat";
import SignUp from "../pages/SignUp";
import { signOut } from "@firebase/auth";

const Router = () => {
  const auth = useAuth();
  const { status, data: signedIn } = useSigninCheck();

  if (status === "loading") {
    return <Loader />;
  }

  return (
    <>
      <header>
        <button onClick={() => signOut(auth)}>Sign out!</button>
      </header>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Landing} />

          <Route path="/contact-us" component={ContactUs} />

          <Route path="/user/:uid" component={User} />

          <Route path="/login">
            {signedIn.signedIn ? <Redirect to="/dashboard" /> : <Login />}
          </Route>

          <Route path="/signup">
            {signedIn.signedIn ? <Redirect to="/dashboard" /> : <SignUp />}
          </Route>

          <Route path="/dashboard">
            {signedIn.signedIn ? (
              <Redirect to={`/user/${signedIn.user.uid}`} />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route path="/Chat">
            {signedIn.signedIn ? (
              <div className="chatApp">
                <Chat />
              </div>
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Router;
