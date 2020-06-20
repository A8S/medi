/* eslint-disable react/no-unused-state */
/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/named */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-unused-vars */

/* https://dev.to/sage911/how-to-write-a-search-component-with-suggestions-in-react-d20 */
import React from 'react';
// import data from '../../Data/DiseasesData';
import Card from './Card';
import Autocomplete from './Autocomplete';
import Cancer from '../../Images/Diseases/1.png';
import './style.css';
import { getDiseases, deleteDisease, updateDisease } from '../../Api/Disease';
import { getSubdisease } from '../../Api/Subdisease';
import Footer from '../Footer';
class Diseases extends React.Component {
	constructor(props) {
		super(props);
		this.filteredData = this.filteredData.bind(this);
		this.state = {
			disease: [],
			filteredData: [],
			activeIndex: 0,
			subdiseases: [],
			user: null,
		};
	}

	componentDidMount() {
		//	this.setState({ user: isAuthenticated().user });
		console.log('mounted');
		getDiseases().then(diseases => {
			this.setState({
				disease: diseases,
			});
			this.setSubdiseases(diseases, 0);
		});
	}

	setSubdiseases = (diseases, index) => {
		this.setState({
			subdiseases: [],
			filteredData: [],
		});
		for (let i = 0; i < diseases[index].subdiseases.length; i++) {
			getSubdisease(diseases[index].subdiseases[i]).then(sub => {
				this.setState({
					subdiseases: [...this.state.subdiseases, sub],
					filteredData: [...this.state.filteredData, sub],
				});
			});
		}
	};

	filteredData(filteredData) {
		this.setState({ filteredData });
	}

	onAddDisease = () => {
		this.props.history.push('/add_disease');
	};
	onAddSubdisease = dId => {
		this.props.history.push(`/add_subdisease/${dId}`);
	};

	onUpdateDisease = disease => {
		this.props.history.push(`/update_disease/${disease._id}`, disease);
	};

	onDeleteDisease = dId => {
		deleteDisease(dId).then(data => {
			if (data.status === 200) {
				this.setState({
					activeIndex: 0,
				});
				getDiseases().then(diseases => {
					this.setState({
						disease: diseases,
					});
					this.setSubdiseases(diseases, 0);
				});
			}
		});
	};

	onDiseaseClick = i => {
		this.setState({
			activeIndex: i,
		});

		this.setSubdiseases(this.state.disease, i);
	};

	render() {
		console.log(this.state.filteredData);
		const html = this.state.filteredData.map((x, key) => {
			return <Card key={key} data={x} history={this.props.history} />;
		});
		return (
			<div className="container-fluid">
				<div className="mt-2">
					<div className="nav flex-column SideBar">
						<ul className="list-group">
							{this.state.disease.map((disease, index) => {
								return (
									<li
										className={`list-group-item ll ${
											this.state.activeIndex === index ? 'active' : null
										}`}
										key={index}
										onClick={() => this.onDiseaseClick(index)}
									>
										{disease.title}
									</li>
								);
							})}
						</ul>
					</div>
					<div className="main-div">
						<div>
							<Autocomplete
								filteredData={this.filteredData}
								suggestions={this.state.subdiseases}
							/>
						</div>
						<button className="btn btn-primary btn-raised" onClick={this.onAddDisease}>
							Create Disease
						</button>
						<div className="col-xs-12 col-md-12 col-sm-12 col-xs-12 mt-5 mx-40">
							<div className="provide-card-row">{html}</div>
						</div>
						<div style={{ textAlign: 'center' }} className="btn-group">
							<span
								className="btn btn-primary btn-sm"
								onClick={() =>
									this.onAddSubdisease(
										this.state.disease[this.state.activeIndex]._id,
									)
								}
							>
								Add
							</span>
							<span
								className="btn btn-info btn-sm"
								onClick={() =>
									this.onUpdateDisease(this.state.disease[this.state.activeIndex])
								}
							>
								Update
							</span>
							<span
								className="btn btn-danger btn-sm"
								onClick={() =>
									this.onDeleteDisease(
										this.state.disease[this.state.activeIndex]._id,
									)
								}
							>
								Delete
							</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Diseases;
