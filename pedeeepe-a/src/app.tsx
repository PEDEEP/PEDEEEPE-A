import RegisterDialog from "./components/dialog/RegisterDialog";
import { h } from "preact";
import { useEffect } from "preact/hooks";

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
    handleRegister();
  }, []);

  return (
    <>
      <RegisterDialog id="register-dialog"></RegisterDialog>
    </>
  );
}
