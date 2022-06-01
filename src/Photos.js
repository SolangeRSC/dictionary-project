import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos">
        {props.photos.map(function(photo, index) {
          return (
            <div className="row">
              <div className="col-3" key={index}>
                <img
                  src={photo.src.landscape}
                  className="
                img-fluid"
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
