import React, { useState } from "react";

export default function QuestionForm() {
  const [questions, setQuestions] = useState([
    { id: 1, question: "", answerType: "", shortAnswer: "" },
  ]);

  const addQuestion = () => {
    const newQuestion = {
      id: questions.length + 1,
      question: "",
      answerType: "",
      shortAnswer: "",
    };
    setQuestions([...questions, newQuestion]);
  };

  const handleQuestionChange = (id, field, value) => {
    const updatedQuestions = questions.map((question) => {
      if (question.id === id) {
        return { ...question, [field]: value };
      }
      return question;
    });
    setQuestions(updatedQuestions);
  };

  const deleteQuestion = (id) => {
    const updatedQuestions = questions.filter((question) => question.id !== id);
    setQuestions(updatedQuestions);
  };

  const handleSaveAndShare = () => {
    const questionnaireData = questions.map(({ id, ...rest }) => rest);
    console.log(questionnaireData); // Output JSON data structure to console
  };

  const formStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: "#fff",
    padding: "24px",
    width: "712px",
  };

  const labelStyles = {
    fontFamily: "sans-serif",
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "12px",
    textAlign: "left",
    marginBottom: "16px",
  };

  const inputStyles = {
    width: "100%",
    border: "1px solid rgba(0, 0, 0, 0.1)",
    borderRadius: "4px",
    padding: "16px",
    fontFamily: "sans-serif",
    fontSize: 16,
    fontWeight: 400,
    textAlign: "left",
  };

  const selectStyles = {
    border: "1px solid rgba(0, 0, 0, 0.1)",
    borderRadius: "4px",
    padding: "11px 16px",
  };

  const answerStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    margin: "24px 0",
  };

  const buttonsContainerStyles = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "transparent",
    marginTop: "32px",
  };

  const primaryButtonStyles = {
    width: "100%",
    padding: "8px",
    gap: "8px",
    border: "1px solid rgba(0, 0, 0, 0.1)",
    backgroundColor: "transparent",
    color: "#AE0000", //red
    fontFamily: "sans-serif",
    fontSize: "12px",
    fontWeight: 700,
    lineHeight: "13px",
    textAlign: "center",
    textTransform: "uppercase",
  };

  const secondaryButtonStyles = {
    width: "100%",
    padding: "8px",
    margin: "16px 0 0 0",
    gap: "8px",
    border: "1px solid rgba(0, 0, 0, 0.1)",
    backgroundColor: "#AE0000", //red
    color: "#FFF",
    fontFamily: "sans-serif",
    fontSize: "12px",
    fontWeight: 700,
    lineHeight: "13px",
    textAlign: "center",
    textTransform: "uppercase",
  };

  return (
    <div>
      <div style={formStyles}>
        {questions.map(({ id, question, answerType, shortAnswer }) => (
          <div key={id}>
            <form>
              <div>
                <label style={labelStyles} htmlFor={`question-${id}`}>
                  Question
                </label>
                <input
                  style={inputStyles}
                  type="text"
                  id={`question-${id}`}
                  value={question}
                  onChange={(e) =>
                    handleQuestionChange(id, "question", e.target.value)
                  }
                  placeholder="What do you want to ask?"
                />
              </div>
              <div style={answerStyles}>
                <label style={labelStyles} htmlFor={`answerType-${id}`}>
                  Answer
                </label>
                <select
                  style={selectStyles}
                  id={`answerType-${id}`}
                  value={answerType}
                  onChange={(e) =>
                    handleQuestionChange(id, "answerType", e.target.value)
                  }
                >
                  <option value="" disabled>
                    Short Answer
                  </option>
                  <option value="text">Text</option>
                  <option value="number">Number</option>
                  <option value="date">Date</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <div>
                {/* <label htmlFor={`shortAnswer-${id}`}>Short Answer Text</label> */}
                <input
                  style={inputStyles}
                  type="text"
                  id={`shortAnswer-${id}`}
                  value={shortAnswer}
                  onChange={(e) =>
                    handleQuestionChange(id, "shortAnswer", e.target.value)
                  }
                  placeholder="Short Answer Text"
                />
              </div>
            </form>
            <button onClick={() => deleteQuestion(id)}>Delete</button>
          </div>
        ))}
      </div>
      <div style={buttonsContainerStyles}>
        <button style={primaryButtonStyles} onClick={addQuestion}>
          + Add Question
        </button>
        <button style={secondaryButtonStyles} onClick={handleSaveAndShare}>
          Save & Share
        </button>
      </div>
    </div>
  );
}
