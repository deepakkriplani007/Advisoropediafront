import React, { useState } from "react";
import "./Form.css";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
const Signup = ({ setToken, host }) => {
  const navigate = useNavigate();

  const [submitbutton, setSubmitbutton] = useState(false);
  const [value, setValue] = useState({
    Username: "",
    email: "",
    pass: "",
    confirmpass: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const handleOnSubmit = async () => {
    if (!value.Username || !value.confirmpass || !value.email || !value.pass) {
      setErrorMsg("Please enter all fields");
      setTimeout(() => {
        setErrorMsg("");
      }, 1000);
      return;
    }

    if (value.pass.length < 5) {
      setErrorMsg("Please enter password greater then 5 characters");
      setTimeout(() => {
        setErrorMsg("");
      }, 1000);
      return;
    }
    if (value.pass !== value.confirmpass) {
      setErrorMsg("Please enter same password and confirm password");
      setTimeout(() => {
        setErrorMsg("");
      }, 1000);
      return;
    }
    setErrorMsg("");
    // console.log(value);
    // setSubmitbutton(true);
    const formData = {
      name: value.Username,
      email: value.email,
      password: value.pass,
      passwordconfirm: value.confirmpass,
    };

    try {
      setErrorMsg("Wait..");
      const response = await Axios.post(`${host}/createuser`, formData);
      console.log(response.data.token);
      localStorage.setItem("token", response.data.token);
      setTimeout(() => {
        setToken(null);
        localStorage.removeItem("token");
      }, 2100000);
      setToken(response.data.token);
      setSubmitbutton(false);
      setTimeout(() => {
        setErrorMsg("");
        navigate("/");
      }, 100);
    } catch (err) {
      setErrorMsg(err.message);
      setTimeout(() => {
        setErrorMsg("");
      }, 2000);
      setSubmitbutton(false);
    }
    // Axios.post(`http://localhost:5000/api/auth/createuser`, formData)
    //   .then((res) => {
    //     setErrorMsg("success");
    //     setToken(res.token);

    //     localStorage.setItem("token", response.data.token);
    //     setTimeout(() => {
    //       setToken(null);
    //       localStorage.removeItem("token");
    //     }, 2100000);
    //     setTimeout(() => {
    //       setErrorMsg("");
    //       navigate("/");
    //     }, 1000);
    //   })
    //   .catch((err) => {
    //     console.log(value, formData);
    //     setErrorMsg(err.message);
    //     setTimeout(() => {
    //       setErrorMsg("");
    //     }, 3000);
    //   });
  };

  return (
    <div className="bg-black flex flex-col align-center justify-center ">
      <div className="h-1/4"></div>

      <div className="flex justify-center">
        <div className=" flex justify-center h-fit card  ">
          <div className="card2 ">
            <div className="form h-fit ">
              <p id="heading" className="text-center">
                SignUp
              </p>
              <div className="field">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="input-icon"
                >
                  <path
                    fill="#ffffff"
                    d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
                  />
                </svg>
                <input
                  type="text"
                  className="input-field"
                  placeholder="Username"
                  autoComplete="off"
                  onChange={(event) =>
                    setValue((prev) => ({
                      ...prev,
                      Username: event.target.value,
                    }))
                  }
                />
              </div>
              <div className="field">
                <svg
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  height="16"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  className="input-icon"
                >
                  <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
                </svg>
                <input
                  type="text"
                  className="input-field"
                  placeholder="Email"
                  autoComplete="off"
                  onChange={(event) =>
                    setValue((prev) => ({
                      ...prev,
                      email: event.target.value,
                    }))
                  }
                />
              </div>
              <div className="field">
                <svg
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  height="16"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  className="input-icon"
                >
                  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
                </svg>
                <input
                  type="password"
                  className="input-field"
                  placeholder="Password"
                  onChange={(event) =>
                    setValue((prev) => ({
                      ...prev,
                      pass: event.target.value,
                    }))
                  }
                />
              </div>
              <div className="field">
                <svg
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  height="16"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  className="input-icon"
                >
                  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
                </svg>
                <input
                  type="text"
                  className="input-field"
                  placeholder="Confirm Password"
                  onChange={(event) =>
                    setValue((prev) => ({
                      ...prev,
                      confirmpass: event.target.value,
                    }))
                  }
                />
              </div>
              <b className="font-bold text-[0.875rem] text-[#ff3300]">
                {errorMsg}
              </b>
              <button
                // disabled={submitbutton}
                onClick={handleOnSubmit}
                className="mt-10 hover:bg-blue-700 button3"
              >
                Sign Up
              </button>
              <p className="font-bold text-white mb-[2rem]">
                I have an account?{" "}
                <span className="text-[#9900FF]">
                  <Link to="/Login">Login</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
