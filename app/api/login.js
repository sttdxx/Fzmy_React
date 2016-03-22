import React from 'react';
import { Header } from 'amazeui-react';
import HeaderLogin from '../storage/HeaderLogin.js';
import LoginCPT from './LoginCPT.js';
class Login extends React.Component{
	render(){
		return (
			<div>
				<Header {...HeaderLogin} />
				<LoginCPT />
			</div>
		);
	}
	
}
export default Login;