import Navbar from "./Component/Navbar";
import Home from "./Component/Home"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Create from "./Component/Create";
import BlogDetail from "./Component/BlogDetail";
import NotFound from "./Component/NotFound";

function App() {
  return (
    <div className="App">
    <Router>
    <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/create">
          <Create />
        </Route>
        <Route exact path="/blog/:id">
          <BlogDetail />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
