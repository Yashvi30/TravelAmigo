import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { useSigninCheck } from "reactfire";

import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import ContactUs from "../pages/ContactUs";

const Router = () => {
  const { status, data: signedIn } = useSigninCheck();

  if (status === "loading") {
    return <></>;
  }

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Landing} />

          <Route path="/contact-us" component={ContactUs} />

          <Route path="/login">
            {signedIn.signedIn ? <Redirect to="/dashboard" /> : <Login />}
          </Route>

          <Route path="/dashboard">
            {signedIn.signedIn ? <Dashboard /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Router;
