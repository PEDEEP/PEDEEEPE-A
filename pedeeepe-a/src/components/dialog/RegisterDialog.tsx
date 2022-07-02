import PdpaDialog from "./PdpaDialog";

const handlePdpa = () => {
  const modal = document.getElementById("pdpa-dialog");
  if (modal) {
    modal.style.display = "block";
  }
};
const RegisterDialog = ({ ...props }) => {
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
        <form
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
                onChange={handlePdpa}
                id=""
              />
              <label style={{ color: "black", fontSize: "24px" }}>
                โปรดสมยอมใน term ของเรา
              </label>
            </div>
            <button>Register</button>
          </div>
        </form>
        <PdpaDialog id="pdpa-dialog" />
      </div>
    </div>
  );
};

export default RegisterDialog;
