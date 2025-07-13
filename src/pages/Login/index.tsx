import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";
import "./login.scss";
import { FormProps } from "../../types/type";
import InputField from "../../Components/InputField";
import { formData } from "../../mock-data/data";
import { useState } from "react";

const Index: React.FC<FormProps> = () => {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    e.preventDefault();
    const { name, value } = e.target;

    setFormValue((prevState) => {
      const updatedState = { ...prevState, [name]: value };
      console.log("Updated State:", updatedState); // Log the updated state
      return updatedState;
    });
    console.log(formValue);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Header data={false} />
      <div className="login">
        <div className="login__cont">
          <div className="login__inner">
            <div className="login__logo">
              <img
                src="../images/logo-color.svg"
                alt="logo"
                className="login__icon"
              />
            </div>
            <h1 className="login__heading">Login</h1>
            <p className="textbase login__desc">
              Login to enjoy the feature of Revolutie
            </p>
            <form action="" className="login__form">
              <label
                htmlFor="email"
                className="text__base detail__label login__email"
              >
                <span className="detail__text">Email or Phone number</span>
                <input
                  className=" text__base detail__input "
                  type="text"
                  name="email"
                  placeholder="Enter your email or phone number "
                  defaultValue=""
                  id="email"
                  value={formValue.email}
                  onChange={handleChange}
                />
              </label>
              <label
                htmlFor="password"
                className="text__base detail__label login__pswrd"
              >
                <span className="detail__text">Password</span>
                <div className="detail__field detail__field--pswrd">
                  <input
                    className=" text__base detail__input detail__input--pswrd"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    defaultValue=""
                    id="password"
                    value={formValue.password}
                    onChange={handleChange}
                  />
                  <div className="detail__icon">
                    <img
                      src={
                        showPassword
                          ? "../images/pswrd-show.svg"
                          : "../images/pswrd-hide.svg"
                      }
                      alt=""
                      className="detail__img"
                      onClick={handleShowPassword}
                    />
                    <img
                      src="../images/pswrd-show.svg"
                      alt=""
                      className="detail__img detail__img--show"
                    />
                  </div>
                </div>
              </label>
              <div className="login__bottom">
                <div className="login__rmber">
                  <label className="checkbox">
                    {/* <input
                      defaultChecked="checked"
                      type="checkbox"
                      className="checkbox__input"
                    /> */}
                    <div className="checkbox__mark">
                      <img
                        src="../images/check.svg"
                        className="checkbox__markImg"
                        alt=""
                      />
                    </div>
                    <span className="text__med login__label"> Remember Me</span>
                  </label>
                </div>
                <a
                  href="./forget-password.php"
                  className="text__med login__forget"
                >
                  Forget password
                </a>
              </div>
              <button className="btn btn--solid login__btn">Login</button>
            </form>
            <p className="text__base login__signup">
              Don't have an account yet?{" "}
              <Link to="/signup" className="login__link">
                Sign up now
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;
