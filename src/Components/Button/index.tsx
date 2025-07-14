import { Link } from "react-router-dom";
import { button } from "../../types/type";
interface props {
  data: button;
  style: string;
}
let path: string;
let buttonStyl: string;
const index: React.FC<props> = ({ data, style }) => {
  const { buttonText, buttonLink, hasIcon, buttonIcon } = data;
  switch (buttonIcon?.name) {
    case "add":
      path = "/images/add-icon.svg";
      break;

    case "edit":
      path = "/images/edit-icon.svg";
      break;
    case "right-arrow":
      path = "/images/right-arrow.svg";
      break;
  }

  switch (style) {
    case "outline":
      buttonStyl = "btn--outline";
      break;
    case "solid":
      buttonStyl = "btn--solid";
      break;
    case "background":
      buttonStyl = "btn--bg";
      break;
  }

  return (
    <>
      <Link to={buttonLink} className={buttonStyl}>
        {hasIcon && (
          <img
            src={path}
            width={buttonIcon?.width}
            height={buttonIcon?.height}
            alt={buttonIcon?.altText}
          />
        )}
        <span>{buttonText}</span>
      </Link>
    </>
  );
};

export default index;
