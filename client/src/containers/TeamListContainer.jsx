import React from 'react';
import 'isomorphic-fetch';
import { withRouter, matchPath } from 'react-router';
import TeamSelector from '../components/TeamSelector';

class TeamListContainer extends React.Component {
	constructor() {
		super();
		this.state = {
			teams: [],
			loaded: false
		};
		this.selectTeam = this.selectTeam.bind(this);
	}

	componentDidMount() {
		const self = this;
		this.setState({ loaded: false });
		fetch(`http://localhost:3001/api/teams`)
			.then(res => res.json())
			.then(teams => {
				self.setState({
					teams,
					loaded: true
				});
			});
	}

	selectTeam(teamId) {
		if (teamId) {
			this.props.history.push(`/teams/${teamId}`);
		} else {
			this.props.history.push('/');
		}
	}

	render() {
		// we need the teamId in the url, but this isn't a route
		// use withRouter to connect to context and matchPath to parse the url
		const match = matchPath(this.props.location.pathname, {
			path: '/teams/:teamId',
			exact: true,
			strict: false
		});

		return (
			<TeamSelector
				teams={ this.state.teams }
				callback={ this.selectTeam }
				active={ match && match.params.teamId }
			/>
		);
	}
}

export default withRouter(TeamListContainer);

