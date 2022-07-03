import { useEffect, useMemo, useState } from "preact/hooks";
import Swal from "sweetalert2";

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
    setQuestions(fetched);
  };

  const checkAnswer = (q_id: number, choice_id: number) => {
    if (
      !questions
        .find((val) => val.id === q_id)
        ?.choices.find((valB) => valB.id === choice_id)?.is_correct!
    ) {
      const question = document.getElementById("quiz");
      if (question) {
        question.style.display = "none";
      }
      Swal.fire("ว้่ายผิดไปอ่านใหม่");
      setQNumber(0);
      const scroll = document.getElementById("pdpa-scroll");
      if (scroll) scroll.scrollTo(0, 0);
      return;
    }
    handlePageChange();
    return;
  };

  useEffect(() => {
    fectchQuestions();
  }, []);

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
        <div>{questions[qNumber].question}</div>
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
    ),
    [qNumber, questions]
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
        <div>{questions[qNumber + 1].question}</div>
        <div
          style={{
            display: "grid",
            marginTop: "100px",
            gridGap: "100px",
            gridTemplateColumns: "repeat(2, auto)",
          }}
        >
          {questions[qNumber + 1].choices.map((item, index) => {
            return (
              <div
                className={styles.questionBox}
                onClick={() => checkAnswer(questions[qNumber + 1].id, item.id)}
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

    if (qNumber == questions.length - 1) {
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

  const handleEndQuiz = () => {
    Swal.fire("ยินดีด้วย");
    const quiz = document.getElementById("quiz");
    if (quiz) quiz.style.display = "none";

    const pdpa = document.getElementById("pdpa-scroll");
    if (pdpa) pdpa.style.display = "none";

    const dialog = document.getElementById("pdpa-dialog");
    if (dialog) dialog.style.display = "none";
  };
  return (
    <div className={styles.questionScreen} {...props}>
      {renderLeft}
      {renderRight}
    </div>
  );
};

export default Question;
