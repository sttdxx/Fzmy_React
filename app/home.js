import React from 'react';
import { Slider,Header,AvgGrid,Button,Icon,Grid,Col} from 'amazeui-react';
import NavBarCPT from './api/NavBarCPT.js';
import Headerbar from './api/Headerbar.js';
import Process  from './api/process.js';
class Home extends React.Component{
 	constructor(props){
		super(props);
		this.state={
			lunbo : []
		}
	}
	componentWillMount(){
		let that = this;
		let process = new Process({
			"url":"http://www.myflfw.com/law/App/homeMa/AppHomeImg.action",
			options:{
				"name":"lunbo",
				"callback":"1"
			},
			headers:{},
			callback:function(data){
				data = JSON.parse(data.slice(0,-1).slice("lunbo".length+1));
				that.setState({
					lunbo: data
				});
			}
		});
		process.push();
	}
	render(){
		var lubo = this.state.lunbo.map(function(data,index){
			return (
				 <Slider.Item key={index}>
			      	<img src={"http://www.myflfw.com/"+data.imgUrl} />
			    </Slider.Item>
			);
		});
		var titleStorage=localStorage.getItem('userName')||'未登录';
		return(
			 <main className="amr-main">
			 	<Headerbar index = '首页' link="/" prev={[{link:'/login',title:titleStorage}]}
			 	 next={[{link:'#right-link', icon: 'bell'}]} />
				<Slider theme="c2">
		    			{lubo}
		  		</Slider>
		  		 <Grid fixed className="doc-g" id="list">
    				<Col  id="data1" sm={6}><Icon className="iconsize" icon="commenting" /><br /><span>快速提问</span></Col>
    				<Col  id="data2" sm={6}><Icon className="iconsize" icon="graduation-cap" /><br /><span>专家咨询</span></Col>
 				 	<Col  id="data3" sm={6}><Icon className="iconsize" icon="fax" /><br /><span>电话热线</span></Col>
    				<Col  id="data4" sm={6}><Icon className="iconsize" icon="eraser" /><br /><span>边看边听</span></Col>
 				 	<Col  id="data5" sm={6}><Icon className="iconsize" icon="heartbeat" /><br /><span>法律服务</span></Col>
    				<Col  id="data6" sm={6}><Icon className="iconsize" icon="search" /><br /><span>找寻服务</span></Col>
 				 	<Col  id="data7" sm={6}><Icon className="iconsize" icon="object-group" /><br /><span>对案预约</span></Col>
    				<Col  id="data8" sm={6}><Icon className="iconsize" icon="user-secret" /><br /><span>法务管家</span></Col>
 				 
 				 </Grid>
				  
		 		<NavBarCPT  index="首页"/>
			</main>
		);
	}
	
}
export default Home;