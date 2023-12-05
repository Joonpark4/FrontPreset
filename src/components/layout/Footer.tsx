import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="logo">LOGO</div>
      <div className="footer_con_wrap">
        <div className="footer_con">
          <div>회사명: OOO</div>
          <div>대표자: OOO</div>
        </div>
        <div className="footer_con">
          <div>주소 : 서울특별시 강남구 강남대로</div>
          <div>이메일 : example@example.com</div>
        </div>
        <div className="footer_con">
          <div>전화: 00-000-0000</div>
          <div>사업자등록번호 : 000-00-00000</div>
          <div>통신판매업신고 : 2023-OOOO-0000</div>
        </div>
        <div className="footer_con">
          <div>회사명: 주식회사 엔아이</div>
          <div>전화: 031-778-8117</div>
          <div>주소 : 경기 성남시 분당구 판교역로192번길 14-2</div>
        </div>
      </div>
    </footer>
  );
}