import React from 'react';
import Headerbar from './api/Headerbar.js';
import LoginCPT from './api/LoginCPT.js';
class Login extends React.Component{
	render(){
		return (
			<div>
				<Headerbar index="登录" link='/login' prev={[{link:'/',icon:'chevron-left'}]} next={[{link:'/reg',title:'快速注册'}]} />
				<LoginCPT />
			</div>
		);
	}
	
}
export default Login;