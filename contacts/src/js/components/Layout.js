import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from 'axios';

export default class Layout extends React.Component {
	constructor(){
		super();
		this.state = {
			current: {},
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
			<div class="ui padded equal height grid">
				<div class="ui four wide column">
					<div class="ui one stackable link cards">				
							{this.state.test}
				    </div>
				</div>
				<div class = "ui twelve wide column">
					<div class="ui raised very padded text container segment">
							<img class="left floated small ui image" src={this.state.current.largeImageURL}/>
							<div class="ui header">{this.state.current.name}</div>
					</div>
				</div>


			</div>
		);
	}
}