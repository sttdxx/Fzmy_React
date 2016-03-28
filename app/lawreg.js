import React from 'react';
import Headerbar from './api/Headerbar.js';
import LawyerRegisterCPT from './api/LawyerRegisterCPT.js';
class Lawreg extends React.Component{
	render(){
		return (
			<div>
				<Headerbar index="法律人员注册" link='/login' prev={[{link:'/',icon:'chevron-left'}]} next={[{link:'/reg',title:'快速注册'}]} />
				<LawyerRegisterCPT />
			</div>
		);
	}
	
}
export default Lawreg;