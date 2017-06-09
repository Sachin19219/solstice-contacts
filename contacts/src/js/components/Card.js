import React from "react";

export default class Card extends React.Component {

	render() {
		let fav = null;
		if (this.props.contact.favorite){
			fav = <a class="ui yellow right corner label"><i class="star icon"></i></a>;
		}
		return (
			<div class="ui fluid card" onClick={this.setID.bind(this)} >
				{fav}
				<div class="content">
        			<img class="left floated tiny ui image" src={this.props.contact.smallImageURL} />
					<div class="header">{this.props.contact.name}</div>
					<div class="meta">{this.props.contact.phone.work}</div>
				</div>
			</div>
		);
	}

	setID() {
		this.props.handler(this.props.id);
	}
}
