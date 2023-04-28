import React, { useState } from "react";
import login from "../images/login.svg";
import { useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import Telegram from "../component/Telegram";

const LoginForm = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isloding, setisloding] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setisloding(true);
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
        setisloding(false);
      } else if (response.status === 201) {
        setisloding(false);
        navigate("/course");
      } else if (response.status === 404) {
        setisloding(false);
        window.alert("user Not Found");
      } else {
        setisloding(false);
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
          <img src={login} alt="Login Image" className="loginImg" />
          <form onSubmit={handleSubmit} className="form_container">
            <input
              type="text"
              placeholder="user Id"
              name="phone"
              required
              className="login_input"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            <input
              type="password"
              name="password"
              required
              placeholder="Password"
              className="login_input"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <p className={isloding ? "showLoading" : "hideLoading"}>
              Please wait...
            </p>
            <input type="submit" value="login" className="body_btn" />
          </form>
        </div>
      </div>
      {/* </section> */}
      <Telegram />
    </>
  );
};

export default LoginForm;
