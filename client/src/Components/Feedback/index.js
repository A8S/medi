import React, { Component } from 'react';
import './style.css';

class Feedback extends Component {
	render() {
		return (
			<div className="container feed">
				<h1 className="head">Feedback</h1>
				<h3 className="lead">We would Like to Hear your thoughts, Concerns or problems with anything so we can Improve.</h3>
                <form>
                    <div class="form-group">
                            <textarea class="form-control" rows="5" id="comment"></textarea>
                      </div>
                      <button type="button" class="btn btn-success">Submit</button>

                </form>
            </div>
		);
	}
}

export default Feedback;
