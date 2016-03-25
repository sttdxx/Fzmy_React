import React from 'react';
import { Slider,Header,AvgGrid,Button,Icon} from 'amazeui-react';
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
		  		 <AvgGrid sm={2} >
		  		 	<li id="question"> <Icon icon="qq" /><p>快速提问</p></li>
				 	<li id="question1"> <Icon icon="qq" /><p>专家咨询</p></li>
				 	
				 	<li>专家咨询</li>
				 	<li>电话热线</li>
				 	<li>边看边听</li>
				 	<li>法律服务</li>
				 	<li>找寻服务</li>
				 	<li>对案预约</li>
				 	<li>法务管家</li>
				  </AvgGrid>
				  <table>
				  	<tr>
				  		<td>专家咨询</td>
				  		<td>专家咨询</td>
				  		<td>专家咨询</td>
				  		<td>专家咨询</td>
				  	</tr>
				  	<tr>
				  		<td>专家咨询</td>
				  		<td>专家咨询</td>
				  		<td>专家咨询</td>
				  		<td>专家咨询</td>
				  	</tr>
				  </table>
		 		<NavBarCPT  index="首页"/>
			</main>
		);
	}
	
}
export default Home;