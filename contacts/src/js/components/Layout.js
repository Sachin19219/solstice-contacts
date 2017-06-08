import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from 'axios';

export default class Layout extends React.Component {
	constructor(){
		super();
		this.state = {
			current: {phone: {},
					  address: {}
					  },
			test: []
		};
		this.handler = this.handler.bind(this);

	}

	handler(value) {
		this.setState({ current: this.state.contacts[value]})
	}

	componentDidMount(){
		axios.get("https://s3.amazonaws.com/technical-challenge/Contacts_v2.json").then(res => {
	        const contacts = res.data.map((obj, i) => <Header key={i} contact={obj} id={i} handler={this.handler} />);
	        this.setState({ contacts: res.data, current: res.data[0], test: contacts});
	    });
	}

	render() {
		return (
			<div class="ui padded stretched grid">
				<div class="ui four wide column full-height">
					<div class="ui stackable link cards">				
							{this.state.test}
				    </div>
				</div>
				<div class = "ui twelve wide column full-height">
					<div class="ui raised padded text container segment">
						<div>
							<img class="left floated medium ui image" src={this.state.current.largeImageURL}/>
							<div class="ui hidden divider"></div>
							<div class="ui huge header">{this.state.current.name}</div>
							<div class="ui hidden divider"></div>
							<div class="ui hidden divider"></div>
							<div class="ui large grey header">Company:</div>
							<div class="ui large header">{this.state.current.company}</div>
						</div>
						<div style={{clear: 'left'}}>
						<div class="ui section divider"></div>
							<div class="ui large grey header">Phone:</div>
							<div class="ui medium blue header">Work: {this.state.current.phone.work}</div>
							<div class="ui medium green header">Home: {this.state.current.phone.home}</div>
							<div class="ui medium orange header">Mobile: {this.state.current.phone.mobile}</div>
							<div class="ui section divider"></div>
							<div class="ui large grey header">Address:</div>
							<div class="ui medium header">{this.state.current.address.street}</div>
							<div class="ui medium header">{this.state.current.address.city}, {this.state.current.address.state} {this.state.current.address.zip}</div>
							<div class="ui section divider"></div>
							<div class="ui large grey header">Email: <span class="ui small black header">{this.state.current.email}</span></div>
							<div class="ui large grey header">Website: <span class="ui small black header">{this.state.current.website}</span></div>
							<div class="ui large grey header">Birthday: <span class="ui small black header">{this.state.current.birthdate}</span></div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}