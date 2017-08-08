import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import MembersContainer from './containers/MembersContainer';
import TeamListContainer from './containers/TeamListContainer';

class App extends React.Component {
    render() {
        return (
            <div className="App">
				<Route path="/teams" component={ TeamListContainer } />
				<Route path="/teams/:teamId" component={ MembersContainer } />
            </div>
        );
    }
}

export default App;
