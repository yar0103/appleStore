import React from "react";
import "./HelfSelf.css";

const HelfSelf = () => {
  function priceChange(dummyList) {
    return dummyList.title3.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const dummyList = [
    {
      title: "APPLE 스페셜리스트",
      title2: "스페셜리스트와 함께하는 일대일 쇼핑. 온라인에서도 매장에서도. ",
      src: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-earth-day-specialist-help-202404?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1711397327979",
    },
    {
      title: "TODAY AT APPLE",
      title2: "Apple Store의 무료 세션에 참여해 보세요. ",
      title3:
        "최신 기능과 더불어 Apple 기기를 더욱 심도 있게 활용하는 법을 알아보세요.",
      src: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-TAA-202310?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1697149577145",
    },
  ];

  const dummyList2 = [
    {
      title2:
        "무료 온라인 개인 맞춤 세션에서 새 기기를 설정하는 방법을 배워보세요. ",
      title3: "",
      src: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-25-apps-202108?wid=960&hei=480&fmt=p-jpg&qlt=95&.v=1626223748000",
    },
    {
      title2: "Genius Bar에서 직접 전문가의 도움을 받을 수 있습니다. ",
      title3: "",
      src: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-25-genius-202108?wid=960&hei=480&fmt=p-jpg&qlt=95&.v=1626384443000",
    },
  ];
  return (
    <div className="part">
      <div className="titleWrap">
        <h4 className="title">
          <span className="important">도움의 손길.</span>
          언제든, 당신에게 맞는 방식으로.
        </h4>
      </div>
      <div className="helfSelf">
        {dummyList.map((item, idx) => (
          <div className="itemWrapHelfSelf" key={idx}>
            <img src={item.src} alt="itemImage" className="itemImage" />
            <div className="cardTitle">{item.title}</div>
            <div className="cardTitle2">{item.title2}</div>
            <div className="cardTitle3">{item.title3}</div>
          </div>
        ))}
        <div className="helfSelf2">
          {dummyList2.map((item, idx) => (
            <div
              className={`itemWrap2 ${idx === 1 ? "secondItem" : ""}`}
              key={idx}
            >
              <img src={item.src} alt="itemImage" className="itemImage2" />
              <div className="cardTitle4">{item.title2}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelfSelf;
