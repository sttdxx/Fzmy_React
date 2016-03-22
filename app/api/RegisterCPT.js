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
			word1:'',
			word2:'',
			word3:'',
			tips:'',
			registerResult:false,
			validation1:'warning',
			validation2:'warning',
			validation3:'warning',
			validation4:'warning',
			validation5:'warning'
		}
	}

	getTip1(){
		this.setState({word1:"必须包含字母和数字,长度为6-12位"});
	}
	getTip2(){
		this.setState({word2:"必须包含字母和数字,长度为8-14位"});
	}
	getTip3(){
		this.setState({word3:"请再次输入密码,确保与上次一致"});
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
				console.log(that.state.result);
				if(that.state.result){
					that.setState({
						word1:"",
						validation1:"success"
					});
				}else{
					that.setState({
						word1:"用户名已存在！",
						validation1:"error"
					});			
				}
			} 
		});
		process.push();
		}else if(length==0){
			this.setState({
				word1:"用户名不能为空！",
				validation1:"warning"
			});
		}else{
			this.setState({
				word1:"用户名格式错误！",
				validation1:"error"
			});		
		}		 
	}

	checkUserPsw(){
		let userPsw = this.refs.psw.getValue();
		this.setState({userPsw:userPsw});
		console.log(userPsw);
		let length = userPsw.length;
		let that = this;
		let flag = this.regExp(userPsw);
		if(length <14 && length >7 && flag){
			this.setState({
				word2:"",
				validation2:"success"
			});
		}else if(length<=0){
			this.setState({
				word2:"密码不能为空！",
				validation2:"warning"
			});
		}else{
			this.setState({
				word2:"密码格式错误！",
				validation2:"error"
			});
		}
		
	}

	confirmUserPsw(){
		let userConfirm = this.refs.comPsw.getValue();
		this.setState({userConfirm:userConfirm});
		let userPsw = this.state.userPsw;
		if(userPsw==userConfirm&&userPsw){

			this.setState({
				word3:"",
				validation3:"success"
			});
		}else{
			this.setState({
				word3:"两次密码不一致！",
				validation3:"error"
			});
		}

	}

	checkEmail(){
		let email = this.refs.email.getValue();
		this.setState({email:email});
		console.log(email);
		console.log(email.length);
		let flag = this.regExpEmail(email);
		if(flag){
			this.setState({
				word4:"",
				validation4:"success"
			});
		}else{
			this.setState({
				word4:"邮箱格式错误！",
				validation4:"error"
			});
		}
	}

	checkPhone(event){
		this.setState({phone:event.target.value});
		let phone = event.target.value;
		console.log(phone);
		console.log(this.state.phone.length);
		let flag = this.regExpPhone(phone);
		if(flag){
			this.setState({
				word5:"",
				validation5:"success"
			});
		}else{
			this.setState({
				word5:"电话号码格式错误！",
				validation5:"error"
			});
		}
	}

	register(){
		let userName = this.state.userName;
		let psw = this.state.userPsw;
		let email = this.state.email;
		let phone = this.state.phone;
		let that = this;
		if(userName&&psw&&phone&&email){
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
	}else{
		that.setState({
			tips:"注册失败，请重试！",
			registerResult:false,
			});	
		}
	}

	pageJump(){
		let regResult = this.state.registerResult;
		let that = this;
		if(regResult){
			var router = that._reactInternalInstance._context.router;
						router.replace("/api/login");
		}
	}

	goToLawReg(){
		var router = this._reactInternalInstance._context.router;
						router.replace("/api/LawyerRegister");
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
				<Container >

					<Form horizontal>						
						<Input
							 type="text" 
							 placeholder="请输入用户名" 
							 ref="userName"
							 validation={this.state.validation1}
							 onFocus={this.getTip1.bind(this)} 
							 onBlur={this.checkUserName.bind(this)} 
							 hasFeedback
						 />													
						<small>{this.state.word1}</small>	
						<Input 
							type="password"  
							placeholder="请输入密码" 
							ref="psw"
							validation={this.state.validation2}
							onFocus={this.getTip2.bind(this)} 
							onBlur={this.checkUserPsw.bind(this)} 
							hasFeedback
						 />													
						<small>{this.state.word2}</small>
						<Input 
							type="password"  
							placeholder="确认密码" 
							ref="comPsw"
							validation={this.state.validation3}
							onFocus={this.getTip3.bind(this)} 
							onBlur={this.confirmUserPsw.bind(this)} 
							hasFeedback
						/>													
						<small>{this.state.word3}</small>
						<Input 
							type="email"  
							placeholder="请输入邮箱" 
							ref="email"
							validation={this.state.validation4}
							onBlur={this.checkEmail.bind(this)}
							hasFeedback 
						/>													
						<small>{this.state.word4}</small>
						<Input 
							type="number"  
							placeholder="请电话号码" 
							value={this.state.phone}  
							ref="phone"
							validation={this.state.validation5}
							onChange={this.checkPhone.bind(this)}
							hasFeedback  
						 />													
						<small>{this.state.word5}</small>
						<ModalTrigger modal={modal} open={this.state.isAction}>
   							<Input 
	   							type="submit" 
	   							value="注册" 
	   							amStyle="primary" 
	   							block  
	   							onClick={this.register.bind(this)} 
   							/>
  						</ModalTrigger>

					</Form>
					<Button amStyle="primary" radius onClick={this.goToLawReg.bind(this)}>法律服务人员注册点击这里</Button>
				</Container>			
			   );
	}
}
export default RegisterCPT;