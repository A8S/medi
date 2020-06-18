import React from 'react';
import './style.css';
import Tabs from '../Settings/Tabs';
import Posts from '../Posts/Posts';
import { getSubdisease, deleteSubdisease } from '../../Api/Subdisease';
import { clientUrl } from '../../variables';

class SubdiseaseDetail extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	componentDidMount() {
		if (!this.state.data) {
			console.log(this.props.match.params);
			getSubdisease(this.props.match.params.sdid).then((data) => {
				console.log(data);
				this.setState({
					data: data
				});
				console.log(data);
			});
		} else {
			this.setState({ data: this.props.location.state.data });
			console.log(this.props.location.state.data);
		}
	}

	onUpdateSubdisease = () => {
		this.props.history.push(`/update_subdisease/${this.state.data._id}`, this.state.data);
	};

	onDeleteSubdisease = () => {
		deleteSubdisease(this.state.data._id).then((data) => {
			console.log(data);
			if (data.status === 200) {
				window.open(`${clientUrl}/diseases`);
			}
		});
	};

	render() {
		console.log(this.state);
		if (!this.state.data) {
			return <div>Loading...</div>;
		}
		return (
			<div className="container">
				<div className="row">
					<h1 className="my-5 col-md-8">{this.state.data.title}</h1>
					<div className=" my-5 col-md-4">
						<button
							type="button"
							className="btn btn-info float-right"
							href="https://en.wikipedia.org/wiki/Migraine"
						>
							Read More
						</button>
					</div>
				</div>

				<div className="row">
					<div className="col-md-2">
						<h5>Description </h5>
					</div>
					<div className="col-md-10">
						<p>{this.state.data.description}</p>
					</div>
				</div>
				<div className="row">
					<div className="col-md-2">
						<h5>Best Therapy</h5>
					</div>
					<div className="col-md-10">
						<p>{this.state.data.bestTherapy}</p>
					</div>
				</div>

				<Tabs>
					Allopathy
					<span>
						<div className="row">
							<div className="col-md-12">
								<h6 className="font-weight-bold">Efficiency </h6>
							</div>
							<div className="col-md-12">
								<p>{this.state.data.allopathy.efficiency}</p>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<h6 className="font-weight-bold">Advantages</h6>
							</div>
							<div className="col-md-12">
								<p>{this.state.data.allopathy.advantages}</p>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<h6 className="font-weight-bold">Disadvantages</h6>
							</div>
							<div className="col-md-12">
								<p>{this.state.data.allopathy.disadvantages}</p>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<h6 className="font-weight-bold">Summary</h6>
							</div>
							<div className="col-md-12">
								<p>{this.state.data.allopathy.summary}</p>
							</div>
						</div>

						<div className="row">
							<div className="col-md-12">
								<h6 className="font-weight-bold">Good doctors,Clinics,Hospitals</h6>
							</div>
							<div className="col-md-12">
								<p>{this.state.data.allopathy.suggestions}</p>
							</div>
						</div>
					</span>
					Homeopathy
					<span>
						<div className="row">
							<div className="col-md-12">
								<h6 className="font-weight-bold">Efficiency </h6>
							</div>
							<div className="col-md-12">
								<p>{this.state.data.homeopathy.efficiency}</p>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<h6 className="font-weight-bold">Advantages</h6>
							</div>
							<div className="col-md-12">
								<p>{this.state.data.homeopathy.advantages}</p>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<h6 className="font-weight-bold">Disadvantages</h6>
							</div>
							<div className="col-md-12">
								<p>{this.state.data.homeopathy.disadvantages}</p>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<h6 className="font-weight-bold">Summary</h6>
							</div>
							<div className="col-md-12">
								<p>{this.state.data.summary}</p>
							</div>
						</div>

						<div className="row">
							<div className="col-md-12">
								<h6 className="font-weight-bold">Good doctors,Clinics,Hospitals</h6>
							</div>
							<div className="col-md-12">
								<p>{this.state.data.homeopathy.suggestions}</p>
							</div>
						</div>
					</span>
					Ayurveda
					<span>
						<div className="row">
							<div className="col-md-12">
								<h6 className="font-weight-bold">Efficiency </h6>
							</div>
							<div className="col-md-12">
								<p>{this.state.data.ayurveda.efficiency}</p>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<h6 className="font-weight-bold">Advantages</h6>
							</div>
							<div className="col-md-12">
								<p>{this.state.data.ayurveda.advantages}</p>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<h6 className="font-weight-bold">Disadvantages</h6>
							</div>
							<div className="col-md-12">
								<p>{this.state.data.ayurveda.disadvantages}</p>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<h6 className="font-weight-bold">Summary</h6>
							</div>
							<div className="col-md-12">
								<p>{this.state.data.ayurveda.summary}</p>
							</div>
						</div>

						<div className="row">
							<div className="col-md-12">
								<h6 className="font-weight-bold">Good doctors,Clinics,Hospitals</h6>
							</div>
							<div className="col-md-12">
								<p>{this.state.data.ayurveda.suggestions}</p>
							</div>
						</div>
					</span>
				</Tabs>
				<div className="row">
					<div className="col-md-2">
						<h5>Books</h5>
					</div>
					<div className="col-md-10">
						<p>
							{this.state.data.books.map((book) => {
								return <span>{book.name}</span>;
							})}
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col-md-2">
						<h5>References</h5>
					</div>
					<div className="col-md-10">
						<p>
							{this.state.data.references.map((reference) => {
								return (
									<a target="_blank" href={reference.url}>
										{reference.url}
									</a>
								);
							})}
						</p>
					</div>
				</div>

				<h2>Related Posts</h2>
				<Posts />
				<div style={{ textAlign: 'center', paddingBottom: '20px' }} className="btn-group">
					<span className="btn btn-info btn-sm" onClick={() => this.onUpdateSubdisease()}>
						Update
					</span>
					<span className="btn btn-danger btn-sm" onClick={() => this.onDeleteSubdisease()}>
						Delete
					</span>
				</div>
			</div>
			// <div>hgj</div>
		);
	}
}
export default SubdiseaseDetail;
