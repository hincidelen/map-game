import React, { Component } from 'react';
import * as PropTypes from "prop-types";

class Map extends Component {
	render() {
		return <img style={{position:'absolute'}} height={this.props.height} src={this.props.source}/>;
	}
}

Map.propTypes = {
	height: PropTypes.any,
	source: PropTypes.any
};

export default Map;
