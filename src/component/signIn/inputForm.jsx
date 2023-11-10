import { useState } from "react";
import "./inputForm.css";

const InputForm = ({ id, handleInput, label, errorMessage, ...inputProps }) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div className="inputForm">
      <label htmlFor={id}>{label}</label>
      <input
        {...inputProps}
        id={id}
        onChange={handleInput}
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default InputForm;
