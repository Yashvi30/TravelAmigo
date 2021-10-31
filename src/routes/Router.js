import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { useSigninCheck } from "reactfire";

import Loader from "../components/Loader";

import Landing from "../pages/Landing";
import Login from "../pages/Login";
import ContactUs from "../pages/ContactUs";
import User from "../pages/User";
import Chat from "../components/Chat";
import SignUp from "../pages/SignUp";
import Navbar from "../components/Navbar";
import AddTrip from "../pages/AddTrip";

const Router = () => {
  const { status, data: signedIn } = useSigninCheck();

  if (status === "loading") {
    return <Loader />;
  }

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Redirect to="/login" />
          </Route>

          <Route path="/contact-us" component={ContactUs} />

          <Route path="/user/:uid" component={User} />

          <Route path="/login">
            {signedIn.signedIn ? <Redirect to="/dashboard" /> : <Login />}
          </Route>

          <Route path="/signup">
            {signedIn.signedIn ? <Redirect to="/dashboard" /> : <SignUp />}
          </Route>

          <Route path="/add-trip">
            {signedIn.signedIn ? <AddTrip /> : <Redirect to="/login" />}
          </Route>

          <Route path="/dashboard">
            {signedIn.signedIn ? (
              <Redirect to={`/user/${signedIn.user.uid}`} />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>

          <Route path="/chat">
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
