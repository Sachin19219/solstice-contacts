import React from "react";
import Title from "./Header/Title"

export default class Header extends React.Component {

	changeFocus(){
		console.log(this.props.id);
		// this.setState({ test:2  });
	}

	render() {
		return (
			<div class="ui fluid card" onClick={this.yo.bind(this)} >
				<div class="content">
        			<img class="left floated tiny ui image" src={this.props.contact.smallImageURL} />
					<div class="header">{this.props.contact.name}</div>
					<div class="meta">{this.props.contact.phone.work}</div>
				</div>
			</div>
		);
	}

	yo() {
		this.props.handler(this.props.id);
	}
}


// <div class="ui fluid card" onClick={this.changeFocus.bind(this)} contact={contact}>

				            		
// 					            </div>