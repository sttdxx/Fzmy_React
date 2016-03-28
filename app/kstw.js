import React from 'react';
import Headerbar from './api/Headerbar.js';

class Kstw extends React.Component{
	render(){
		return (
			<div>
				<Headerbar index="快速提问" link='/kstw' prev={[{link:'/',icon:'chevron-left'}]}  />
			</div>
		);
	}
	
}
export default Kstw;