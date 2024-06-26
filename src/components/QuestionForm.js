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
        if (field === "answerType") {
          return { ...question, answerType: value, shortAnswer: "" };
        }
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
  };

  const questionStyles = {
    marginBottom: "32px",
    backgroundColor: "#fff",
    padding: "24px",
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
  };

  const primaryButtonStyles = {
    width: "100%",
    padding: "8px",
    gap: "8px",
    border: "1px solid rgba(0, 0, 0, 0.1)",
    backgroundColor: "transparent",
    color: "#333", 
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
    backgroundColor: "#333", 
    color: "#FFF",
    fontFamily: "sans-serif",
    fontSize: "12px",
    fontWeight: 700,
    lineHeight: "13px",
    textAlign: "center",
    textTransform: "uppercase",
  };

  const deleteButtonStyles = {
    padding: "8px",
    margin: "16px 0 0 0",
    gap: "8px",
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
    padding: "0",
    width: "32px",
  };

  return (
    <div>
      <div style={formStyles}>
        {questions.map(({ id, question, answerType, shortAnswer }) => (
          <div id="question-container" key={id} style={questionStyles}>
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
                  <option value="text">Text</option>
                  <option value="number">Number</option>
                  <option value="date">Date</option>
                </select>
              </div>
              <div>
                <input
                  style={inputStyles}
                  type={answerType}
                  id={`shortAnswer-${id}`}
                  value={shortAnswer}
                  onChange={(e) =>
                    handleQuestionChange(id, "shortAnswer", e.target.value)
                  }
                  placeholder={
                    answerType === "text"
                      ? "Short Answer Text"
                      : answerType === "number"
                      ? "Short Answer Number"
                      : "Short Answer Date"
                  }
                  aria-label="Enter short answer text"
                />
              </div>
            </form>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <button
                style={deleteButtonStyles}
                onClick={() => deleteQuestion(id)}
                aria-label="delete question"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.72736 5.091V13.4546H11.2728V5.091H12.3637V14.5455H3.63645V5.091H4.72736ZM7.091 5.81543V12.3637H6.00009V5.81543H7.091ZM10.0001 5.81543V12.3637H8.90918V5.81543H10.0001ZM10.1819 1.45703L10.9092 2.91158H13.091V4.00249H2.90918V2.91158H5.091L5.81827 1.45703H10.1819Z"
                    fill="#333"
                  />
                </svg>
              </button>
            </div>
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
