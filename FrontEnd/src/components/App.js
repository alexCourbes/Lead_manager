import React, {Component, Fragment} from 'react';
import ReactDom from 'react-dom';
import {HashRouter as Router,Route,Switch,Redirect } from "react-router-dom"

//for Error handling (alert tab)
import {Provider as AlertProvider} from 'react-alert';
import AlertTemplate from "react-alert-template-basic";


import Header from "./layout/header";
import Dashboard from "./leads/dashboard";
import Alerts from "./layout/Alerts";
import Register from "./Accounts/Register";
import Login from "./Accounts/Login";
import PrivateRoute from "./common/privateRoute";

import {Provider} from 'react-redux';
import store from "../store";
import { loadUser} from "../actions/auth";


//Alert options
const alertOptions = {
    timeout: 3000,
    position: 'top center'
};

class App extends Component {
    componentDidMount() {
        store.dispatch(loadUser());
    }

    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate}
                    {...alertOptions}>
                    <Router>
                    <Fragment>
                        <Header/>
                        <Alerts/>
                        <div className="container">
                            <Switch>
                                <PrivateRoute exact path="/" component={Dashboard}/>
                                <Route exact path="/register" component={Register}/>
                                <Route exact path="/login" component={Login}/>
                            </Switch>
                        </div>
                    </Fragment>
                    </Router>
                </AlertProvider>
            </Provider>
        )
    }
}

ReactDom.render(<App/>, document.getElementById('app'));

