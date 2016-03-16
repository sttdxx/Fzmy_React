import React from 'react';
import ReactDOM from  'react-dom';
import  { Navbar ,Icon ,Button,Form,Input,FormGroup,Grid,Col} from 'amazeui-react';
import NavBarCPT from './api/NavBarCPT.js';
import Process  from './api/process.js';

class Login extends React.Component{


	render(){
		return(
				
				 <Form horizontal>
   					<Input placeholder="用户名" value={this.state.userName} icon="user" onChange={this.handleChange.bind(this)} />
    					{'\u00a0'}
    				<Input placeholder="密码" value={this.state.userPsw} icon="lock" onChange={this.handleChange.bind(this)} />
    					{'\u00a0'}
    				<Input type="submit" amStyle="primary" value="登录" standalone/>
  				</Form>
  				
			);
	}
}

export default Login;