/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactTags from 'react-tag-autocomplete';

class Autocomplete extends Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
		this.state = {
			suggestions: [],
			tags: []
		};
	}

	componentDidMount() {}

	componentDidUpdate() {
		if (this.state.suggestions.length !== this.props.suggestions.length) {
			let sug = [];
			this.props.suggestions.forEach((suggestion) => {
				sug.push({ id: suggestion._id, name: suggestion.title });
			});
			this.setState({
				suggestions: sug
			});
		}
	}

	handleDelete(i) {
		const tags = this.state.tags.slice(0);
		tags.splice(i, 1);
		this.setState({ tags });
	}

	handleAddition(tag) {
		const tags = [].concat(this.state.tags, tag);
		this.setState({ tags });
	}

	onSearch = () => {
		const { suggestions } = this.props;
		if (this.state.tags.length === 0) {
			this.props.filteredData(suggestions);
			return;
		}
		const sugs = suggestions.filter((sug) => {
			let s = sug;
			return this.state.tags.find((tag) => {
				return s.title === tag.name;
			});
		});

		this.props.filteredData(sugs);
	};

	render() {
		return (
			<Fragment>
				<ReactTags
					tags={this.state.tags}
					suggestions={this.state.suggestions}
					handleDelete={this.handleDelete.bind(this)}
					handleAddition={this.handleAddition.bind(this)}
					autoresize={false}
					allowNew={true}
					noSuggestionsText="noSuggestions"
				/>
				<span className="btn btn-primary btn-sm" onClick={this.onSearch}>
					Search
				</span>
			</Fragment>
		);
	}
}

export default Autocomplete;