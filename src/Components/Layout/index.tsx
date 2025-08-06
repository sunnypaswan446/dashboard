import Aside from "../../Components/Aside";
import Header from "../../Components/Header";
import { Outlet, useLocation } from "react-router-dom"; // Used for rendering child routes

import {
  menus,
  serverMenu,
  billingMenu,
  domainMenu,
  sslMenu,
  referralMenu,
  supportMenu,
} from "../../mock-data/data";

const Index = () => {
  const location = useLocation();

  // Determine which menu to show based on the current path
  const getAsideData = () => {
    const path = location.pathname;
    const menuMap: { [key: string]: any } = {
      "/server": serverMenu,
      "/billing": billingMenu,
      "/domain": domainMenu,
      "/ssl": sslMenu,
      "/support": supportMenu,
      "/referrals": referralMenu,
    };

    const matchedMenu = Object.entries(menuMap).find(([prefix]) =>
      path.startsWith(prefix)
    );

    return matchedMenu ? matchedMenu[1] : null; // Default menu for homepage
  };

  return (
    <>
      <Header data={true} />
      <div className="content">
        <Aside data={menus} asideData={getAsideData()} />
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Index;
