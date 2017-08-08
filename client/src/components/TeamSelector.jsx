import React from 'react';
import './TeamSelector.css';

const TeamSelector = ({ teams, callback, active }) => (
	<div className="select TeamSelector">
		<select onChange={ (e) => callback(e.target.value) }>
			<option>Please Select a Team</option>
			{
				teams.map(team => (
					<option
						key={ team._id }
						value={ team._id }
					>
						{ team.name } { active === team._id }
					</option>
				))
			}
		</select>
	</div>
);

export default TeamSelector;