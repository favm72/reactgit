import React, { Fragment } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer'
import Main from './Main';
import Commits from './Commits';

const Routes = (props) => {
    return (
        <Fragment>
            <Header />
            <div className="mycontainer">
                <div className="pagecontent">
                    <Switch>
                        <Route path='/home' component={ Main } />
                        <Route path='/commits' component={ Commits } />                       
                        <Redirect to="/home" />
                    </Switch>
                </div>
                <Footer />
            </div>
        </Fragment>
    );
}

export default Routes
