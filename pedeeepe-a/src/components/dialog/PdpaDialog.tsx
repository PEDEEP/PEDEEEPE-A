import PDPAContent from "../PDPAContent";

const PdpaDialog = ({ ...props }) => {
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
        zIndex: 2,
      }}
    >
      <PDPAContent />
    </div>
  );
};

export default PdpaDialog;
