/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import Cancer from '../../Images/Diseases/1.png';
import { deleteDisease } from '../../Api/Disease';

const Card = ({ data, history }) => {
	const onAddSubdisease = (dId) => {
		history.push(`/add_subdisease/${dId}`);
	};

	const onUpdateDisease = (disease) => {
		history.push(`/update_disease/${disease._id}`, disease);
	};

	const onDeleteDisease = (dId) => {
		deleteDisease(dId);
	};

	return (
		<div className="col-lg-4 my-3 ">
			<div
				className="card shadow h-100 px-3"
				style={{
					overflowWrap: 'break-word'
				}}
			>
				<div className="img-container">
					<h6> {data.title} </h6>
					<div>
						<img width="30px" src={Cancer} />
					</div>
				</div>
				<div>
					{data.subdiseases.map((subdisease, i) => {
						return (
							<span key={subdisease.title}>
								<Link to={`/diseases/${subdisease._id}`}>{subdisease.title}, </Link>
							</span>
						);
					})}
				</div>
				<div style={{ textAlign: 'center' }} className="btn-group">
					<span className="btn btn-primary btn-sm" onClick={() => onAddSubdisease(data._id)}>
						Add
					</span>
					<span className="btn btn-info btn-sm" onClick={() => onUpdateDisease(data)}>
						Update
					</span>
					<span className="btn btn-danger btn-sm" onClick={() => onDeleteDisease(data._id)}>
						Delete
					</span>
				</div>
			</div>
		</div>
	);
};

export default Card;
