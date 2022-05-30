import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";
import Examples from "./Examples";

export default function Meaning(props) {
  console.log(props.meaning.definitions[0].synonyms);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>

      {props.meaning.definitions.map(function(definition, index) {
        return (
          <div key={index}>
            <p>
              {definition.definition}
              <br />

              <Examples example={definition.example} />
            </p>
            <Synonyms synonyms={props.meaning.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
