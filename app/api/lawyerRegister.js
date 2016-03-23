import React from 'react';
import { Header } from 'amazeui-react';
import HeaderLawRegister from '../storage/HeaderLawRegister.js';
import LawyerRegisterCPT from './LawyerRegisterCPT.js';
import sendCodeCPT from './sendCodeCPT.js';
class LawyerRegister extends React.Component{
	render(){
		return (
			<div>
				<Header {...HeaderLawRegister} />

				
				<LawyerRegisterCPT />
				<sendCodeCPT />
			</div>
		);
	}
	
}
export default LawyerRegister;