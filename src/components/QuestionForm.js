import React, { useState } from "react";
import { useTheme } from "../theme/ThemeContext";
import Button from "./Button";
import Slide from "@mui/material/Slide";
import Box from "@mui/material/Box";

export default function QuestionForm() {
  const [questions, setQuestions] = useState([
    { id: 1, question: "", answerType: "", shortAnswer: "", show: true },
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
    color: colors.textSecondary,
    fontFamily: "sans-serif",
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "12px",
    textAlign: "left",
    marginBottom: "8px",
  };

  const inputStyles = {
    border: "none",
    borderRadius: "4px",
    padding: "8px",
    fontFamily: "sans-serif",
    fontSize: 16,
    fontWeight: 400,
    textAlign: "left",
    lineHeight: "2rem",
    width: "-webkit-fill-available",
    marginBottom: "16px"
  };

  const selectStyles = {
    border: "1px solid rgba(0, 0, 0, 0.1)",
    borderRadius: "4px",
    padding: "12px 16px",
    appearance: "none",
    width: "-webkit-fill-available",
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
    margin: "12px 0",
    width: "-webkit-fill-available"
  };

  const buttonsContainerStyles = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "transparent",
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
      show: true,
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
    const updatedQuestions = questions.map((question) => 
      question.id === id ? { ...question, show: false } : question
    );
    setQuestions(updatedQuestions);
    setTimeout(() => {
      setQuestions((prevQuestions) =>
        prevQuestions.filter((question) => question.id !== id)
      );
    }, 300);
  };

  return (
    <div>
      <div style={formContainerStyles}>
        {questions.map(({ id, question, answerType, shortAnswer, show }) => (
          <Slide direction="up" in={show} mountOnEnter unmountOnExit key={id}>
            <Box id="form-container" style={questionStyles}>
              <form style={formStyles}>
                <label style={labelStyles} htmlFor={`question-${id}`}>
                  Question
                </label>
                <textarea
                  style={inputStyles}
                  type="text"
                  id={`question-${id}`}
                  className="pdf-element"
                  value={question}
                  onChange={(e) =>
                    handleQuestionChange(id, "question", e.target.value)
                  }
                  placeholder="Add some text"
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
                <div style={answerStyles}>
                  <textarea
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
            </Box>
          </Slide>
        ))}
      </div>
      <div style={buttonsContainerStyles}>
        <Button variant="secondary" onClick={addQuestion}>
          + Add Question
        </Button>
      </div>
    </div>
  );
}