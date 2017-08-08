import React from 'react';
import PropTypes from 'prop-types';
import 'isomorphic-fetch';
import LoadingIndicator from '../components/LoadingIndicator';

class MembersContainer extends React.Component {
	static propTypes = {
		match: PropTypes.object
	};

	constructor() {
		super();
		this.state = {
			members: [],
			loaded: false
		};
		this.fetchMembers = this.fetchMembers.bind(this);
	}

	componentDidMount() {
		this.fetchMembers(this.props.match.params.teamId);
	}

	componentWillReceiveProps(nextProps) {
		// if the team id changed, fetch new team
		if (nextProps.match.params.teamId !== this.props.match.params.teamId) {
			this.fetchMembers(nextProps.match.params.teamId);
		}
	}

	fetchMembers(team) {
		// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
		const self = this;
		this.setState({ loaded: false });
		fetch(`http://localhost:3001/api/teams/${team}/members`)
			.then(res => res.json())
			.then(members => {
				self.setState({
					members,
					loaded: true
				});
			});
	}

	render() {
		if (this.state.loaded === false) {
			return <LoadingIndicator />;
		}

		if (this.state.members.length === 0) {
			return <div>This team doesn't have any members ¯\_(ツ)_/¯ </div>;
		}

		return (
			<div>
				{
					this.state.members.map(member => (
						<div key={ member._id }>
							{ member.firstName} { member.lastName }
						</div>
					))
				}
			</div>
		);
	}
}

export default MembersContainer;
