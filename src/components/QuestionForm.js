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
  };

  return (
    <div>
      {questions.map(({ id, question, answerType, shortAnswer }) => (
        <div key={id}>
          <form>
            <div style={formStyles}>
              <label htmlFor={`question-${id}`}>Question</label>
              <input
                type="text"
                id={`question-${id}`}
                value={question}
                onChange={(e) =>
                  handleQuestionChange(id, "question", e.target.value)
                }
                placeholder="What do you want to ask?"
              />
            </div>
            <div style={formStyles}>
              <label htmlFor={`answerType-${id}`}>Answer</label>
              <select
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
            <div style={formStyles}>
              {/* <label htmlFor={`shortAnswer-${id}`}>Short Answer Text</label> */}
              <input
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
      <button onClick={addQuestion}>Add Question</button>
      <button onClick={handleSaveAndShare}>Save & Share</button>
    </div>
  );
}
