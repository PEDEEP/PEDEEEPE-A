import { useEffect, useMemo, useState } from "preact/hooks";

import styles from "../../styles/Question.module.css";
import { QuestionInterface } from "../../types/question";

const MOCK_QUESTION = {
  id: 0,
  question: "",
  choices: [
    {
      choice: "",
      id: 1,
      is_correct: false,
      question_id: 0,
    },
    {
      choice: "",
      id: 1,
      is_correct: false,
      question_id: 0,
    },
    {
      choice: "",
      id: 1,
      is_correct: false,
      question_id: 0,
    },
    {
      choice: "",
      id: 1,
      is_correct: false,
      question_id: 0,
    },
  ],
};

const Question = ({ ...props }) => {
  const [qNumber, setQNumber] = useState(0);
  const [questions, setQuestions] = useState<Array<QuestionInterface>>([
    MOCK_QUESTION,
    MOCK_QUESTION,
  ]);

  const fectchQuestions = async () => {
    const fetched = await fetch(
      // ขี้เกียจทำ env
      "https://pedeep.mixkoap.com/file/questions.json"
    ).then(async (response) => {
      if (!response.ok) {
        throw "Error อ่ะมึง";
      }
      return (await response.json()) as Array<QuestionInterface>;
    });
    console.log(fetched);
    setQuestions(fetched);
  };

  const checkAnswer = (q_id: number, choice_id: number): boolean =>
    questions
      .find((val) => val.id === q_id)
      ?.choices.find((valB) => valB.id === choice_id)?.is_correct!;

  useEffect(() => {
    fectchQuestions();
  }, []);

  const renderLeft = useMemo(() => {
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
      <div>{questions[qNumber].question}</div>
      <div>
        <div className={styles.questionBox}>
          1. {questions[qNumber].choices[0].choice}
        </div>
        <div className={styles.questionBox}>
          2. {questions[qNumber].choices[1].choice}
        </div>
        <div className={styles.questionBox}>
          3. {questions[qNumber].choices[2].choice}
        </div>
        <div class={styles.questionBox}>
          4. {questions[qNumber].choices[3].choice}
        </div>
      </div>
    </div>;
  }, [qNumber, questions]);
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
        <div>{questions[qNumber + 1].question}</div>
        <div
          style={{
            display: "grid",
            marginTop: "100px",
            gridGap: "100px",
            gridTemplateColumns: "repeat(2, auto)",
          }}
        >
          {questions[qNumber].choices.map((item, index) => {
            return (
              <div
                className={styles.questionBox}
                onClick={() => checkAnswer(questions[qNumber].id, item.id)}
              >
                {index + 1}. {item.choice}
              </div>
            );
          })}
        </div>
      </div>
    );
  }, [qNumber, questions]);

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
