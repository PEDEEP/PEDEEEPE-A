import { useMemo, useState } from "preact/hooks";

import styles from "../../styles/Question.module.css";
const Question = ({ ...props }) => {
  const questions = [
    { q: "Are you gay?" },
    { q: "Hello?" },
    { q: "Float" },
    { q: "1" },
  ];
  const [qNumber, setQNumber] = useState(0);
  const renderLeft = useMemo(
    () => (
      <div
        id="question"
        style={{
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "black",
        }}
      >
        <div>{questions[qNumber].q}</div>
        <div
          style={{
            display: "grid",
            marginTop: "100px",
            gridGap: "100px",
            gridTemplateColumns: "repeat(2, auto)",
          }}
        >
          <div style={{ color: "black" }}>Helelo</div>
          <div style={{ color: "black" }}>asdhgaydgasjdhgascdavvas</div>
          <div style={{ color: "black" }}>adsdhg</div>
          <div style={{ color: "black" }}>dsiuotp</div>
        </div>
      </div>
    ),
    [qNumber]
  );
  const renderRight = useMemo(() => {
    if (qNumber == questions.length - 1) {
      return <div>You good at the Game, don't you</div>;
    }
    return (
      <div
        id="question"
        style={{
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "black",
        }}
      >
        <div>{questions[qNumber + 1].q}</div>
        <div
          style={{
            display: "grid",
            marginTop: "100px",
            gridGap: "100px",
            gridTemplateColumns: "repeat(2, auto)",
          }}
        >
          <div style={{ color: "black" }}>Helelo</div>
          <div style={{ color: "black" }}>asdhgaydgasjdhgascdavvas</div>
          <div style={{ color: "black" }}>adsdhg</div>
          <div style={{ color: "black" }}>dsiuotp</div>
        </div>
      </div>
    );
  }, [qNumber]);

  const handlePageChange = () => {
    document.querySelectorAll("#question").forEach((e) => {
      e.classList.add(styles.changeQuestion);
    });
    if (qNumber == questions.length) {
      handleEndQuiz();
      return;
    }
    setTimeout(() => {
      document.querySelectorAll("#question").forEach((e) => {
        setQNumber(qNumber + 1);
        e.classList.remove(styles.changeQuestion);
      });
    }, 1000);
  };

  const handleEndQuiz = () => {};
  return (
    <div className={styles.questionScreen} {...props}>
      <button
        onClick={() => handlePageChange()}
        style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-25%)",
        }}
        className="absolute right-4 top-1/2 -translate-y-1/4"
      >
        {">"}
      </button>
      {renderLeft}
      {renderRight}
    </div>
  );
};

export default Question;
