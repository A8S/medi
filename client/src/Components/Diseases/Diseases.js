import React, { Component } from 'react';
// import {PageDiseases} from './pageDiseases';
// import {Pagination} from './pagination';
//import {data} from '../../Data/DiseasesData';
import {DisplayType} from './displayType';
import './style.css';
import { getDiseases } from '../../Api/Disease';

class Diseases extends Component {

	constructor(props){
		super(props);
		this.searchFun = this.searchFun.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			diseases: [],
			selDisease: 'Lungs infection',
			searchDisease: ''
		}
    }
    
    loadDiseases(){
        getDiseases().then((data) => {
            if(data.error){
                console.log(data.error);
            }
            else{
                this.setState({
                    diseases: data
                })
            }
        })
    }

    componentDidMount(){
        this.loadDiseases();
    }

	searchFun(event){
		const dis = this.state.diseases.filter((item) => item.title === this.state.searchDisease)[0];
		JSON.stringify(dis);
		//alert(disease);
		if(dis === undefined){
			alert("Searched Disease not found");
		}
		else {
			//alert(dis.title);
			this.setState({
				selDisease: dis.title
			})
		}
		event.preventDefault();
	}

	componentDidUpdate(){

	}

	handleChange(event){
		this.setState({
			searchDisease: event.target.value
		})
    }
    

  render(){
	const list = this.state.diseases.map((item) => {
		if(item.title === this.state.selDisease)
		return (
			<a onClick={() => this.setState({selDisease: item.title})} class="list-group-item cursor-pointer act"><strong>{item.title}</strong></a>
		);
		else
		return (
			<a onClick={() => this.setState({selDisease: item.title})} class="list-group-item cursor-pointer"><strong>{item.title}</strong></a>
		)
    })

  return (
	  <React.Fragment>
		<form class="form-inline ml-5" onSubmit={this.searchFun}>
			<div class="form-group mb-2">
				<h3>Categories</h3>
			</div>
			<div class="form-group mx-sm-3 mb-2 searchbox">
				<input type="text" class="form-control" id="search" onChange={this.handleChange} placeholder="Search" value={this.state.searchDisease}/>
			</div>
			<button type="submit" class="btn btn-primary mb-2">Search</button>
		</form>
		<div className="row ml-2 mb-2 mr-1">
			<div className="col-md-3 mt-3">
				<div className="list-group scroll-y">
					{list}
				</div>
			</div>
			<div className="col-md-9 mt-2 scroll-y flex-container">
				<DisplayType disease={this.state.diseases.filter((item) => item.title === this.state.selDisease)[0]} />
			</div>
		</div>
		</React.Fragment>
  );
};
}

export default Diseases;