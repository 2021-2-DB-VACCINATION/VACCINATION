import WholeScreen from "../components/wholeScreen";
import WhiteScreen from "../components/auth/whiteScreen";
import BlueBtn from "../components/auth/blueBtn";
import InputBox from "../components/auth/inputBox";
import LinkBtnSet from "../components/auth/linkBtn";
import "./login.css";
import React, { Component } from 'react';

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      loginEmail : "",
      loginPasswd : ""
    };
    this.onChange =this.onChange.bind(this);
    this.onClickLogin =this.onClickLogin.bind(this);
  }

  onChange(e){
    this.setState({
      [e.target.name]:e.target.value
    });
  }

  onClickLogin(e) {
    e.preventDefault();
    const data = JSON.stringify({
        email: this.state.loginEmail,
        passwd: this.state.loginPasswd
      });
    fetch('http://localhost:5000/sign/login', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: data
      })
      .then(res=>res.json())
      .then(data=>console.log(data));
  }

  render() {
    const {loginEmail,loginPasswd} = this.state;
    const {onChange, onClickLogin} = this;
    return (
      <section className="login">
        <WholeScreen>
          <WhiteScreen>
            <div className="authImg" />
            <div className="content">
              <h1 className="title">로그인</h1>
              <InputBox type={"text"} placeholder={"아이디 (이메일)"} name={"loginEmail"} value={loginEmail} onChange={onChange}/>
              <InputBox type={"password"} placeholder={"비밀번호"} name={"loginPasswd"} value={loginPasswd} onChange={onChange}/>
              <BlueBtn text={"로그인"} event={onClickLogin}></BlueBtn>
              <LinkBtnSet
                text1={"회원가입"}
                url1={"/signup"}
                text2={"아이디 찾기"}
                url2={"/findID"}
                text3={"비밀번호 찾기"}
                url3={"/findPW"}
              />
            </div>
          </WhiteScreen>
        </WholeScreen>
      </section>
      );
    }
  }

export default Login;