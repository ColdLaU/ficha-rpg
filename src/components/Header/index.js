import React from "react";

import InfoInputField from "../InfoInputField";

import "./styles.css";

const Header = () => {
  return (
    <div className="header">
      <div className="info">
        <InfoInputField name="Race" placeholder="Human" />
        <InfoInputField name="Alignment" placeholder="Chaotic Good" />
        <InfoInputField name="Experience Points" placeholder="1000" />
      </div>
    </div>
  );
};

export default Header;
