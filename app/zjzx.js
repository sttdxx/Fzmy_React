import React from 'react';
import Headerbar from './api/Headerbar.js';

class Zjzx extends React.Component{
	render(){
		return (
			<div>
				<Headerbar index="专家咨询" link='/zjzx' prev={[{link:'/',icon:'chevron-left'}]}  />
			</div>
		);
	}
	
}
export default Zjzx;