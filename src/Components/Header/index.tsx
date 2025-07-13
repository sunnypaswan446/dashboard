import { Link } from "react-router-dom";
import "./_header.scss";
import { useState } from "react";
const index = ({ data }) => {
  const [profile, showProfile] = useState(false);
  const login = data;
  const handleClick = () => {
    showProfile((prevState) => !prevState);
  };
  return (
    <>
      <header className="nav">
        <nav
          className={`nav__cont ${login ? "" : "container nav__cont--login"})`}
        >
          {login && (
            <Link to="/" className="aside__logo">
              <img
                src="../images/ssd-logo.svg"
                alt="Logo"
                className="aside__ssdLogo"
              />
            </Link>
          )}
          <div className="nav__inner">
            {!login && (
              <div className="nav__log">
                <img
                  src="../images/logo-color.svg"
                  alt="Logo"
                  className="nav__ssdLogo"
                />
              </div>
            )}

            {login && (
              <div className="nav__left">
                <h4 className="nav__userName">Hello, George!</h4>
              </div>
            )}
            <div className="nav__right">
              {login && (
                <div className="nav__srch">
                  <div className="nav__srchIcon">
                    <img
                      src="../images/search.svg"
                      alt="Search"
                      className="nav__img"
                    />
                  </div>
                  {/* <input type="search" name="Search" placeholder="Search" id="searchHeader" className="text__med  nav__srchInput"> */}
                </div>
              )}
              <div className="nav__icons">
                {login && (
                  <div className="nav__notify">
                    <img
                      src="../images/notify.svg"
                      alt="Notification"
                      className="nav__notifyIcon"
                    />
                  </div>
                )}
                <div className="nav__cart">
                  <img
                    src="../images/cart.svg"
                    alt="Cart"
                    className="nav__cartIcon"
                  />
                  <span className="text__small nav__cartItem">0</span>
                </div>
                <div className="nav__user" onClick={handleClick}>
                  <img
                    src={
                      login ? "../images/profile.png" : "../images/profile.svg"
                    }
                    alt="User Profile"
                    className="nav__userProf"
                  />
                </div>
              </div>
            </div>
          </div>
          {profile && (
            <div className="profi profi--show">
              <ul className="profi__wrap">
                <li className="profi__item">
                  <a
                    href="../billing-page/my-detail.php"
                    className="profi__link text__base"
                  >
                    My Profile
                  </a>
                </li>
                <li className="profi__item">
                  <a
                    href="../billing-page/payment-method.php"
                    className="profi__link text__base"
                  >
                    Payment methods
                  </a>
                </li>
                <li className="profi__item">
                  <a
                    href="../billing-page/email-history.php"
                    className="profi__link text__base"
                  >
                    Email History
                  </a>
                </li>
                <li className="profi__item">
                  <a
                    href="../changePasswordScreen/password.php"
                    className="profi__link text__base"
                  >
                    Change Password
                  </a>
                </li>
                <li className="profi__item">
                  <a
                    href="../changePasswordScreen/two-factor-authentication.php"
                    className="profi__link text__base"
                  >
                    Security Settings
                  </a>
                </li>
                <li className="profi__item">
                  <a href="../../index.php" className="profi__link text__base">
                    Log Out
                  </a>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default index;
