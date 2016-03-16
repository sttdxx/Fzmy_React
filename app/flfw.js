import React from 'react';
import NavBarCPT from './api/NavBarCPT.js';
import Search from './Search.js';
import Login from './login.js';
class Flfw extends React.Component{
	render(){
		return (
			<div>
				<h1>法律服务</h1>
				<NavBarCPT index="法律服务" />
				<Search url="http://www.myflfw.com/law/App/Law/searchLawsNews.action"/>
				<Login />
			</div>
		);
	}
	
}
export default Flfw;