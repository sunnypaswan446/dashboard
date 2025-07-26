import Aside from "../../Components/Aside";
import Header from "../../Components/Header";
import ContentArea from "../../Components/ContentArea";
import { menus, referralMenu } from "../../mock-data/data";

const index = () => {
  return (
    <>
      <Header data={true} />
      <div className="content">
        <Aside data={menus} asideData={referralMenu} />
        {/* <ContentArea /> */}
      </div>
    </>
  );
};

export default index;
