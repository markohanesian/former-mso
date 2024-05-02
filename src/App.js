import './App.css';
import QuestionForm from './components/QuestionForm';
import Navbar from './components/NavBar';

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
      >
        <QuestionForm />
      </main>
    </div>
  );
}

export default App;
