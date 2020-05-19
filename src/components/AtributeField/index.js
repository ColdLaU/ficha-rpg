import React from "react";

const AtributeField = (props) => {
  return (
    <div className="atributo">
      <span>{props.label}</span>
      <input type="number" placeholder="0" />
    </div>
  );
};

export default AtributeField;
