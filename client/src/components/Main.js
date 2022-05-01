import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Import all page components here
import English from './English';
import Malayalam from './Malayalam';
import Hindi from './Hindi';
import Tamil from './Tamil';
import ErrorPage from './ErrorPage';
import JoinUs from './JoinUs';
// import AboutUs from './AboutUs';

// All routes go here. Don't forget to import the components above after adding new route.

const Main = () => {

    return (
        <Switch>
            <Route exact path="/" component={English}></Route>
            <Route exact path="/English" component={English}></Route>
            <Route path="/Malayalam" component={Malayalam}></Route>
            <Route path="/Hindi" component={Hindi}></Route>
            <Route path="/Tamil" component={Tamil}></Route>
            <Route path="/JoinUs" component={JoinUs}></Route>
            <Route component={ErrorPage}></Route>
            {/* <Route path="/AboutUs" component={AboutUs}></Route> */}
        </Switch>
    );
}

export default Main;