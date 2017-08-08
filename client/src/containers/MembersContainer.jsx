import React from 'react';
import PropTypes from 'prop-types';
import 'isomorphic-fetch';
import LoadingIndicator from '../components/LoadingIndicator';
import MemberCard from '../components/MemberCard';

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
		if (nextProps.match.params.teamId !== this.props.match.params.teamId) {
			this.fetchMembers(nextProps.match.params.teamId);
		}
	}

	fetchMembers(team) {
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
						<MemberCard key={ member._id } member={ member }/>
					))
				}
			</div>
		);
	}
}

export default MembersContainer;
