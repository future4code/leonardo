import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import { connect } from "react-redux";
import HomePage from '../HomePage/HomePage'
import ListTripPage from "../ListTripsPage/ListTripPage";
import ApplicationForm from "../ApplicationForm";
import TripDetailsPage from "../TripDetailsPage/TripDetailsPage";

export const routes = {
 
  applicationForm: "/application-form",
  create: "/trips/create",
  list: "/trips/list",
  details: "/trips/details",
  home: "/",
  login: "/login"


};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.login} component={LoginPage} />
        <Route exact path={routes.list} component={ListTripPage} />
        <Route exact path={routes.applicationForm} component={ApplicationForm} />
        <Route exact path={routes.details} component={TripDetailsPage} />
       

      </Switch>
    </ConnectedRouter>
  );
}

const mapStateToProps = state => ({
  
});

export default connect(mapStateToProps)(Router);
