import React from 'react';
import Headerbar from './api/Headerbar.js';
import RegisterCPT from './api/RegisterCPT.js';
class Reg extends React.Component{
	render(){
		return (
			<div>
				<Headerbar index="注册" link='/reg' prev={[{link:'/',icon:'chevron-left'}]} next={[{link:'/login',title:'登录'}]} />
				<RegisterCPT />
				
			</div>
		);
	}
	
}
export default Reg;