import React, { ReactElement, Suspense, lazy } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../assets/theme";
import history from "../utils/history";
import NavbarC from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Countries from "../views/monitor/Countries";
import States from "../views/monitor/States";
import Districts from "../views/monitor/Districts";
const Home = lazy(() => import("../views/home/App"));

const IndexRouter: React.FC = (): ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <NavbarC />
      <Router history={history}>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              path="/monitor/:country([A-Za-z]+)/"
              exact
              component={Countries}
            />
            <Route
              path="/monitor/:country([A-Za-z]+)/:state([A-Za-z]+)/"
              exact
              component={States}
            />
            <Route
              path="/monitor/:country([A-Za-z]+)/:state([A-Za-z]+)/:district([A-Za-z]+)/"
              exact
              component={Districts}
            />
          </Switch>
        </Suspense>
      </Router>
      <Footer />
    </ThemeProvider>
  );
};

export default IndexRouter;
