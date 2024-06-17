import React from "react";
import "./StoreItem.css";

const StoreItem = () => {
  const dummyList = [
    {
      title: "Mac",
      src: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-mac-nav-202310?wid=400&hei=260&fmt=png-alpha&.v=1696964122666",
    },
    {
      title: "iPhone",
      src: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-iphone-nav-202309?wid=400&hei=260&fmt=png-alpha&.v=1692971740452",
    },
    {
      title: "iPad",
      src: "image/ipad.png",
    },
    {
      title: "Apple Watch",
      src: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-watch-nav-202309_GEO_KR?wid=400&hei=260&fmt=png-alpha&.v=1693703814022",
    },
    {
      title: "AirPods",
      src: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-airpods-nav-202209?wid=400&hei=260&fmt=png-alpha&.v=1660676485885",
    },
    {
      title: "AirTag",
      src: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=400&hei=260&fmt=png-alpha&.v=1625783380000",
    },
    {
      title: "Appple TV 4K",
      src: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664628458484",
    },
    {
      title: "Accesory",
      src: "image/accesory.png",
    },
  ];

  return (
    <div className="part">
      <div className="titleWrap">
        <h1 className="title">
          <span className="important">스토어.</span>
          좋아하는 Apple 제품을 <br />
          구입하는 가장 좋은 방법.
        </h1>
      </div>
      <div className="storeItem">
        {dummyList.map((item) => (
          <div className="itemWrap">
            <img src={item.src} alt="itemImage" className="itemImage" />
            <div className="itemTitle">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreItem;
