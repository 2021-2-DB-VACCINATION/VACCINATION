import WholeScreen from "../components/wholeScreen";
import WhiteScreen from "../components/auth/whiteScreen";
import BlueBtn from "../components/auth/blueBtn";
import InputBox from "../components/auth/inputBox";
import LinkBtnSet from "../components/auth/linkBtn";
import "./signup.css";
import React, { Component } from 'react';

class SignUp extends Component {
  constructor(props){
    super(props);
    this.state={
      loginName : "",
      loginSsn : "",
      loginTel : "",
      loginEmail : "",
      loginPasswd : "",
      loginLocation : ""
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
        name: this.state.loginName,
        ssn: this.state.loginSsn,
        tel: this.state.loginTel,
        email: this.state.loginEmail,
        passwd: this.state.loginPasswd,
        location: this.state.loginLocation
      });
    fetch('http://localhost:5000/sign/signup', {
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
      const {loginName,loginSsn,loginTel,loginEmail,loginPasswd,loginLocation} = this.state;
      const {onChange, onClickLogin} = this;
      return (
        <section className="signup">
          <WholeScreen>
            <WhiteScreen>
              <div className="authImg" />
              <div className="content">
                <h1 className="title">회원가입</h1>
                <InputBox type={"text"} placeholder={"이름"} page={"회원가입"} name={"loginName"} value={loginName} onChange={onChange}/>
                <InputBox
                  type={"number"}
                  placeholder={"주민번호"}
                  page={"회원가입"}
                  name={"loginSsn"}
                  value={loginSsn}
                  onChange={onChange}
                />
                <InputBox type={"tel"} placeholder={"전화번호"} page={"회원가입"} name={"loginTel"} value={loginTel} onChange={onChange}/>
                <InputBox type={"email"} placeholder={"이메일"} page={"회원가입"} name={"loginEmail"} value={loginEmail} onChange={onChange}/>
                <InputBox
                  type={"password"}
                  placeholder={"비밀번호"}
                  page={"회원가입"}
                  name={"loginPasswd"}
                  value={loginPasswd}
                  onChange={onChange}
                />
                <InputBox type={"text"} placeholder={"주소"} page={"회원가입"} name={"loginLocation"} value={loginLocation} onChange={onChange}/>
                <BlueBtn text={"회원가입"} event={onClickLogin}></BlueBtn>
                <LinkBtnSet
                  text1={"로그인"}
                  url1={"/login"}
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
export default SignUp;
