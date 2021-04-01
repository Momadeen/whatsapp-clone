import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Main from "./components/Main";
import Chat from "./components/Chat";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/:id" component={Chat} />
          <Route path="/" component={Main} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
