import "./App.css";
import React from "react";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary Project</header>
        <Dictionary />
        <footer>
          Coded by Solange Custódio and open-sourced on{" "}
          <a href="https://github.com/SolangeRSC/dictionary-project">GitHub</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
