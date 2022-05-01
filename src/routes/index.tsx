import React, { ReactElement, Suspense, lazy } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../assets/theme";
import history from "../utils/history";
import Monitor from "../components/monitor/Monitor";
import NavbarC from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import State from "../components/monitor/State";
const Home = lazy(() => import("../views/home/App"));

const IndexRouter: React.FC = (): ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <NavbarC />
      <Router history={history}>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/monitor" exact component={Monitor} />
            <Route path="/monitor/:state([A-Za-z]+)/" exact component={State} />
            <Route
              path="/monitor/:state([A-Za-z]+)/:district([A-Za-z]+)/"
              exact
              component={State}
            />
          </Switch>
        </Suspense>
      </Router>
      <Footer />
    </ThemeProvider>
  );
};

export default IndexRouter;
