import React from 'react';
import './ForgotPw.css';

export default function ForgotPw() {
  return (
    <div className="container">
      <h2 className="idpwFind">아이디/비밀번호 찾기</h2>
      <p className="findPageText">가입한 ID, PW를 잊으셨나요?</p>
      <hr />
      <div className="findForm">
        <div className="row">
          <div className="col">
            <span>아이디 찾기</span>
          </div>
          <div className="col">
            <img src={`${process.env.PUBLIC_URL}/image/idpwFind.svg`} />
          </div>
          <div className="col">
            <span>비밀번호 찾기</span>
          </div>
        </div>
      </div>
    </div>
  );
}
