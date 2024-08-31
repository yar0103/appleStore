import React from "react";
import "./FastLink.css";
import { Link } from 'react-router-dom';

const FastLink = () => {
  return (
    <div className="part">
      <div className="titleWrap">
        <h4 className="subTitle">
          <span className="important">빠른링크</span>
          <ul className="listWrap">
            <li className="linkListLi">
              <Link to="./orderState" className="linkList">
                주문 상태
              </Link>
            </li>
            <li className="linkListLi">
              <Link to="./soppingHelf" className="linkList">
                쇼핑 도움말
              </Link>
            </li>
            <li className="linkListLi">
              <Link to="./productReturn" className="linkList">
                반품
              </Link>
            </li>
            <li className="linkListLi">
              <Link to="./watchList" className="linkList">
                관심목록
              </Link>
            </li>
          </ul>
        </h4>
      </div>
    </div>
  );
};

export default FastLink;
