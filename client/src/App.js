import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./component/Home";
import Loading from "./component/Loading/Loading";
import Voting from "./component/Voting/Voting";
import Results from "./component/Results/Results";
import Registration from "./component/Registration/Registration";

import AddCandidate from "./component/Admin/AddCandidate/AddCandidate";
import Verification from "./component/Admin/Verification/Verification";
import test from "./component/test";
// import StartEnd from "./component/Admin/StartEnd/StartEnd";

import Footer from "./component/Footer/Footer";

import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      loading : true,
    }
  }
  changeLoading() {
    setTimeout(()=>{
      this.setState({
        loading : false,
      })
    },4000)
  }
  render() {
    return (
      <div className="App">
        {
          this.state.loading ? 
          <div>
            {this.changeLoading()}
            <Loading/>
          </div>
          : 
          <div>
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/AddCandidate" component={AddCandidate} />
                <Route exact path="/Voting" component={Voting} />
                <Route exact path="/Results" component={Results} />
                <Route exact path="/Registration" component={Registration} />
                <Route exact path="/Verification" component={Verification} />
                <Route exact path="/test" component={test} />
                <Route exact path="*" component={NotFound} />
              </Switch>
            </Router>
            <Footer />
          </div>
        }
      </div>
    );
  }
}
class NotFound extends Component {
  render() {
    return (
      <>
        <h1>404 NOT FOUND!</h1>
        <center>
          <p>
            The page your are looking for doesn't exist.
            <br />
            Go to{" "}
            <Link
              to="/"
              style={{ color: "black", textDecoration: "underline" }}
            >
              Home
            </Link>
          </p>
        </center>
      </>
    );
  }
}
