import React from 'react';
import Headerbar from './api/Headerbar.js';

class Dhrx extends React.Component{
	render(){
		return (
			<div>
				<Headerbar index="电话热线" link='/dhrx' prev={[{link:'/',icon:'chevron-left'}]}  />
			</div>
		);
	}
	
}
export default Dhrx;