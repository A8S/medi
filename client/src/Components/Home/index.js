import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import CardLayout from '../WhatWeDo';
import logo from '../../Images/logo.svg';
import Testimonial from '../ContactUs/Testimonial';
import Testimonialdata from '../../Data/Testimonial_data';
<<<<<<< HEAD
import { subscribe } from '../../Api/Subscribe';

=======
import Footer from '../Footer';
>>>>>>> 08e9005a37ae80fa7b5babc1283fe5d32cc38c67
class Home extends Component {
	state = {
		email: ''
	};
	onSubscribe = (e) => {
		e.preventDefault();
		subscribe(this.state).then((res) => {
			if (res.status === 200) {
				this.setState({
					email: ''
				});
			}
		});
	};

	onChange = (e) => {
		this.setState({
			email: e.target.value
		});
	};
	render() {
		return (
			<div>
				<div className="container-fluid">
					<div className="jumbotron bg-secondary text-white text-center jbtron">
						<h2 className="display-4">Medical Counselling</h2>
						<p className="lead">Experiance of common man help each other</p>
						<img src={logo} className="img-responsive img-css" alt="logo" />
						<div className="row">
							<div className="col-md-6 ">
								<Link to="/Signup">
									<button type="button" className="btn btn-default buttonJoin float-right">
										Share Experiance
									</button>
								</Link>
							</div>
							<div className="col-md-6">
								<Link to="/Signup">
									<button type="button" className="btn btn-primary buttonJoin float-left">
										Ask Suggestion
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<CardLayout />
				<div>
					<h4 className="text-center mb-4 mt-5">What people say about our platform</h4>
					<Testimonial slides={Testimonialdata} />
				</div>
				<div className="sta row">
					<div className="col-md-3">
						<div className="card shadow p-3 mb-5 bg-white rounded">
							<div className="card-body">
								<h5 className="card-title text-center font-weight-bold">700</h5>
								<p className="card-text text-center">No. of Members</p>
							</div>
						</div>
					</div>
					<div className="col-md-3">
						<div className="card shadow p-3 mb-5 bg-white rounded">
							<div className="card-body">
								<h5 className="card-title text-center font-weight-bold">4020</h5>
								<p className="card-text text-center">No. of Visitors</p>
							</div>
						</div>
					</div>
					<div className="col-md-3">
						<div className="card shadow p-3 mb-5 bg-white rounded">
							<div className="card-body">
								<h5 className="card-title text-center font-weight-bold">120</h5>
								<p className="card-text text-center">No. of Disease</p>
							</div>
						</div>
					</div>
					<div className="col-md-3">
						<div className="card shadow p-3 mb-5 bg-white rounded">
							<div className="card-body">
								<h5 className="card-title text-center font-weight-bold">80+</h5>
								<p className="card-text text-center">No. of Pathy</p>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<Link to="/Signup">
						<button type="button" className="btn btn-primary buttonJoin">
							Become a Member
						</button>
					</Link>
				</div>
<<<<<<< HEAD

				<form className="container form-inline" onSubmit={this.onSubscribe}>
					<div className="subscribe-div">
						<label class="sr-only" for="inlineFormInputName2">
							Name
						</label>
						<input
							type="email"
							required-pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
							value={this.state.email}
							onChange={this.onChange}
							class="form-control"
							id="inlineFormInputName2"
							placeholder="Email"
						/>
						{/* <p></p> */}
						<button type="submit" class="btn btn-outline-primary">
							Subscribe
						</button>
					</div>
				</form>
=======
				<Footer />
>>>>>>> 08e9005a37ae80fa7b5babc1283fe5d32cc38c67
			</div>
		);
	}
}

export default Home;
