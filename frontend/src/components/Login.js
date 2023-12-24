import React, { useState } from "react";
import axios from "axios";
import "../index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorUsername, setErrorUsername] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const checkLogin = (e) => {
    e.preventDefault();
    const isEmail = username.includes("@");

    axios
      .post("http://localhost:3001/user/login", {
        [isEmail ? "email" : "username"]: username,
        password,
      })
      .then((response) => {
        console.log(response);
        const result = response.data;
        const { status, message, role } = result;

        console.log("Status:", status);
        console.log("Message:", message);
        console.log("Role:", role);

        if (status === "SUCCESS") {
          setErrorUsername(false);
          setErrorPassword(false);
          localStorage.setItem("token", response.data.token);

          if (role === "touragent") {
            console.log("Navigating to homescreen");
            navigate("/viewtour");
          } else if (role === "customer") {
            console.log("Navigating to homescreen");
            navigate("/viewtour");
          } else {
            console.log("Navigating to customerscreen");
            navigate("/customer");
          }
        } else {
          setErrorUsername(true);
          setErrorPassword(true);
          console.log(message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <section className="vh-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black">
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Login
                      </p>

                      <form className="mx-1 mx-md-4">
                        <div className={`d-flex flex-row align-items-center mb-4 ${errorUsername ? 'error' : ''}`}>
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example3c"
                              className={`form-control ${errorUsername ? 'is-invalid' : ''}`}
                              value={username}
                              onChange={(e) => setUsername(e.target.value)}
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example3c"
                            >
                              Your Email or Username
                            </label>
                            {errorUsername && <div className="invalid-feedback">Invalid username or email.</div>}
                          </div>
                        </div>

                        <div className={`d-flex flex-row align-items-center mb-4 ${errorPassword ? 'error' : ''}`}>
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4c"
                              className={`form-control ${errorPassword ? 'is-invalid' : ''}`}
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example4c"
                            >
                              Password
                            </label>
                            {errorPassword && <div className="invalid-feedback">Invalid password.</div>}
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="button"
                            className="btn btn-primary btn-lg"
                            onClick={checkLogin}
                          >
                            Login
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
