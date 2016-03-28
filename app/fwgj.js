import React from 'react';
import Headerbar from './api/Headerbar.js';

class Fwgj extends React.Component{
	render(){
		return (
			<div>
				<Headerbar index="法务管家" link='/fwgj' prev={[{link:'/',icon:'chevron-left'}]}  />
			</div>
		);
	}
	
}
export default Fwgj;