import React, { Fragment,useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch }  from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';

//Redux
import {Provider} from 'react-redux';
import store from './store';
import {loadUser} from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './public/bootstrap.min.css';
import './public/style.css';

if(localStorage.token){
    setAuthToken(localStorage.token);
}

function loadError(onError) {
    console.error(`Failed ${onError.target.src} didn't load correctly`);
  }

const App = () => {
    useEffect(()=>{
        store.dispatch(loadUser());
    },[]);

    return (
    <Provider store={store}>
        <Router>
            <Fragment>
                <Navbar />
                        <Switch>
                                <Route exact path="/" component={Landing} />
                                <Route exact path="/projects" component={Register} />
                        </Switch>
            </Fragment>

        </Router>
    </Provider> 
)};

export default App;