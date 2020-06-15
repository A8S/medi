import React, {Component} from 'react';

const Pagination = (props) => {
	const pageNumbers = [];
	for(var i=1;i<=Math.ceil(props.totalPosts / props.postsPerPage);i++){
		pageNumbers.push(i);
	}

	return (
		<ul className="pagination">
			{pageNumbers.map((num) => (
				<li key={num} className="page-item"><a href="#" onClick={props.paginate(num)}>{number}</li>
			))}
		</ul>
	);
}

export default Pagination; 