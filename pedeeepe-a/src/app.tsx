import RegisterDialog from "./components/dialog/RegisterDialog";
import { h } from "preact";
import { useEffect } from "preact/hooks";
import Home from "./home";
import GamblingAdsLeft from "./components/ads/GamblingAdsLeft";
import GamblingAdsRight from "./components/ads/GamblingAdsRight";

export function App() {
  const handleRegister = () => {
    const modal = document.getElementById("register-dialog");
    if (modal) {
      setTimeout(() => {
        modal.style.display = "block";
      }, 1000);
    }
  };
  useEffect(() => {
    const main = document.getElementsByTagName("body")[0];
    if (main) {
      main.style.overflow = "hidden";
    }
    handleRegister();
  }, []);

  return (
    <div>
      <Home />
      <RegisterDialog id="register-dialog"></RegisterDialog>
      <GamblingAdsLeft />
      <GamblingAdsRight />
    </div>
  );
}
