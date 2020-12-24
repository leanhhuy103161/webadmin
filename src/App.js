import './App.css';
// import { Button } from "reactstrap"
import Login from "./views/auth/Login"
import Dashboard from "./components/dashboard/Dashboard"
import React, { Component } from "react"
import { BrowserRouter as Router, Route} from "react-router-dom"
import Chart from "./components/chart/Chart"
import SideBar from './components/sidebar/SideBar';
import TableUsers from './components/table/TableUsers';
import { Redirect } from "react-router-dom"
class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      admin: {}
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <switch>
            <Route exact path={"/"} component={Dashboard}/>
            <Route exact path={"/login"} component={Login} />
            <Route exact path={"/dashboard"} component={Dashboard}/>
            <Route exact path={"/sidebar"} component={SideBar}/>
            <Route exact path={"/analytics"} component={Chart}/>
            <Route exact path={"/table"} component={TableUsers}/>
          </switch>
        </Router>
      </div>
    );
  }
}

export default App;
