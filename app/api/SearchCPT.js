import React from 'react';
import ReactDOM from  'react-dom';
import  { Navbar ,Icon ,Container,Button,Form,Input,FormGroup,Grid,Col} from 'amazeui-react';
import NavBarCPT from './NavBarCPT.js';
import Process  from './process.js';

class SearchCPT extends React.Component{
	constructor(props){
       super(props);        
		this.state={
			result: []
		}
		
    }
	
	submitAndClear(){
		 let that = this;
		 let search = this.refs.myInput.getValue();
		 console.log(search);
		 this.setState({userInput:''});
		 let process = new Process({
			"url":this.props.url,
			options:{
				"name":"dynamic_searchlist",

				"search":search,
				"callback":"234",
			},
			headers:{},
			callback:function(data){
				console.log(data);
				data = JSON.parse(data.slice(0,-1).slice("dynamic_searchlist".length+1));
				that.setState({
					result: data
				});
				that.props.callbackSearch(that.state.result);
			} 
		});
		process.push();
	}	
	
	render(){
	console.log(this.state.result);	
		return (
				<Container >
					<Grid className="doc-g">
    					<Col sm={9}>
	    					<Input 
								type="text"  
								placeholder="Search..."  
								ref="myInput"   
							/>
						</Col>
    					<Col sm={3}>
	    					<Input 
								type="submit" 
								onClick={this.submitAndClear.bind(this)}  
								value="提交" 
							/>
						</Col>
  					</Grid>
				</Container>			
			   );
	}
}
export default SearchCPT;