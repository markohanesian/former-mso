import "./App.css";
import QuestionForm from "./components/QuestionForm";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "32px",
        }}
        className="main-content"
        id="screen"
      >
        <QuestionForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
