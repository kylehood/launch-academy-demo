import React from 'react';
import PropTypes from 'prop-types';
import './TeamSelector.css';

const TeamSelector = ({ teams, callback, active }) => (
	<div className="select TeamSelector">
		<select
			onChange={ (e) => callback(e.target.value) }
			value={ active ? active : undefined }
		>
			<option value="">Please Select a Team</option>
			{
				teams.map(team => (
					<option
						key={ team._id }
						value={ team._id }
					>
						{ team.name }
					</option>
				))
			}
		</select>
	</div>
);

TeamSelector.propTypes = {
	teams: PropTypes.array,
	callback: PropTypes.func,
	active: PropTypes.string
};

export default TeamSelector;