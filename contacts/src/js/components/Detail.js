import React from "react";

export default class Card extends React.Component {

	render() {
		let fav = null;
		if (this.props.current.favorite){
			fav = <a class="ui yellow right corner label"><i class="star icon"></i></a>;
		}
		return (
			<div class="ui raised padded text container segment">
				{fav}
				<div>
					<img class="left floated medium ui image" src={this.props.current.largeImageURL}/>
					<div class="ui hidden divider"></div>
					<div class="ui huge header">{this.props.current.name}</div>
					<div class="ui hidden divider"></div>
					<div class="ui hidden divider"></div>
					<div class="ui large grey header">Company:</div>
					<div class="ui large header">{this.props.current.company}</div>
				</div>
				<div style={{clear: 'left'}}>
				<div class="ui section divider"></div>
					<div class="ui large grey header">Phone:</div>
					<div class="ui medium blue header">Work: {this.props.current.phone.work}</div>
					<div class="ui medium green header">Home: {this.props.current.phone.home}</div>
					<div class="ui medium orange header">Mobile: {this.props.current.phone.mobile}</div>
					<div class="ui section divider"></div>
					<div class="ui large grey header">Address:</div>
					<div class="ui medium header">{this.props.current.address.street}</div>
					<div class="ui medium header">{this.props.current.address.city}, {this.props.current.address.props} {this.props.current.address.zip}</div>
					<div class="ui section divider"></div>
					<div class="ui large grey header">Email: <span class="ui small black header">{this.props.current.email}</span></div>
					<div class="ui large grey header">Website: <span class="ui small black header">{this.props.current.website}</span></div>
					<div class="ui large grey header">Birthday: <span class="ui small black header">{this.props.current.birthdate}</span></div>
				</div>
			</div>	



			);
	}
}