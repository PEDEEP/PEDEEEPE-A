import PdpaDialog from "./PdpaDialog";
import { useState } from "preact/hooks";
import Swal from "sweetalert2";

const RegisterDialog = ({ ...props }) => {
  const [isAcceptTerm, setIsAcceptTerm] = useState(false);

  const handlePdpa = () => {
    setIsAcceptTerm(true);
    const modal = document.getElementById("pdpa-dialog");
    if (modal) {
      modal.style.display = "block";
    }
  };

  const handleRegister = () => {
    if (isAcceptTerm) {
      const main = document.getElementsByTagName("body")[0];
      if (main) main.style.overflow = "auto";
      Swal.fire("Noice you registered");
      const modal = document.getElementById("register-dialog");
      if (modal) {
        modal.style.display = "none";
      }
      return;
    }
    handlePdpa();
    setIsAcceptTerm(true);
    return;
  };

  return (
    <div
      {...props}
      style={{
        padding: "100px",
        display: "none",
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        zIndex: 1,
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          width: "80%",
          margin: "auto",
          padding: "50px",
          borderRadius: "15px",
        }}
      >
        <div
          style={{
            textAlign: "start",
            color: "black",
            marginBottom: "50px",
            fontSize: "30px",
          }}
        >
          โปรด Register
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "black",
          }}
        >
          <input
            style={{ marginBottom: "10px" }}
            type="text"
            placeholder="username"
          />
          <input type="text" placeholder="password" />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "50px",
            }}
          >
            <div>
              <input
                style={{ color: "black" }}
                type="checkbox"
                name="justCheckbox"
                checked={isAcceptTerm}
                onChange={handlePdpa}
              />
              <label style={{ color: "black", fontSize: "24px" }}>
                โปรดสมยอมใน term ของเรา
              </label>
            </div>
            <button disabled={!isAcceptTerm} onClick={() => handleRegister()}>
              Register
            </button>
          </div>
        </div>
        <PdpaDialog id="pdpa-dialog" />
      </div>
    </div>
  );
};

export default RegisterDialog;
