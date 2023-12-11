import "./App.css";
import logo from "./logo.svg";
import TodoWrapper from "./components/TodoWrapper";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="App-header">
          <a
            href="https://brilliant-meerkat-d49135.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={logo} className="logo" alt="Header Logo" />
          </a>
        </div>
        <TodoWrapper />
        <footer className="mt-5">
          Open-sourse project,{" "}
          <a
            href="https://github.com/sophxmia/react-dictionary-app"
            target="_blank"
            rel="noreferrer"
            title="GitHub link"
          >
            hosted on GitHub
          </a>
          , written by{" "}
          <a
            href="https://brilliant-meerkat-d49135.netlify.app/"
            target="_blank"
            rel="noreferrer"
            title="Netlify link to the portfolio"
          >
            Sofiia Maliarenko
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
