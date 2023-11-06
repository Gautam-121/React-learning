import { useState } from "react";
import InputForm from "./inputForm";
import "./appForm.css";

const SignIn = () => {
  const [values, setValues] = useState({
    userName: "",
    email: "",
    birthday: "",
    password: "",
    comfirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "userName",
      type: "text",
      placeholder: "UserName",
      label: "Username",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
    },
    {
      id: 5,
      name: "comfirmPassword",
      type: "password",
      placeholder: "Comfirm Password",
      label: "Comfirm Password",
    },
  ];

  const submitHandler = (e) => {
    e.preventDefault();
    setValues({
    userName: "",
    email: "",
    birthday: "",
    password: "",
    comfirmPassword: "",
    })
  };

  const handleInput = (e)=>{
    setValues({...values , [e.target.name] : e.target.value})
  }

  console.log(values)

  return (
    <div className="appForm">
       <h1>Register</h1>
      <form onSubmit={submitHandler}>
        {inputs.map((input) => (
          <InputForm key={input.id} {...input} value={values[input.name]} handleInput={handleInput} />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SignIn;
