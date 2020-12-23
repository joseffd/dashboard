import logo from './logo.svg';
import './App.css';
import { Route, Switch } from "react-router-dom";
import  LoginPage  from "./login/LoginPage";
import HomePage from "./home/homePage";
import SignupPage from "./signupPage/signupPage";

function App() {
  return (
      <Switch>
        <Route path="/" exact>
          <LoginPage />
        </Route>
          <Route path="/signup" exact>
              <SignupPage />
          </Route>
          <Route path="/user/:username">
              <HomePage />
          </Route>
      </Switch>
  );
}

export default App;
