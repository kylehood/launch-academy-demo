import React from 'react';
import 'isomorphic-fetch';
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
		this.props.history.push(`/teams/${teamId}`);
	}

	render() {
		return (
			<TeamSelector
				teams={ this.state.teams }
				callback={ this.selectTeam }
				active={ this.props.match.params.teamId }
			/>
		);
	}
}

export default TeamListContainer;

