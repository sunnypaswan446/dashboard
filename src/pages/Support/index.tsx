import Aside from "../../Components/Aside";
import Header from "../../Components/Header";
import ContentArea from "../../Components/ContentArea";
import { menus, supportMenu } from "../../mock-data/data";

const index = () => {
  return (
    <>
      <Header data={true} />
      <div className="content">
        <Aside data={menus} asideData={supportMenu} />
        {/* <ContentArea /> */}
      </div>
    </>
  );
};

export default index;
