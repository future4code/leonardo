import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import { connect } from "react-redux";
import HomePage from '../HomePage/HomePage'

export const routes = {
  root: "/",
  applicationForm: "/application-form",
  login: "/login",
  create: "/trips/create",
  list: "/trips/list",
  details: "/trips/details",
  home: "/home2",


};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
      
        <Route path={routes.home} component={LoginPage} />
        <Route path={routes.root} component={HomePage} />

      </Switch>
    </ConnectedRouter>
  );
}

const mapStateToProps = state => ({
  currentPage: state.routes
});

export default connect(mapStateToProps)(Router);
