import React from 'react';
import Headerbar from './api/Headerbar.js';

class Fffw extends React.Component{
	render(){
		return (
			<div>
				<Headerbar index="法律服务" link='/fffw' prev={[{link:'/',icon:'chevron-left'}]}  />
			</div>
		);
	}
	
}
export default Fffw;