import logo from './logo.svg';
import './App.css';
import { Route, Switch } from "react-router-dom";
import { LoginPage } from "./login/LoginPage";

function App() {
  return (
      <Switch>
        <Route path="/" exact>
          <LoginPage />
        </Route>
      </Switch>
  );
}

export default App;
