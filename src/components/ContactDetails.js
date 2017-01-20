import React from 'react';

export default class ContactDetails extends React.Component {
	render () {

		const detail = (
			<div>
				<p>{this.props.selectedData.name}</p>
				<p>{this.props.selectedData.phone}</p>
			</div>
		);

		const blank = (
			<div>no selected data</div>
		);

		return (
			<div>
				<h2>Details</h2>
				<div>{this.props.isSelected == -1 ? blank : detail}</div>
			</div>
		);
	}
}

ContactDetails.defaultProps = {
	selectedData: {
		name: '',
		phone: ''
	}
}
