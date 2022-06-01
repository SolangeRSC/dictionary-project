import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <button type="button" class="btn btn-outline-warning">
        <a
          href={props.phonetic.audio}
          target="_blank"
          rel="noopener noreferrer"
        >
          Listen
        </a>
      </button>
      <br />
      {props.phonetic.text}
    </div>
  );
}
