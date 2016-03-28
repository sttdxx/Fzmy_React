import React from 'react';
import ReactDOM from  'react-dom';
import  { Navbar ,Icon ,Container,Button,Form,Input,FormGroup,Grid,Col,ModalTrigger,Modal} from 'amazeui-react';
import NavBarCPT from './NavBarCPT.js';
import Process  from './process.js';

class RegisterCPT extends React.Component{
	constructor(props){		
		super(props);
		this.state={
			result:[],
			userName:'',
			userPsw:'',
			userConfirm:'',
			email:'',
			phone:'',
			tips:'',
			registerResult:false,
			checkUserNameResult:'',
			checkUserPswResult:'',
			checkEmailResult:'',
			checkPhoneResult:''
		}
	}

	
	
	regExp(data){
		var regExp = /(([0-9a-zA-Z]*)([0-9]+)([0-9a-zA-Z]*)([a-zA-Z]+)([0-9a-zA-Z]*))|(([0-9a-zA-Z]*)([a-zA-Z]+)([0-9a-zA-Z]*)([0-9]+)([0-9a-zA-Z]*))/;
		var flag = regExp.test(data);
		return flag;
	}
	regExpEmail(data){
		var regExp = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
		var flag = regExp.test(data);
		return flag;
	}
	regExpPhone(data){
		var regExp =  /^1[3|4|5|7|8]\d{9}$/;
		var flag = regExp.test(data);
		return flag;
	}
	
	checkUserName(){
		 let userName = this.refs.userName.getValue();
		 this.setState({userName:userName});
		 console.log(userName);
		 let length = userName.length;
		 let that = this;
		 let flag = this.regExp(userName);
		 if(length <12 && length >6 && flag){
			let process = new Process({
			"url":"http://www.myflfw.com/law/App/User/getUserByName.action",
			options:{
				"name":"list",
				"name1":userName,
				"callback":"234",
			},
			headers:{},
			callback:function(data){
				console.log(data);
				data = JSON.parse(data.slice(0,-1).slice("list".length+1));
				that.setState({
					result: data
				});
			} 
		});
		process.push();
		} 
	}

	checkUserPsw(){
		let userPsw = this.refs.psw.getValue();
		this.setState({userPsw:userPsw});
		let length = userPsw.length;
		let that = this;
		let flag = this.regExp(userPsw);
		if(length <14 && length >7 && flag){
			return true;
		}else {
			return false;
		}
		
	}

		checkEmail(){
		let email = this.refs.email.getValue();
		this.setState({email:email});
		let flag = this.regExpEmail(email);
		return flag?true:false;
	}

	checkPhone(){
		let phone =this.refs.phone.getValue();
		this.setState({phone:phone});
		let flag = this.regExpPhone(phone);
		return flag?true:false;
	}

	register(){
		var checkPhoneResult = this.checkPhone();
		var checkUserPswResult = this.checkUserPsw();
		var checkEmailResult = this.checkEmail();
		let userName = this.refs.userName.getValue()
		let psw = this.refs.psw.getValue();
		let phone = this.refs.phone.getValue();
		let email = this.refs.email.getValue();
		let that = this;	
			if(userName&&psw&&phone&&email){
				if(checkPhoneResult&&checkEmailResult&&checkUserPswResult){
				let process = new Process({
				"url":"http://www.myflfw.com/law/App/User/register.action",
				options:{
					"name":"list",
					"username":userName,
					"psw":psw,
					"telePhone":phone,
					"email":email,
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
					if(that.state.result=="ok"){
					 		that.setState({
					 			tips:"注册成功！",
					 			registerResult:true,
					 		});	
					 		
					}
					else if(that.state.result=="isName"){
							that.setState({
								tips:"注册失败，用户名已存在！",
								registerResult:false,
							});	
					}else if(that.state.result=="no"){
						that.setState({
								tips:"注册失败，请重试！",
								registerResult:false,
							});
					}
				} 
			});
			process.push();
		}	
		else if(!checkPhoneResult){
			this.setState({tips:"电话号码格式错误！"});
		}else if(!checkEmailResult){
			this.setState({tips:"邮箱格式错误！"});
		}else if(!checkUserPswResult){			
			this.setState({tips:"密码格式错误！"});
		}
	}else{
		that.setState({
			tips:"注册失败，还有未填项！",
			registerResult:false,
			});	
		}
	}

	pageJump(){
		let regResult = this.state.registerResult;
		let that = this;
		if(regResult){
			var router = that._reactInternalInstance._context.router;
						router.replace("/");
		}
	}

	goToLawReg(){
		var router = this._reactInternalInstance._context.router;
						router.replace("/lawreg");
	}

render(){
		let _this = this;
		var modal =  (function(){
            return <Modal 
	            type="alert" 
	            title="提示" 
	            onClick={_this.pageJump.bind(_this)}
            >
           		{_this.state.tips}
            </Modal>
        }());
	return (
				<Container style={{padding:'20px'}}>
					 <p className="app_title">法制绵阳</p>
					<Form horizontal>						
						<Input
							 type="text" 
							 placeholder="用户名" 
							 ref="userName"
							 id="reg_username"							
							 icon="user"
						 />													
						<Input 
							type="number"  
							placeholder="电话号码"  
							ref="phone"
							id="reg_phone"
							 icon="phone"
						 />	
																							
						<Input 
							type="email"  
							placeholder="邮箱" 
							ref="email"
							id="reg_email"
							icon="envelope"
						/>	

						 <Input 
							type="password"  
							placeholder="密码,字母与数字组合不少于8位" 
							ref="psw"
							id="reg_psw"													 
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
					<p className="register" onClick={this.goToLawReg.bind(this)}>法律服务人员注册点击这里</p>

				</Container>			
			   );
	}
}
export default RegisterCPT;