import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [results, setResults] = useState({});
  function search(event) {
    event.preventDefault();
  }
  function handleResponse(response) {
    setResults(response.data[0]);
    console.log(response.data[0].meanings[0].definitions[0].definition);
  }
  let urlApi = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
  axios.get(urlApi).then(handleResponse);

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionaty">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeyword}></input>
      </form>
      <Results results={results} />
    </div>
  );
}
