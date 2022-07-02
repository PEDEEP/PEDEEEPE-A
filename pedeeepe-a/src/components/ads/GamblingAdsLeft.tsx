import { useEffect } from "preact/hooks";

const GamblingAdsLeft = () => {
  const handleAdsDisappear = () => {
    const ads = document.getElementById("gambling-ads-left");
    if (ads) {
      ads.style.display = "none";
    }
  };

  const handleAdsAppear = () => {
    const ads = document.getElementById("gambling-ads-left");
    if (ads) {
      ads.style.display = "block";
    }
  };

  useEffect(() => {
    setInterval(() => {
      handleAdsAppear();
    }, 10000);
  }, []);

  return (
    <div
      id="gambling-ads-left"
      style={{ position: "fixed", bottom: 0, left: 0 }}
    >
      <img
        style={{ position: "relative" }}
        src="https://www.img09.xyz/assets/img/banner-new/B1-H0PIlk-200x400-2.gif"
        alt=""
      />
      <div
        style={{
          position: "absolute",
          top: 5,
          right: 10,
          fontSize: 15,
          padding: "5px 10px",
          cursor: "pointer",
          backgroundColor: "white",
          borderRadius: "5px",
        }}
        onClick={() => {
          handleAdsDisappear();
        }}
      >
        ❌
      </div>
    </div>
  );
};

export default GamblingAdsLeft;
