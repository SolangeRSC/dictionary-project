import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  function search(event) {
    event.preventDefault();
  }
  function handleResponse(response) {
    console.log(response);
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
    </div>
  );
}
