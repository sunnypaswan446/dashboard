import Aside from "../../Components/Aside";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import ContentArea from "../../Components/ContentArea";
import { menus, homepageMenu } from "../../mock-data/data";

const Index = () => {
  return (
    <div>
      <Header data={true} />
      <div className="content">
        <Aside data={menus} asideData={homepageMenu} />
        <ContentArea />
      </div>
      <Footer />
    <div/>
  );
};

export default Index;
