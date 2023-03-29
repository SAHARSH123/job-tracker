import { useState } from "react";
import { Logo, FormRow } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { loginUser, registerUser } from "../features/user/userSlice";

const intitalState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [formData, setformData] = useState(intitalState);
  const dispatch = useDispatch();
  const { isLoading, user } = useSelector((store) => store.user);

  const handleSubmit = (e) => {
    const { email, password, isMember, name } = formData;
    e.preventDefault();
    if (!email || !password || (!isMember && !name)) {
      toast.error("Please fill out All Fields", {});
      return;
    }
    if (isMember) {
      dispatch(loginUser({ email: email, password: password }));
      return;
    }
    dispatch(registerUser({ name, email, password }));
  };

  const toggle = () => {
    setformData((prevData) => ({ ...prevData, isMember: !prevData.isMember }));
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
        <h3>{formData?.isMember ? "Login" : "Register"}</h3>
        {!formData?.isMember && (
          <FormRow
            type="text"
            id="name"
            value={formData?.name}
            handleChange={onChange}
          />
        )}

        <FormRow
          type="email"
          id="email"
          value={formData?.email}
          handleChange={onChange}
        />

        <FormRow
          type="password"
          id="password"
          value={formData?.password}
          handleChange={onChange}
        />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          {formData.isMember ? "Not a member yet?" : "Already a member?"}

          <button type="button" onClick={toggle} className="member-btn">
            {formData.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
