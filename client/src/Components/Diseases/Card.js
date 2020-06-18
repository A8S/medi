/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cancer from '../../Images/Diseases/1.png';
import { deleteDisease } from '../../Api/Disease';

const Card = ({ data, history }) => {
	useEffect(() => {
		console.log('here');
	}, []);

	return (
		<div className="col-lg-4 my-3 ">
			<div
				className="card shadow h-100 px-3"
				style={{
					overflowWrap: 'break-word'
				}}
			>
				<div className="img-container">
					<h5>
						<Link to={{ pathname: `/subdisease/${data._id}`, state: { data } }}>{data.title}</Link>
					</h5>
					<div>
						<img width="30px" src={Cancer} />
					</div>
				</div>
				<div>
					<h6>Description</h6>
					<p>{data.description}</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
