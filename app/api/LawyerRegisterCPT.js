import React from 'react';
import ReactDOM from  'react-dom';
import  { Navbar ,Icon ,Container,Button,Form,Input,FormGroup,Grid,Col,ModalTrigger,Modal} from 'amazeui-react';
import NavBarCPT from './NavBarCPT.js';
import Process  from './process.js';

class LawyerRegisterCPT extends React.Component{
	constructor(props){		
		super(props);
		this.state={
			result:[],
			tips:'',
			buttonValue:'获取验证码',
			useInput:true,
			registerResult:false,
			checkCodeResult:false
		}
	}

	getPhoneValue(){
			let userPhone =this.refs.userPhone.getValue();
			this.setState({phone:userPhone});
			let flag = this.regExpPhone(userPhone);
			if(userPhone){
				if(flag){
					return true;
				}else{
					return false;
				}
			}else{
				return false;
				}
	}

	regExpPhone(data){
		var regExp =  /^1[3|4|5|7|8]\d{9}$/;
		var flag = regExp.test(data);
		return flag;
	}

	getCode(){
		let phone = this.state.phone;
		let rand = parseInt(Math.random()*1000000+1);
		let code = '%23code%23%3D'+rand;		
		console.log(rand);
		this.setState({generateCode:rand});
		let that = this;
		if(phone){
			let process = new Process({
				"url":"http://v.juhe.cn/sms/send",
				options:{
					"mobile":phone,
					"tpl_id":6800,
					"tpl_value":code,
					"key":'d8ac72f04f0c55c5965615639610e334',
					"callback":"result",
				},
				headers:{},
				callback:function(data){	
				console.log(data);				
					data = JSON.parse(data.slice(0,-1).slice("result".length+1));
					that.setState({
						result: data
					});
					let flag = that.state.result.error_code;
					
					if(!flag){
						let wait = 60;
						that.time(wait);			
					}else{
						that.setState({useInput:true,buttonValue:"发送失败，请确实是否填写正确号码"});
					}
				} 
			});
			process.push();
		}else{
			this.setState({buttonValue:"发送失败，请确实是否填写正确号码"});
		}
	}

    time(wait){
    	let that = this;
		if(wait == 0){
			this.setState({useInput:true,buttonValue:"发送验证码"});
			wait = 60;
		}else{
			this.setState({useInput:false,buttonValue:"重新发送("+wait+")"});
			wait--;			
			setTimeout(function(){
				that.time(wait)
			},1000)
		}
	}

	checkCode(){
		let getcode = this.refs.code.getValue();
		let generateCode = this.state.generateCode;
		console.log(getcode);
		console.log(generateCode);
		if(getcode==generateCode){
			return true;
		}else{
			return false;
		}		 
	}

	register(){
		let checkCodeResult = this.checkCode();
		console.log(checkCodeResult);
		let psw = this.refs.psw.getValue();
		console.log(psw);
		let phone = this.state.phone;
		console.log(phone);
		let that = this;
		let checkPhoneResult = this.getPhoneValue();
		if(checkCodeResult&&psw&&checkPhoneResult){
			let process = new Process({
			"url":"http://www.myflfw.com/law/App/Lawyer/LawyerReg.action",
			options:{
				"name":"list",
				"psw":psw,
				"phone":phone,
				"callback":"234",
			},
			headers:{},
			callback:function(data){
				console.log(data);
				data = JSON.parse(data.slice(0,-1).slice("list".length+1));
				that.setState({
					result: data
				});
				console.log(that.state.result);
				if(that.state.result=="3"){
				 		that.setState({
				 			tips:"注册成功！",
				 			registerResult:true,
				 		});					 		
				}else if(that.state.result=="2"){
						that.setState({
							tips:"注册失败，该法律服务人员不存在！!",
							registerResult:false,
						});	
				}else if(that.state.result=="1"){
					that.setState({
							tips:"注册失败，该法律服务人员已注册！!",
							registerResult:false,
						});	
				}
			} 
		});
		process.push();
	}else if(!checkCodeResult){
		that.setState({
			tips:"验证码错误！",
			registerResult:false,
			});	
		}else if(!checkPhoneResult){
			that.setState({
			tips:"电话号码错误，请重试！",
			registerResult:false,
			});	
		}else{
			that.setState({
			tips:"注册失败，请重试！",
			registerResult:false,
			});
		}
	}

	render(){
		let _this = this;
		var modal =  (function(){
            return <Modal  type="alert"  title="提示">
           			{_this.state.tips}
           		   </Modal>
            }());
		return(
			<Container style={{padding:'20px'}}>
			 <p className="app_title">法制绵阳</p>
			<Form horizontal>
			    <Input 
				    placeholder="请输入电话号码"  
				    ref="userPhone" 
				    id="lawReg_username"
				    onBlur={this.getPhoneValue.bind(this)}
				    icon="phone"
			    />
				

			    <Input 
				    type="submit" 
				    value={this.state.buttonValue} 
				    disabled={!this.state.useInput} 
				    amStyle="primary" 
				    block 
				    onClick={this.getCode.bind(this)}
			    />

			    <Input  
				    placeholder="请输入验证码"  
				    ref="code" 
					id="lawReg_code"
				    onBlur = {this.checkCode.bind(this)}
				    icon="check-circle"
			    />

			    <Input 
				    type="password" 
				    placeholder="请输入密码" 
				    ref="psw"
				    id="lawReg_psw"
				    icon="lock"
			    />
			    
		       <ModalTrigger modal={modal} open={this.state.isAction}>
   							
   							<Button 
	   							amStyle="primary" 
	   							block 
	   							onClick={this.register.bind(this)}>
	   							注册
   							</Button>
  						</ModalTrigger>
	    	</Form>
	    	
	    </Container>
		);
		
	}
}
export default LawyerRegisterCPT;