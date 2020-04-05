import React, { Component } from 'react';
import * as PropTypes from "prop-types";

class Map extends Component {
	render() {
		const src = this.props.source;
		return (
			<div>
				<img alt={this.props.name} style={{position:'absolute'}} height={this.props.height} src={src}/>

			</div>
		);
	}
}

Map.propTypes = {
	height: PropTypes.any,
	source: PropTypes.any,
	imageList: PropTypes.any
};

export default Map;
/*
				{this.props.imageList.map((image, index) => {
					const marginLeft=image.location.x;
					const marginTop=image.location.y;
					return(
						<img style={{position:'absolute', marginLeft, marginTop}} height={image.height} src={image.source}/>
					)
				})}
 */
