import { useState } from "react";
import InputForm from "./inputForm.jsx";
import "./signIn.css";
import { userInput } from "../../constant.js";

const SignIn = () => {
  const [values, setValues] = useState({
    userName: "",
    email: "",
    birthday: "",
    password: "",
    comfirmPassword: "",
  });

  const inputs = userInput(values);

  const submitHandler = (e) => {
    e.preventDefault();
    setValues({
      userName: "",
      email: "",
      birthday: "",
      password: "",
      comfirmPassword: "",
    });
  };

  const handleInput = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="appForm">
      <h1>Register</h1>
      <form onSubmit={submitHandler}>
        {inputs.map((input) => (
          <InputForm
            key={input.id}
            {...input}
            value={values[input.name]}
            handleInput={handleInput}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SignIn;
