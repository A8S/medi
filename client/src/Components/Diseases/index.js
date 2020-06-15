import React, { Component } from 'react';
import {Diseases} from './Diseases';
import {Pagination} from './pagination';
class Post extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			data: [],
			postsPerPage: 10,
			loading: false,
			currentPage: 1
		}
	}

	componentDidMount(){
		const fetchPosts = () => {
			this.setState({
				loading: true
			})
			const posts = await axios.get('https://medical-umbrella.herokuapp.com/api/diseases');
			
			this.setState({
				data: posts
			})
			this.setState({
				loading: false
			})
		}
		fetchPosts();
	}

	const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
	const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;

	const paginate = (num) => {
		this.setState({
			currentPage: num;
		})
	}

	render(){
		return (
			<React.Fragment>
				<Header/>
				<Diseases data={data.slice(indexOfFirstPost,indexOfLastPost)} loading={this.state.loading} />
				<Pagination paginate={paginate} postsPerPage={this.state.postsPerPage} totalPosts={this.state.data.length}/>
				<Footer/>
			</React.Fragment>
		)
	}

}