import { useState } from "react";
import { NavLink } from "react-router-dom";
interface props {
  data: accordionMenus;
}
const index: React.FC<props> = ({ data }) => {
  const [accordion, showAccordion] = useState(true);
  const handleClick = () => {
    showAccordion((prevState) => !prevState);
  };
  const { headerText, accordionInfo, type } = data;
  // const { path, altText, width, height } = headerIcon;
  return (
    <>
      <div className="accord info">
        {data?.headerText && (
          <div className="accord__head" onClick={handleClick}>
            <div className="accord__logo">
              <img
                src={data?.headerIcon?.path}
                alt={data?.headerIcon?.altText}
                className="accord__icon"
                width={data?.headerIcon?.width}
                height={data?.headerIcon?.height}
              />
            </div>
            <p className="text__base accord__title">{headerText}</p>
            <div className="accord__arrow">
              <img
                src="../images/arrow-up.svg"
                alt={data?.headerIcon?.altText}
                className={`accord__icon ${accordion ? "" : "rotate"}`}
                width={data?.headerIcon?.width}
                height={data?.headerIcon?.height}
              />
            </div>
          </div>
        )}

        <ul className={`accord__items ${accordion ? "" : "hide"}`}>
          {accordionInfo.map((labelItem, index) => {
            const { labelText, labelValue } = labelItem;
            if (type === "info") {
              return (
                <li className="info__item" key={index}>
                  <span className="text__small info__label">{labelText}</span>
                  <p className="text__med info__text">{labelValue}</p>
                </li>
              );
            } else {
              return (
                <li className="layout__itm">
                  <NavLink
                    to={labelItem?.labelLink}
                    className={({ isActive }) =>
                      isActive
                        ? "accord__item accord__item--active"
                        : "accord__item"
                    }
                  >
                    {labelText}
                  </NavLink>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </>
  );
};

export default index;
