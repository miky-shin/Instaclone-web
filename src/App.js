import { useReactiveVar } from "@apollo/client";
//import { useState } from "react";
import {
  HashRouter as Router,
  //Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import routes from "./routes";
import NotFound from "./screens/NotFound";
import { darkModeVar, isLoggedInVar } from "./apollo";
import { ThemeProvider } from "styled-components";
// eslint-disable-next-line
import { darkTheme, GlobalStyles, lightTheme } from "./styles";
import { HelmetProvider } from "react-helmet-async";

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const darkMode = useReactiveVar(darkModeVar);
  return (
    <HelmetProvider>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Router>
          <GlobalStyles />
          <Switch>
            <Route path={routes.home} exact>
              {isLoggedIn ? <Home /> : <Login />}
            </Route>
            {!isLoggedIn ? (
              <Route path={routes.SignUp}>
                <SignUp />
              </Route>
            ) : null}
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
