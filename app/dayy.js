import React from 'react';
import Headerbar from './api/Headerbar.js';

class Dayy extends React.Component{
	render(){
		return (
			<div>
				<Headerbar index="对案预约" link='/dayy' prev={[{link:'/',icon:'chevron-left'}]}  />
			</div>
		);
	}
	
}
export default Dayy;