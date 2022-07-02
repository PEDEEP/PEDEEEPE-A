import { useEffect } from "preact/hooks";

const GamblingAdsRight = () => {
  const handleAdsDisappear = () => {
    const ads = document.getElementById("gambling-ads-right");
    if (ads) {
      ads.style.display = "none";
    }
  };

  const handleAdsAppear = () => {
    const ads = document.getElementById("gambling-ads-right");
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
      id="gambling-ads-right"
      style={{ position: "fixed", bottom: 0, right: 0 }}
    >
      <img
        style={{ position: "relative" }}
        src="https://www.img03.xyz/assets/img/banner-new/R-float-Ufasexygame-banner-120x380.gif"
        alt=""
      />
      <div
        style={{
          position: "absolute",
          top: 5,
          right: 10,
          fontSize: 30,
          cursor: "pointer",
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

export default GamblingAdsRight;
