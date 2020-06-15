import React, {Component} from 'react';

const Diseases = (props) => {
	if(props.loading)
		return <h2>Loading...</h2>;
	return (
		<div className="container">
			<h2>Diseases</h2>
			<ul className="media-list">
				{props.data.map((item) => (
					<li key={item.id} className="list-item">{item.name}</li>
				))}
			</ul>
		</div>
	);

}

export default Diseases;