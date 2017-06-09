import React from "react";
import Card from "./Card";
import Detail from "./Detail";
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
	        const contacts = res.data.map((obj, i) => <Card key={i} contact={obj} id={i} handler={this.handler} />);
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
					<Detail current={this.state.current} />
				</div>
			</div>
		);
	}
}