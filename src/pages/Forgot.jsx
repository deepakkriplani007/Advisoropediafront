import React, { useState } from "react";
import "./Form.css";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import { MdKey } from "react-icons/md";
const Forgot = ({ host }) => {
  const navigate = useNavigate();

  const [submitbutton, setSubmitbutton] = useState(false);
  const [value, setValue] = useState({
    token: "",
    email: "",
    pass: "",
    confirmpass: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const handleOnSubmit = async () => {
    if (!value.token || !value.confirmpass || !value.pass) {
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
      password: value.pass,
      passwordconfirm: value.confirmpass,
    };

    try {
      setErrorMsg("wait...");
      const response = await Axios.post(
        `${host}/resetpassword/${value.token}`,
        formData
      );
      setErrorMsg(response.data.message);
      setTimeout(() => {
        setErrorMsg("");
        navigate("/login");
      }, 500);
    } catch (error) {
      setErrorMsg(error.message);
      setTimeout(() => {
        setErrorMsg("");
      }, 2000);
      setSubmitbutton(false);
    }
  };

  return (
    <div className="bg-black flex flex-col align-center justify-center ">
      <div className="h-1/4"></div>

      <div className="flex justify-center">
        <div className=" flex justify-center h-fit card  ">
          <div className="card2 ">
            <div className="form h-fit ">
              <p id="heading" className="text-center">
                Reset Password
              </p>
              <div className="field">
                <div className="input-icon">
                  <MdKey />
                </div>
                <input
                  type="text"
                  className="input-field"
                  placeholder="Enter Token(key)"
                  autoComplete="off"
                  onChange={(event) =>
                    setValue((prev) => ({
                      ...prev,
                      token: event.target.value,
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
                disabled={submitbutton}
                onClick={handleOnSubmit}
                className="mt-10 hover:bg-blue-700 button3"
              >
                Submit
              </button>
              <p className="font-bold text-white mb-[2rem]">
                Go to{" "}
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

export default Forgot;
