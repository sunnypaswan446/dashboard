import ContentArea from "../../Components/ContentArea";
import { Outlet } from "react-router-dom";

const index = () => {
  return (
    <>
      <ContentArea />
      <Outlet />
    </>
  );
};

export default index;
