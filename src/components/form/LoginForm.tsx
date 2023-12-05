import React, { useState } from 'react';

export default function Login() {
  const [emailPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');

  // 폼 제출 시 실행되는 함수
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('로그인 시도:', { emailPhone, password });
  };

  return (
    <div className="LoginContainer">
      <div className="TitleContainer">
        <div className="Title">로그인</div>
      </div>
      <form onSubmit={handleSubmit} className="FormContainer">
        <div className="InputContainer">
          <label className="Label" htmlFor="emailPhone">
            이메일 또는 전화번호
          </label>
          <input
            className="Input"
            type="text"
            id="emailPhone"
            name="emailPhone"
            value={emailPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            placeholder="이메일 또는 전화번호"
            required
          />
        </div>
        <div className="InputContainer">
          <label className="Label" htmlFor="password">
            비밀번호
          </label>
          <input
            className="Input"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호"
            required
          />
        </div>
        <button type="submit" className="SubmitButton">
          로그인
        </button>
      </form>
    </div>
  );
}
