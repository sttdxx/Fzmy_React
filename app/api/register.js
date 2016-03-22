import React from 'react';
import { Header } from 'amazeui-react';
import HeaderRegister from '../storage/HeaderRegister.js';
import RegisterCPT from './RegisterCPT.js';
class Register extends React.Component{
	render(){
		return (
			<div>
				<Header {...HeaderRegister} />

				
				<RegisterCPT />
			</div>
		);
	}
	
}
export default Register;