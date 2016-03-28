import React from 'react';
import Headerbar from './api/Headerbar.js';

class Bkbt extends React.Component{
	render(){
		return (
			<div>
				<Headerbar index="边看边听" link='/bkbt' prev={[{link:'/',icon:'chevron-left'}]}  />
			</div>
		);
	}
	
}
export default Bkbt;