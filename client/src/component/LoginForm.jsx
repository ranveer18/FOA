import React, { useState } from "react";
import login from "../images/login.svg";
import { useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/v1/login/student", {
        method: "POST",
        credentials: "include",
        mode: "cors",
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone,
          password,
        }),
      });
      const data = response.json();
      if (response.status === 400 || !data) {
        window.alert("invalid credentials");
      } else if (response.status === 201) {
        navigate("/course");
      } else {
        window.alert("invalid credentials");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {/* <section className="body_container"> */}
      <div className="Login_container">
        <div className="Login_form">
          <div className="login_head">
            <Link to="/">
              <div className="login_nav__close">{/* <MdClose /> */}</div>
            </Link>
            <h1 className="body_heading">Login</h1>
            <Link to="/">
              <div className="login_nav__close">
                <MdClose />
              </div>
            </Link>
          </div>
          <img src={login} alt="img" className="loginImg" />
          <form onSubmit={handleSubmit} className="form_container">
            <input
              type="text"
              placeholder="user Id"
              name="phone"
              className="login_input"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="login_input"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input type="submit" value="login" className="body_btn" />
          </form>
        </div>
      </div>
      {/* </section> */}
    </>
  );
};

export default LoginForm;
