import React from "react";
import Button from "./Button";

const JoinDuo = () => {
  return (
    <div className="d-flex align-items-center">
      <input
        type="text"
        className="form-control"
        maxLength={4}
        style={{
          height: "100%",
          width: "auto",
          marginRight: "10px",
          borderColor: "#00873E",
          fontSize: "150%",
        }}
        placeholder="Enter Code..."
      />

      <Button name="Join" pageName="Loading" />
    </div>
  );
};

export default JoinDuo;
