import React from "react";

export default function Examples(props) {
  if (props.example) {
    return (
      <div className="Examples">
        <strong>Examples:</strong> <em>{props.example}</em>
      </div>
    );
  } else {
    return null;
  }
}
