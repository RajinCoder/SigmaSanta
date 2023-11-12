import React from "react";

interface Props {
  name: string 
}

const Button = ({name}: Props) => {
  return (
    <button id="SigBut">
      {name} 
      </button>
  )

};

export default Button;
