import "./inputForm.css";

const InputForm = ({id , handleInput , label , ...inputProps}) => {
  return (
    <div className="inputForm">
        <label htmlFor={id}>{label}</label>
      <input {...inputProps} id={id} onChange={handleInput}/>
    </div>
  );
};

export default InputForm;
