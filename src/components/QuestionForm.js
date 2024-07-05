import React, { useState } from "react";
import { useTheme } from "../theme/ThemeContext";

export default function QuestionForm() {
  const [questions, setQuestions] = useState([
    { id: 1, question: "", answerType: "", shortAnswer: "" },
  ]);

  const { colors } = useTheme();

  const formContainerStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  };

  const formStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  };

  const questionStyles = {
    marginBottom: "32px",
    backgroundColor: "transparent",
    padding: "24px",
  };

  const labelStyles = {
    color: colors.textPrimary,
    fontFamily: "sans-serif",
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "12px",
    textAlign: "left",
    marginBottom: "16px",
  };

  const inputStyles = {
    border: `1px solid ${colors.primaryLight}`,
    borderRadius: "4px",
    padding: "8px",
    fontFamily: "sans-serif",
    fontSize: 16,
    fontWeight: 400,
    textAlign: "left",
    lineHeight: "2rem",
  };

  const selectStyles = {
    border: "1px solid rgba(0, 0, 0, 0.1)",
    borderRadius: "4px",
    padding: "12px 16px",
    appearance: "none",
    width: "271px",
    WebkitAppearance: "none", // For Safari
    MozAppearance: "none", // For Firefox
    backgroundImage:
      "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.9244 4.36353L14.2905 5.72998L7.87255 12.1479L1.45459 5.72998L2.82041 4.36353L7.87255 9.41503L12.9244 4.36353Z\" fill=\"%23AE0000\"/></svg>')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 8px center",
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
    margin: "16px 0 0 0",
    gap: "8px",
    border: "1px solid rgba(0, 0, 0, 0.1)",
    backgroundColor: colors.primary,
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
    width: "32px",
  };

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

  return (
    <div>
      <div style={formContainerStyles}>
        {questions.map(({ id, question, answerType, shortAnswer }) => (
          <div id="form-container" key={id} style={questionStyles}>
            <form style={formStyles}>
              <label style={labelStyles} htmlFor={`question-${id}`}>
                Question
              </label>
              <input
                style={inputStyles}
                type="text"
                id={`question-${id}`}
                className="pdf-element"
                value={question}
                onChange={(e) =>
                  handleQuestionChange(id, "question", e.target.value)
                }
                placeholder="What do you want to ask?"
              />
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
                  className="pdf-element"
                  value={shortAnswer}
                  onChange={(e) =>
                    handleQuestionChange(id, "shortAnswer", e.target.value)
                  }
                  placeholder="Answer"
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
                    fill={colors.primary} 
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
      </div>
    </div>
  );
};