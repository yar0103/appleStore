import React from "react";
import "./FastLink.css";

const FastLink = () => {
  return (
    <div className="part">
      <div className="titleWrap">
        <h4 className="subTitle">
          <span className="important">빠른링크</span>
          <ul className="listWrap">
            <li className="linkListLi">
              <a href="#" className="linkList">
                주문 상태
              </a>
            </li>
            <li className="linkListLi">
              <a href="#" className="linkList">
                쇼핑 도움말
              </a>
            </li>
            <li className="linkListLi">
              <a href="#" className="linkList">
                반품
              </a>
            </li>
            <li className="linkListLi">
              <a href="#" className="linkList">
                관심목록
              </a>
            </li>
          </ul>
        </h4>
      </div>
    </div>
  );
};

export default FastLink;
