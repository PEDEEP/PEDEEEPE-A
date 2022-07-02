import RegisterDialog from "./components/dialog/RegisterDialog";
import { h } from "preact";
import { useEffect } from "preact/hooks";
import Home from './home'
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
    // handleRegister();
  }, []);

  return (
    <>
    <Home />
      <RegisterDialog id="register-dialog"></RegisterDialog>
    </>
  );
}
