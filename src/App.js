import React from 'react';
import "./App.css";
import QuestionForm from "./components/QuestionForm";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import PageTitleInput from "./components/PageTitleInput";
import { ThemeProvider } from './theme/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "32px",
        }}
        className="main-content"
        id="screen"
      >
        <PageTitleInput />
        <QuestionForm />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
