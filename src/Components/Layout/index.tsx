import Aside from "../../Components/Aside";
import Header from "../../Components/Header";
import ContentArea from "../../Components/ContentArea";
import { Outlet } from "react-router-dom"; // Used for rendering child routes

import { menus } from "../../mock-data/data";

const Index = () => {
  return (
    <>
      <Header />
      <div className="content">
        <Aside data={menus} />
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Index;
