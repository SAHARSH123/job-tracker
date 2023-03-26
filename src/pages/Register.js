import { useState, useEffect } from "react";
import { Logo } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";

const intitalState = {
  name: "",
  email: "",
  passWord: "",
  isMember: true,
};

const Register = () => {
  const [formData, setformData] = useState(intitalState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  const onChange = (e) => {
    const key = e.target.id;
    const value = e.target.value;

    const newFormData = { ...formData, [key]: value };
    setformData(newFormData);
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={handleSubmit}>
        <Logo />
        <h3>Login</h3>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            value={formData?.name}
            onChange={onChange}
            id="name"
            className="form-input"
          />
        </div>
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
    </Wrapper>
  );
};

export default Register;
