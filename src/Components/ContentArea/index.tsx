import { Link } from "react-router-dom";
import { displayCard } from "../../mock-data/data";
import InfoTiles from "../InfoTiles";

const index = () => {
  return (
    <>
      <div className="home">
        <div className="cards">
          {displayCard &&
            displayCard.map((card, index) => {
              return <InfoTiles key={index} data={card} />;
            })}
        </div>

        <div className="layout__panel">
          <div className="panel">
            <div className="panel__cont">
              <div className="panel__inner">
                <div className="panel__prodpets">
                  <div className="panel__acticon">
                    <img src="../images/active-servers.svg" alt="active icon" />
                  </div>
                  <h5 className="panel__title">My active servers</h5>
                </div>

                <a
                  href="../server-page/server.php"
                  className="btn btn--outline btn--icon panel__btn"
                >
                  <img
                    src="../images/right-arrow.svg"
                    alt="server-arrow"
                    className="panel__btn--img"
                  />
                  <span className="cta__text">My Services</span>
                </a>
              </div>

              <div className="panel__more">
                <ul className="panel__list">
                  <li className="panel__item">
                    <div className="panel__sec">
                      <label className="radio">
                        {/* <input type="radio" className="radio__input" name="radio__group"> */}
                        <div className="radio__mark"></div>
                        <p className="text__base panel__sectile">
                          Standard 8GB RAM [160GB SSD]
                        </p>
                      </label>
                    </div>
                    <a
                      href="../server-page/server.php"
                      className="text__small btn btn--bg panel__info"
                    >
                      {" "}
                      View details
                    </a>
                  </li>

                  <li className="panel__item">
                    <div className="panel__sec">
                      <label className="radio">
                        {/* <input type="radio" className="radio__input" name="radio__group"> */}
                        <div className="radio__mark"></div>
                        <p className="text__base panel__sectile">
                          Standard 8GB RAM [160GB SSD]
                        </p>
                      </label>
                    </div>
                    <a
                      href="../server-page/server.php"
                      className="text__small btn btn--bg panel__info"
                    >
                      {" "}
                      View details
                    </a>
                  </li>

                  <li className="panel__item">
                    <div className="panel__sec">
                      <label className="radio">
                        {/* <input type="radio" className="radio__input" name="radio__group"> */}
                        <div className="radio__mark"></div>
                        <p className="text__base panel__sectile">
                          Standard 8GB RAM [160GB SSD]
                        </p>
                      </label>
                    </div>
                    <a
                      href="../server-page/server.php"
                      className="text__small btn btn--bg panel__info"
                    >
                      {" "}
                      View details
                    </a>
                  </li>

                  <li className="panel__item">
                    <div className="panel__sec">
                      <label className="radio">
                        {/* <input type="radio" className="radio__input" name="radio__group"> */}
                        <div className="radio__mark"></div>
                        <p className="text__base panel__sectile">
                          Standard 8GB RAM [160GB SSD]
                        </p>
                      </label>
                    </div>
                    <a
                      href="../server-page/server.php"
                      className="text__small btn btn--bg panel__info"
                    >
                      View details
                    </a>
                  </li>
                </ul>
                <button className="text__small btn btn--bg panel__seemore">
                  View All
                </button>
              </div>
            </div>
          </div>

          {/* <!-- Recent Support --> */}
          <div className="panel panel--recent">
            <div className="panel__cont">
              <div className="panel__inner">
                <div className="panel__prodpets">
                  <div className="panel__acticon">
                    <img src="../images/recent.svg" alt="recent icon" />
                  </div>
                  <h5 className="panel__title">Recent support tickets</h5>
                </div>
                <a
                  href="../referral-page/referral.php"
                  className="btn btn--outline btn--icon panel__btn"
                >
                  <img
                    src="../images/add-icon.svg"
                    alt="add icon"
                    className="panel__btn--img"
                  />
                  <span className="cta__text">Open New Ticket</span>
                </a>
              </div>
              <div className="panel__more">
                <ul className="panel__list">
                  <p className="text__base panel__sectile">
                    No recent tickets found. If you need any help, Please
                  </p>
                  <a
                    href="../referral-page/referral.php"
                    className="text-base panel__link"
                  >
                    Open a ticket
                  </a>
                </ul>
                <button className="text__small btn btn--bg panel__seemore">
                  View All
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Referrals --> */}
        <div className="panel panel--refer">
          <div className="panel__cont ">
            <div className="panel__inner">
              <div className="panel__prodpets">
                <div className="panel__acticon">
                  <img src="../images/referral.svg" alt="referral icon" />
                </div>
                <h5 className="panel__title">Referral program</h5>
              </div>
              <a
                href="../referral-page/referral.php"
                className="btn btn--outline btn--icon panel__btn"
              >
                <img
                  src="../images/right-arrow.svg"
                  alt="right"
                  className="panel__btn--img"
                />
                <span className="cta__text">More Details</span>
              </a>
            </div>
            <p className="text__base panel__sectile">
              Your current commission balance is $0.00. You only need another
              $10.00 before you can withdraw your earnings.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
