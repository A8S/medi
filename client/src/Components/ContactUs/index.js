import React, { Component } from 'react';
import './style.css';

const queryForm=()=>(
	<form>
		<div className="form-group">
			<label className="font-weight-bold">Name</label>
			<input placeholder="Name"className="form-control">	
			</input>
		</div>

		<div className="form-group">
			<label className="font-weight-bold">Email</label>
			<input type="email"className="form-control"placeholder="Email"></input>
		</div>

		<div className="form-group">
			<label className="font-weight-bold">Query</label>
			<textarea className="form-control"placeholder="Write Your Query"></textarea>
		</div>
		
		<button
          type="submit"
          className="btn btn-danger mb-3 float-right"
        >
          Submit
        </button>
	</form>
);
class ContactUs extends Component {
	render() {
		return (
			<div className="container">
				<h2 className="my-5">Contact Us</h2>
				<p className="lead">
					Tell us about your company, your data, and your analytic goals. We can help you
					use your data to make better decisions. And if you don't currently have the data
					you need, we can help design data-capture and data-management strategies today
					that will power your analytics tomorrow.
				</p>
				<h4 className="contactLine">Fill the Form to Contact us:</h4>
				<div className="card query bg-light">
				{queryForm()}
				</div>
				<div className="reach">
				<h6 className="lead">Follow us on:</h6>

				<div className="contactDesc">
					<div className="col-md-12 col-sm-12">
						<ul className="social-network social-circle">
							<li>
								<a href="/" className="icoRss" title="Rss">
									<i className="fa fa-rss" />
								</a>
							</li>
							<li>
								<a href="/" className="icoFacebook" title="Facebook">
									<i className="fa fa-facebook" />
								</a>
							</li>
							<li>
								<a href="/" className="icoTwitter" title="Twitter">
									<i className="fa fa-twitter" />
								</a>
							</li>
							<li>
								<a href="/" className="icoGoogle" title="Google +">
									<i className="fa fa-google-plus" />
								</a>
							</li>
							<li>
								<a href="/" className="icoLinkedin" title="Linkedin">
									<i className="fa fa-linkedin" />
								</a>
							</li>
						</ul>
					</div>
				</div>
				</div>
				
			</div>
		);
	}
}

export default ContactUs;
