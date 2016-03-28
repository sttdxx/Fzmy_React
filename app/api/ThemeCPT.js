import React from 'react';
import  { Header ,Icon,Navbar,Col} from 'amazeui-react';
import  ThemeData from '../storage/ThemeData.js';

class ThemeCPT extends React.Component{
	constructor(props){
		super(props);
	}
	
	routerto(e){		
		console.log(e.target.parentElement.dataset.aa);
		let link = e.target.parentElement.dataset.aa;
		var router = this._reactInternalInstance._context.router;
					router.replace(link);
	}

	render(){
		let _this = this;
		let theme = ThemeData.map(function(data,index){
			return (
				<Col  sm={6} key={index} data-aa={data.link} id={data.style}  onClick={_this.routerto.bind(_this)}><Icon className="iconsize" icon={data.icon} /><span>&nbsp;&nbsp;{data.title}</span></Col>
				);
		});
		return(
			<div id="list">{theme}</div>
		)
	}
}
/*
NavbarCPT.contextTypes = {
	router: (React.PropTypes.func.isRequired || this._reactInternalInstance._context.router)
};
*/

export default ThemeCPT;