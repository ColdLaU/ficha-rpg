import React from "react";

const InfoInputField = (props) => {
  return (
    <div className="info-group">
      <input type="text" placeholder={props.placeholder} />
      <label>{props.name}</label>
    </div>
  );
};

export default InfoInputField;
