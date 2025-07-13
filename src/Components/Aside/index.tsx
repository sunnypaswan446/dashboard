import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import {
  asideSubMenus,
  availCredit,
  addButton,
  editButton,
} from "../../mock-data/data";
import Accrodion from "../AccordionSubmenus/";
import Button from "../Button";
import AccordionSubMenus from "../../Components/AccordionSubmenus";

interface props {
  data: menu[];
}

const Index: React.FC<props> = ({ data, asideData }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0); // Set initial selectedIndex to 0
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const menuItemsRef = useRef<(HTMLLIElement | null)[]>([]);

  // This hook is triggered when selectedIndex changes (i.e., when a menu item is clicked).
  // useEffect(() => {
  //   if (selectedIndex !== null && sliderRef.current && menuItemsRef.current) {
  //     const selectedItem = menuItemsRef.current[selectedIndex];

  //     if (selectedItem) {
  //       // Set the initial position and transition immediately
  //       sliderRef.current.style.transition = "top 0.3s ease, height 0.3s ease";
  //       sliderRef.current.style.top = `${selectedItem.offsetTop}px`;
  //       sliderRef.current.style.height = `${selectedItem.offsetHeight}px`;
  //     }
  //   }
  // }, [selectedIndex]); // Re-run this effect when the selectedIndex changes

  const handleItemClick = (index: number) => {
    setSelectedIndex(index); // Update selected menu index
  };

  // // Set the initial position of the slider after the component mounts.
  // useEffect(() => {
  //   if (selectedIndex === 0 && sliderRef.current && menuItemsRef.current) {
  //     const initialItem = menuItemsRef.current[0]; // Default to the first menu item
  //     if (initialItem) {
  //       sliderRef.current.style.top = `${initialItem.offsetTop}px`;
  //       sliderRef.current.style.height = `${initialItem.offsetHeight}px`;
  //     }
  //   }
  // }, []); // Only run this effect on mount

  return (
    <div className="aside__cont">
      <aside className="aside">
        <div className="menus">
          <ul className="menus__items">
            {/* The slider element */}
            {/* <span className="menus__bg" ref={sliderRef}></span> */}
            {data &&
              data.map((menuItem, index) => {
                const { menuText, menuIcon } = menuItem;
                const { path, altText, width, height } = menuIcon;
                return (
                  <li
                    className={`menus__item ${
                      selectedIndex === index ? "menus__item--select" : ""
                    }`}
                    key={index}
                    ref={(el) => {
                      if (menuItemsRef.current) {
                        menuItemsRef.current[index] = el!;
                      }
                    }}
                    onClick={() => handleItemClick(index)} // Handle click
                  >
                    <NavLink
                      to={menuItem?.menuLink}
                      className={({ isActive }) =>
                        isActive
                          ? "menus__links menus__links--select"
                          : "menus__links"
                      }
                    >
                      <div className="menus__img">
                        <img
                          src={path}
                          alt={altText}
                          className="menus__icon"
                          width={width}
                          height={height}
                        />
                      </div>
                      <p className="text__small menus__label">{menuText}</p>
                    </NavLink>
                  </li>
                );
              })}
          </ul>
        </div>
      </aside>

      <div className="layout__aside layout__aside-wrap aside__menus">
        {asideData &&
          asideData.map((menuWrap) => {
            return <AccordionSubMenus data={menuWrap} />;
          })}
      </div>
    </div>
  );
};

export default Index;
