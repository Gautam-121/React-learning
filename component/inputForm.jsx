import "./inputForm.css";

const InputForm = ({id , handleInput , label , errorMessage, ...inputProps}) => {
  return (
    <div className="inputForm">
        <label htmlFor={id}>{label}</label>
      <input {...inputProps} id={id} onChange={handleInput}/>
      <span>{errorMessage}</span>
    </div>
  );
};

export default InputForm;
