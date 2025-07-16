import "./_style.scss";

import Button from "../../Components/Button";
import { homepage } from "../../mock-data/data";
const index = () => {
  return (
    <>
      <div className="err">
        <div className="err__cont">
          <div className="err__inner">
            <div className="err__img">
              <img src="../images/error.svg" alt="error" />
            </div>
            <h4 className="err__heading">Error while loading requested page</h4>
            <p className="err__desc">
              You cannot access this page because no service passed the
              requirements to edit rDNS.
            </p>
            <Button data={homepage} style={"solid"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
