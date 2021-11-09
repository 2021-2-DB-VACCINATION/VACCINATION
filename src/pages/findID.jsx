import WholeScreen from "../components/wholeScreen";
import WhiteScreen from "../components/auth/whiteScreen";
import BlueBtn from "../components/auth/blueBtn";
import InputBox from "../components/auth/inputBox";
import LinkBtnSet from "../components/auth/linkBtn";
import "./find.css";
import React, { Component } from 'react';

class FindID extends Component {
  constructor(props){
    super(props);
    this.state={
      loginName : "",
      loginSsn : ""
    };
    this.onChange =this.onChange.bind(this);
    this.onSubmitData =this.onSubmitData.bind(this);
  }

  onChange(e){
    this.setState({
      [e.target.name]:e.target.value
    });
  }

  onSubmitData(e) {
    e.preventDefault();
    const data = JSON.stringify({
        name: this.state.loginName,
        ssn: this.state.loginSsn
      });
    fetch('http://localhost:5000/sign/findID', {
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
      const {loginName,loginSsn} = this.state;
      const {onChange, onSubmitData} = this;
      return (
        <section className="find">
          <WholeScreen>
            <WhiteScreen>
              <div className="authImg" />
              <div className="content">
                <h1 className="title">아이디 찾기</h1>
                <InputBox type={"text"} placeholder={"이름"} name={"loginName"} value={loginName} onChange={onChange} />
                <InputBox type={"number"} placeholder={"주민번호"} name={"loginSsn"} value={loginSsn} onChange={onChange} />
                <BlueBtn text={"아이디 찾기"} event={onSubmitData}></BlueBtn>
                <LinkBtnSet
                  text1={"로그인"}
                  url1={"/login"}
                  text2={"회원가입"}
                  url2={"/signup"}
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

export default FindID;
