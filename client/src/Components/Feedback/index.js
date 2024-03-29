import React, { Component } from 'react';
import { createFeedback, getFeedbacks } from '../../Api/Feedback';
import './style.css';

class Feedback extends Component {
	state = {
		name: '',
		title: '',
		description: '',
		rating: null,
		feedback: []
	};

	componentDidMount() {
		getFeedbacks().then((feedbacks) => {
			console.log(feedbacks);
			this.setState({
				feedback: feedbacks
			});
		});
	}

	handleOnChange = (event) => {
		const key = event.target.name;
		const value = event.target.value;

		this.setState({
			[key]: value
		});
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		const { name, title, description, rating } = this.state;
		var object = {
			name,
			title,
			description,
			rating
		};

		const res = await createFeedback(object);
		console.log(res);
		if (res.status == 200) {
			getFeedbacks().then((feedbacks) => {
				this.setState({
					feedback: feedbacks,
					title: '',
					name: '',
					description: '',
					rating: null
				});
			});
		}
	};

	render() {
		return (
			<div className="container">
				<h1 className="head">Feedback</h1>
				<h3 className="lead">
					We would Like to Hear your thoughts, Concerns or problems with anything so we can Improve.
				</h3>
				<form onClick={this.handleSubmit}>
					<div class="form-group">
						<label className="text-muted">Name</label>
						<input
							type="text"
							value={this.state.name}
							onChange={this.handleOnChange}
							className="form-control"
							name="name"
							required
						/>
						<label className="text-muted">Title</label>
						<input
							type="text"
							value={this.state.title}
							onChange={this.handleOnChange}
							className="form-control"
							name="title"
							required
						/>
						<label className="text-muted">Description</label>
						<textarea
							class="form-control"
							rows="5"
							id="comment"
							name="description"
							onChange={this.handleOnChange}
							value={this.state.description}
						/>
						<label className="text-muted">Rating (out of 5)</label>
						<input
							type="number"
							value={this.state.rating}
							onChange={this.handleOnChange}
							className="form-control"
							name="rating"
							min="1"
							max="5"
							required
						/>
					</div>
					<button type="button" class="btn btn-success">
						Submit
					</button>
				</form>
				{this.state.feedback.map((feedback, index) => {
					return (
						<div className="card">
							<div className="title">
								<h4>{feedback.title}</h4>
							</div>
							<p className="header">
								<b>Description :</b>
							</p>
							<div className="description">
								<p>{feedback.description}</p>
							</div>
							<div>
								<span>
									<b>Name</b> : {feedback.name}{' '}
								</span>
								<span>
									<b>Rating</b> : {feedback.rating}/5
								</span>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}

export default Feedback;
