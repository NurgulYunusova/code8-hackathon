import { loginSchema } from "../../validations";
import "./login.scss";
import { useFormik } from "formik";
import image from "../../../assets/images/login.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const [isCheckboxClicked, setIsCheckboxClicked] = useState(false);
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async ({ email, password }) => {
      if (email === "admin@gmail.com" && password === "admin123") {
        navigate("/admin");
      } else {
        console.log("Incorrect email or password");
      }
    },
  });

  return (
    <>
      <div className="login">
        <div className="loginContainer">
          <div className="form">
            <div className="formContainer">
              <h3>Login</h3>

              <form onSubmit={handleSubmit}>
                <label htmlFor="email">E-mail</label> <br />
                <div className="input">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M2.66665 2.66663H13.3333C14.0666 2.66663 14.6666 3.26663 14.6666 3.99996V12C14.6666 12.7333 14.0666 13.3333 13.3333 13.3333H2.66665C1.93331 13.3333 1.33331 12.7333 1.33331 12V3.99996C1.33331 3.26663 1.93331 2.66663 2.66665 2.66663Z"
                        stroke="#A2A2A6"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.6666 4L7.99998 8.66667L1.33331 4"
                        stroke="#A2A2A6"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    onChange={handleChange}
                    value={values.email}
                  />
                </div>
                <p
                  style={{ color: "red", fontSize: "12px", marginTop: "10px" }}
                >
                  {errors?.email}
                </p>
                <label htmlFor="email">Password</label> <br />
                <div className="input">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M12.6667 7.33337H3.33333C2.59695 7.33337 2 7.93033 2 8.66671V13.3334C2 14.0698 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0698 14 13.3334V8.66671C14 7.93033 13.403 7.33337 12.6667 7.33337Z"
                        stroke="#828285"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.66669 7.33337V4.66671C4.66669 3.78265 5.01788 2.93481 5.643 2.30968C6.26812 1.68456 7.11597 1.33337 8.00002 1.33337C8.88408 1.33337 9.73192 1.68456 10.357 2.30968C10.9822 2.93481 11.3334 3.78265 11.3334 4.66671V7.33337"
                        stroke="#828285"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Your Password"
                    onChange={handleChange}
                    value={values.password}
                  />
                </div>
                <p
                  style={{ color: "red", fontSize: "12px", marginTop: "10px" }}
                >
                  {errors?.password}
                </p>
                <div className="infos">
                  <div
                    className="checkbox"
                    onClick={() => setIsCheckboxClicked(!isCheckboxClicked)}
                  >
                    {isCheckboxClicked ? (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <rect
                            x="1"
                            y="1"
                            width="14"
                            height="14"
                            rx="3"
                            fill="white"
                          />
                          <path
                            d="M4.5 8.5L6.5 10.5L11.5 5.5"
                            stroke="#667085"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <rect
                            x="1"
                            y="1"
                            width="14"
                            height="14"
                            rx="3"
                            stroke="#667085"
                            strokeWidth="2"
                          />
                        </svg>
                      </>
                    ) : (
                      <div className="checkboxIcon"></div>
                    )}
                    <p>Remember me</p>
                  </div>

                  <p className="forgotPasswordLink">
                    <a href="#">Forgot Password?</a>
                  </p>
                </div>
                <button type="submit">Login</button>
              </form>
            </div>
          </div>

          <div className="image">
            <img src={image} alt="Login Page Image" />
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
