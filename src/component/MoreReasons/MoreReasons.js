import React from "react";
import "./MoreReasons.css";

const MoreReasons = () => {
  const dummyList = [
    {
      src: process.env.PUBLIC_URL + "/image/reasons1.svg",
      title: "기분 좋은 결제 옵션.",
    },
    {
      src: process.env.PUBLIC_URL + "/image/reasons2.svg",
      title: "쓰던기기를 보상판매하고 새기기를 더 저렴하게",
    },
    {
      src: process.env.PUBLIC_URL + "/image/reasons3.svg",
      title:
        "간편한 무료 배송. 매장 보유 제품은 Apple Store에서 직접 픽업 가능.",
    },
    {
      src: process.env.PUBLIC_URL + "/image/reasons4.svg",
      title: "Mac를 맞춤구성하고 Spple Watch를 당신만의 스타일로",
    },
    {
      src: process.env.PUBLIC_URL + "/image/reasons5.svg",
      title:
        "자신만의 것이라는 증표. 무료로 조합해서 새기는 이모티콘, 이름, 숫자.",
    },
    {
      src: process.env.PUBLIC_URL + "/image/reasons6.svg",
      title: "맞춤형 쇼핑을 Apple Store 앱에서 경험하세요.",
    },
  ];
  return (
    <div className="part">
      <div className="titleWrap">
        <h4 className="title">
          <span className="important">남다른 Apple Store. </span>
          이곳에서 쇼핑해야 하는 이유.
        </h4>
      </div>
      <div className="reasonsItem">
        {dummyList.map((item, idx) => (
          <div className="reasonsWrap" key={idx}>
            <img
              src={item.src}
              alt="reasonsImage"
              className="reasonsImage"
              width="40px"
            />
            <div className="reasonsTitle">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreReasons;
