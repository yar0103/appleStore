import React from "react";
import "./Sale.css";

const Sale = () => {
  const dummyList = [
    {
      src: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-ipad-card-40-education-202405_GEO_KR?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1714087447852",
      title: "교육",
      title2: "교육 할인가로 새로운 iPad 또는 Mac을 더 부담 없이.",
    },
    {
      src: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-business-202209_GEO_KR?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1661470121762",
      title: "비즈니스",
      title2: "대기업부터 중소기업까지 Apple이 함께합니다.",
    },
    {
      src: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-refurb-202402?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1707259306111",
      title: "인증 리퍼비쉬 제품",
      title2: "1년 보증이 제공되는 리퍼비쉬 Apple 제품을 쇼핑하세요. ",
    },
  ];
  return (
    <div className="part">
      <div className="titleWrap">
        <h4 className="title">
          <span className="important">특별 할인.</span>
          비즈니스, 학교 등을 위한 혜택.
        </h4>
      </div>
      <div className="saleItem">
        {dummyList.map((item, idx) => (
          <div className="saleWrap" key={idx}>
            <img src={item.src} alt="saleImage" className="saleImage" />
            <div className={`saleTitle ${idx == 1 ? "whiteText" : ""}`}>
              {item.title}
            </div>
            <div className={`saleTitle2 ${idx == 1 ? "whiteText" : ""}`}>
              {item.title2}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sale;
