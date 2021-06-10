// import logo from './logo.svg';
import "./App.css";
// import Login from './components/login/login';
import Dashboard from "./components/dashboard/dashboard";
import Menu from "./components/menu/menu";
import Investments from './components/investments/investments'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contributions from "./components/contributions/contributions";

function App() {
  return (
    <div className="row">
      {/* Namma Investment Club - COMING SOON!!! */}
      <div className="col-md-8 offset-md-2 py-2">
        {/* <Login /> */}
        

        <Router>
        <Menu />
          <div>
            

            <Switch>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/investments">
                <Investments />
              </Route>
              <Route path="/contributions">
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
  );
}

export default App;
