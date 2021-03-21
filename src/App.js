import {
  HashRouter as Router,
  //Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import NotFound from "./screens/NotFound";

function App() {
  const isLoggedIn = true;
  return (
    <Router>
      <Switch>
        <Route path="/home" exact>
          {isLoggedIn ? <Home /> : <Login />}
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
