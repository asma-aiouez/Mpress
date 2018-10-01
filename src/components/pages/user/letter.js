import React, { Component } from 'react';

export default class Letter extends Component {
	render(){
		var letterStyle = {
			position: "absolute",
			width: "391px",
			height: "532px",
			left: "1446px",
			top: "427px",
			backgroundColor: "red"

		};
	return(
		<div style={letterStyle}>{this.props.children}</div>
	);
	}
}

