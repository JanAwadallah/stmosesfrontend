import { useEffect, useState } from "react";
import FormInput from "./FormInput";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../features/auth/authSlice";
import Spinner from "./Spinner";

const LoginForm = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isError, isSuccess, message, isLoading } = useSelector(
    (state) => state.auth
  );
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(values));
  };
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
  
    if (isSuccess || user) {
      navigate("/");
    }
    dispatch(reset());
  }, [isError, isLoading, message, dispatch, navigate, isSuccess, user]);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
    if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="container mt-3" style={{ maxWidth: "700px" }}>
      <form onSubmit={handleSubmit} id="form">
        <h1 style={{ fontFamily: "cursive", fontWeight: "700" }}>
          <FaSignInAlt /> Log In
        </h1>
        <p style={{ textAlign: "center" }}>
          Please login. Not a member yet! No problem, just{" "}
          {<Link to="/register">Register</Link>}
        </p>
       
          <FormInput
      name= "email"
      type= "email"
      placeholder="Email"
      errorMessage="It should be a valid email address!"
      label= "Email"
      required
            value={values["email"]}
            onChange={onChange}
          />
                  <FormInput
      name= "password"
      type= "password"
      placeholder="Password"
      label= "Password"
      required
            onChange={onChange}
          />

        <button className="btn btn-info p-1 m-1 w-100">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
