import React, {Component} from 'react';
import Stories from "./Stories";

// router
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";

class About extends Component {
    render() {
        const {path} = useRouteMatch();
        return (
            <div>
                <h1>About</h1>
                <Switch>
                    <Route path={`${path}/black`}>
                        <About/>
                    </Route>
                    <Route path={`${path}/red`}>
                        <About/>
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default About;
