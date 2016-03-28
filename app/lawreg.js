import React from 'react';
import Headerbar from './api/Headerbar.js';
import LawyerRegisterCPT from './api/LawyerRegisterCPT.js';
class Lawreg extends React.Component{
	render(){
		return (
			<div>
				<Headerbar index="法律人员注册" link='/lawreg' prev={[{link:'/',icon:'chevron-left'}]} next={[{link:'/login',title:'登录'}]} />
				<LawyerRegisterCPT />
			</div>
		);
	}
	
}
export default Lawreg;