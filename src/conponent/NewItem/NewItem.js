import React from "react";
import "./NewItem.css";

const NewItem = () => {
  const dummyList = [
    {
      title: "IPHONE 15 PRO",
      title2: "티타늄",
      title3: 1550000,
      src: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-iphone-15-pro-202309?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1692910040844",
    },
    {
      title: "IPHONE 15 PRO",
      title2: "불가능이란 얇다.",
      title3: "1499000",
      src: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-ipad-pro-202405?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1713308272816",
    },
    {
      title: "IPHONE 15 PRO",
      title2: "어디서나 종횡무진할 수 있도록.",
      title3: "1390000",
      src: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-macbook-air-202402?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1707259289595",
    },
    {
      title: "IPHONE 15 PRO",
      title2: "새바람이 불다.",
      title3: "899000",
      src: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-ipad-air-202405?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1713308272877",
    },
    {
      title: "IPHONE 15 PRO",
      title2: "새롭게 써 내려가는 창의성의 미래.",
      title3: "195000",
      src: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-iphone-15-pro-202309?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1692910040844",
    },
  ];
  return (
    <div className="part">
      <div className="titleWrap">
        <h4 className="title">
          <span className="important">최신제품.</span>
          따끈따끈한 신제품 이야기.
        </h4>
      </div>
      <div className="newItem">
        {dummyList.map((item, idx) => (
          <div className="itemWrap" key={idx}>
            <img src={item.src} alt="itemImage" className="itemImage" />
            <div
              className={`cardTitle ${
                idx === 2 || idx === 3 ? "blackText" : ""
              }`}
            >
              {item.title}
            </div>
            <div
              className={`cardTitle2 ${
                idx === 2 || idx === 3 ? "blackText" : ""
              }`}
            >
              {item.title2}
            </div>
            <div
              className={`cardTitle3 ${
                idx === 2 || idx === 3 ? "blackText" : ""
              }`}
            >
              {item.title3.toLocaleString()} 부터
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewItem;
