import React, { useState } from "react";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  function search(event) {
    event.preventDefault();
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionaty">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleKeyword}></input>
      </form>
    </div>
  );
}
