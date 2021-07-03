import { Route, Switch } from "react-router-dom";
import "./App.css";

import Layout from "./layouts/Layout.jsx";
import MainContainer from "./containers/MainContainer.jsx";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/">
          <MainContainer />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
