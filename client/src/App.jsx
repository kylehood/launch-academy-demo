import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import MembersContainer from './containers/MembersContainer';
import TeamListContainer from './containers/TeamListContainer';

class App extends Component {
    render() {
        return (
            <div className="App">
				<TeamListContainer />
				<Route path="/teams/:teamId" component={ MembersContainer } />
            </div>
        );
    }
}

export default App;
