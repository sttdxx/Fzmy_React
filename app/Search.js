import React from 'react';
import ReactDOM from  'react-dom';
import  { Navbar ,Icon ,Button,Form,Input,FormGroup,Grid,Col} from 'amazeui-react';
import NavBarCPT from './api/NavBarCPT.js';
import Process  from './api/process.js';

class Search extends React.Component{
	constructor(props){
       super(props);        
		this.state={
			result: []
		}
		
    }
	handleChange(event){
		 this.setState({userInput:event.target.value});
		 console.log(event.target.value);
	}
	submitAndClear(){
		 let that = this;
		 let date = this.state.userInput;
		 this.setState({userInput:''});
		 console.log(date);
		 let process = new Process({
			"url":this.props.url,
			options:{
				"name":"dynamic_searchlist",
				"search":date,
				"callback":"234",
			},
			headers:{},
			callback:function(data){
				console.log(data);
				data = JSON.parse(data.slice(0,-1).slice("dynamic_searchlist".length+1));
				that.setState({
					result: data
				});
				console.log(that.state.result[0].title);
			} 
		});
		process.push();
	}	
	
	render(){
	console.log(this.state.result);	
		return (
			<div className="sss">
				{'\u00a0'}{'\u00a0'}
				<input type="text" value={this.state.userInput}  ref='myInput' onChange={this.handleChange.bind(this)}  />
				{'\u00a0'}
				<button onClick={this.submitAndClear.bind(this)} className="am-btn am-btn-primary am-round">提交</button>				

			</div>			
			);
	}
}
export default Search;