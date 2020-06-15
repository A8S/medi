/* eslint-disable react/sort-comp */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import { list } from '../../Api/Post';
// import DefaultPost from '../../Images/mountains.jpg';

class Posts extends React.Component {
	constructor(){
		super();
		this.state = {
			posts: [],
			page: 1,
			noMorePosts: false,
		};
	}

	loadPosts = page => {
		list(page).then(data => {
			if (data.error) {
				console.log(data.error);
			} else {
				this.setState({ posts: data });
			}
		});
	};

	componentDidMount() {
		this.loadPosts(this.state.page);
	}

	loadMore = number => {
		this.setState({ page: this.state.page + number });
		this.loadPosts(this.state.page + number);
	};

	loadLess = number => {
		this.setState({ page: this.state.page - number });
		this.loadPosts(this.state.page - number);
	};

	renderPosts = posts => {
		return (
			<div className="row">
				{posts.map((post, i) => {
					// map only works with arrays

					const posterId = post.postedBy ? `/user/${post.postedBy._id}` : '';
					const posterName = post.postedBy ? post.postedBy.name : ' Unknown';

					return (
						
							<table className="table table-striped table-bordered">
								<tr>
							<div className="card-body col-8">
								{/* <img
									src={`${process.env.REACT_APP_API_URL}/api/post/photo/${
										post._id
									}`}
									alt={post.title}
									onError={i => (i.target.src = `${DefaultPost}`)}
									className="img-thunbnail mb-3"
									style={{ height: '200px', width: '100%' }}
								/> */}
								<td className="card-title col-xs-8">{post.title}</td>
								{/* <p>
									<span className="fa fa-clock-o" /> Posted by{' '}
									<Link to={`${posterId}`}>{posterName} </Link>
									on {new Date(post.created).toDateString()}
								</p> */}
								<td className="col-xs-8">
									<span className="fa fa-clock-o" /> Posted by{' '}
									<Link to={`${posterId}`}>{posterName} </Link>
									on {new Date(post.created).toDateString()}
        </td>
								{/* <p>
									<span className="badge badge-secondary">Food</span>{' '}
									<span className="badge badge-secondary">Ipsum</span>
								</p> */}
								
								{/* <p className="card-text">{post.body.substring(0, 100)}</p> */}
								<td className="card-text" style={{ wordBreak: 'break-word' }}>
									{post.body}
								</td>
								{/* only some charaters are visible in the posts */}
								
								{/* <p className="font-italic mark">
									Posted by <Link to={`${posterId}`}>{posterName} </Link>
									on {new Date(post.created).toDateString()}
								</p> */}
								
								<td><Link
									to={`/post/${post._id}`}
									className="btn btn-raised btn-primary btn-sm"
								>
									Read more
								</Link>
								</td>
							</div>
							</tr>
							</table>
						
					);
				})}
			</div>
		);
	};

	render() {
		const { posts, page } = this.state;
		return (
			<div>
				{' '}
				<h2 className="mt-5 mb-5">{!posts.length ? 'No more posts!' : ''}</h2>
				{/* <h2 className="mt-5 mb-5">{!posts.length ? 'Loading...' : 'Recent Posts'}</h2> */}
				{this.renderPosts(posts)}
				{page > 1 ? (
					<button
						className="btn btn-raised btn-warning mr-5 mt-5 mb-5"
						onClick={() => this.loadLess(1)}
						type="button"
					>
						{' '}
						Previous
						{/* Previous ({this.state.page - 1}) */}
					</button>
				) : (
					''
				)}
				{posts.length ? (
					<button
						className="btn btn-raised btn-success mt-5 mb-5"
						onClick={() => this.loadMore(1)}
						type="button"
					>
						Next
						{/* Next ({page + 1}) */}
					</button>
				) : (
					''
				)}
			</div>
		);
	}
}

export default Posts;
