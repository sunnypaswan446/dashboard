import Aside from "../../Components/Aside";
import Header from "../../Components/Header";
import ContentArea from "../../Components/ContentArea";
import { menus, sslMenu } from "../../mock-data/data";

const index = () => {
  return (
    <>
      <Header data={true} />
      <div className="content">
        <Aside data={menus} asideData={sslMenu} />
        {/* <ContentArea /> */}
      </div>
    </>
  );
};

export default index;
