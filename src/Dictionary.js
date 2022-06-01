import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();
    let urlApi = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(urlApi).then(handleResponse);

    let apiKeyPexels = `563492ad6f917000010000017a34695274b64d3685f994091c48fb5b`;
    let urlApiPexels = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    axios
      .get(urlApiPexels, {
        header: { Authorization: `Bearer ${apiKeyPexels}` },
      })
      .then(handlePexelsResponse);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionaty">
      <form onSubmit={search} className="searchBar form-label ">
        <input type="search" onChange={handleKeyword}></input>
      </form>

      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
