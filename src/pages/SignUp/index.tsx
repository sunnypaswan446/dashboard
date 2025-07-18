import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";
import InputField from "../../Components/InputField";
import { formData } from "../../mock-data/data";

const Index = () => {
  return (
    <>
      <Header data={false} />
      <div className="signup">
        <div className="signup__cont">
          <div className="signup__inner">
            <div className="signup__logo">
              <img
                src={formData.logo.src}
                alt={formData.logo.alt}
                className="signup__icon"
              />
            </div>
            <h1 className="signup__heading">{formData.heading}</h1>
            <p className="textbase signup__desc">{formData.description}</p>

            <div className="signup__wrap">
              <form action="" className="signup__form">
                {formData.sections.map((section, index) => (
                  <div className="signup__info" key={index}>
                    <h5 className="signup__title">{section.title}</h5>
                    <div className="signup__fields">
                      {section.fields.map((field, fieldIndex) => (
                        <InputField
                          key={fieldIndex}
                          type={field.type}
                          id={field.id}
                          name={field.name}
                          label={field.label}
                          placeholder={field.placeholder}
                          options={field.options}
                        />
                      ))}
                    </div>
                  </div>
                ))}

                <div className="signup__bottom">
                  <div className="signup__terms">
                    <label className="checkbox">
                      <input
                        defaultChecked="checked"
                        type="checkbox"
                        className="checkbox__input"
                      />
                      <div className="checkbox__mark">
                        <img
                          src="../images/check.svg"
                          className="checkbox__markImg"
                          alt="check"
                        />
                      </div>
                      <span className="text__med signup__label">
                        I have read and agreed to the{" "}
                        <a href={formData.terms.link} className="signup__link">
                          Terms of Service
                        </a>
                      </span>
                    </label>
                  </div>
                </div>

                <button className="btn btn--solid signup__btn">
                  {formData.submitText}
                </button>

                <p className="text__base signup__login">
                  {formData.loginText}{" "}
                  <Link to={formData.loginLink} className="signup__link">
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;
