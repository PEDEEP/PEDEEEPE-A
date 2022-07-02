import RegisterDialog from "./components/dialog/RegisterDialog";
import { h } from "preact";
import { useEffect } from "preact/hooks";
import Home from "./home";
import GamblingAdsLeft from "./components/ads/GamblingAdsLeft";
import GamblingAdsRight from "./components/ads/GamblingAdsRight";
import Question from "./components/quiz/Quiz";

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
    if (main) main.style.overflow = "hidden";
    handleRegister();
  }, []);

  return (
    <div>
      <Home />
      <RegisterDialog id="register-dialog"></RegisterDialog>
      <GamblingAdsLeft />
      <GamblingAdsRight />
      <div
        id="quiz"
        style={{
          display: "none",
          position: "absolute",
          top: 0,
          zIndex: 9999,
          width: "100vw",
          height: "100vh",
          backgroundColor: "white",
        }}
      >
        <Question
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    </div>
  );
}
