import React from 'react';
import {FormattedDate, FormattedRelative,FormattedNumber,FormattedPlural} from 'react-intl';


export default class Job extends React.Component {

	render() {
		
		return (
			<tr>
				<th scope="row">{this.props.offer.id}</th>
				<td>{this.props.offer.name}</td>
				<td>{this.props.offer.company}</td>
				<td><FormattedPlural
					value={this.props.offer.salary}
					one={this.props.offer.salary+' million'}
					other={this.props.offer.salary+' millions'}
				/></td>
				<td>{this.props.offer.city}</td>
				<td>
					<FormattedDate
						value={new Date(this.props.offer.date)}
						year='numeric'
						month='long'
						day='numeric'
						weekday='long'
					/>
					{' '} (<FormattedRelative value={new Date(this.props.offer.date)} />)
				</td>
				<td><FormattedNumber value={this.props.offer.visits} /></td>
			</tr>
		);
	}
}