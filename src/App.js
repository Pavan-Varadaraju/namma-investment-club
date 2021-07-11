import "./App.css";
import Dashboard from "./components/dashboard/dashboard";
import Menu from "./components/menu/menu";
import Investments from "./components/investments/investments";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contributions from "./components/contributions/contributions";
import store from "./store";
import { Provider } from "react-redux";
require("dotenv").config();

function App() {
  return (
    <Provider store={store}>
      <div className="row">
        {/* Namma Investment Club - COMING SOON!!! */}
        <div className="col-md-8 offset-md-2 py-2">
          <Router>
            <Menu />
            <div>
              <Switch>
                <Route path="namma-investment-club/dashboard">
                  <Dashboard />
                </Route>
                <Route path="namma-investment-club/investments">
                  <Investments />
                </Route>
                <Route path="namma-investment-club/contributions">
                  <Contributions />
                </Route>
                <Route path="/">
                  <Dashboard />
                </Route>
              </Switch>
            </div>
          </Router>
        </div>
      </div>
    </Provider>
  );
}

export default App;
