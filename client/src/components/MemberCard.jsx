import React from 'react';
import './MemberCard.css';

const MemberCard = ({ member }) => (
	<div className="MemberCard">
		<div className="section">
			<img
				className="profile"
				style={ { borderColor: member.favoriteColor } }
				src={ member.image }
				alt={ `${member.firstName} ${member.lastName}` }
			/>
			<h2>{ member.firstName } { member.lastName }</h2>
			<div className="text-subtle">{ member.jobTitle }</div>
		</div>
		<div className="section banner">
			<em>"{ member.about }"</em>
		</div>
		<div className="section">
			<a className="contact" href={ 'mailto:' + member.email } style={ { background: member.favoriteColor } }>
				Contact Me
			</a>
		</div>

	</div>
);

export default MemberCard;
