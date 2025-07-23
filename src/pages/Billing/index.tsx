import Aside from "../../Components/Aside";
import Header from "../../Components/Header";
import ContentArea from "../../Components/ContentArea";
import { menus, billingMenu } from "../../mock-data/data";
import AccordionSubMenus from "../../Components/AccordionSubmenus";
const index = () => {
  return (
    <>
      <Header data={true} />
      <div className="content">
        <Aside data={menus} asideData={billingMenu} />
        {/* <ContentArea /> */}
      </div>
    </>
  );
};

export default index;
