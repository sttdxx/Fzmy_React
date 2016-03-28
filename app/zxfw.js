import React from 'react';
import Headerbar from './api/Headerbar.js';

class Zxfw extends React.Component{
	render(){
		return (
			<div>
				<Headerbar index="找寻服务" link='/zxfw' prev={[{link:'/',icon:'chevron-left'}]}  />
			</div>
		);
	}
	
}
export default Zxfw;