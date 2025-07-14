import "./_footer.scss";

const Index = () => {
  return (
    <>
      <footer className="ftr">
        <div className="ftr__inner">
          <ul className="text__med ftr__menus">
            <li className="ftr__menuItem">
              <a href="#" className="ftr__links">
                Contact Us
              </a>
            </li>
            <li className="ftr__menuItem">
              <a href="#" className="ftr__links">
                Terms of Service
              </a>
            </li>
          </ul>
          <div className="text__med ftr__copyright">
            <p>
              Copyright © <span className="ftr__year">2024 </span> SSD Nodes.
              All Rights Reserved.
            </p>
          </div>
          <div className="ftr__social">
            <ul className="social">
              <li className="social__menus">
                <a href="#" className="social__links">
                  <img
                    src="../images/fb.svg"
                    alt="Facebook"
                    className="social__icons"
                  />
                </a>
              </li>
              <li className="social__menus">
                <a href="#" className="social__links">
                  <img
                    src="../images/instagram.svg"
                    alt="Instagram"
                    className="social__icons"
                  />
                </a>
              </li>
              <li className="social__menus">
                <a href="#" className="social__links">
                  <img
                    src="../images/linkdin.svg"
                    alt="Linkdin"
                    className="social__icons"
                  />
                </a>
              </li>
              <li className="social__menus">
                <a href="#" className="social__links">
                  <img
                    src="../images/youtube.svg"
                    alt="Youtube"
                    className="social__icons"
                  />
                </a>
              </li>
              <li className="social__menus">
                <a href="#" className="social__links">
                  <img
                    src="../images/x.svg"
                    alt="X"
                    className="social__icons"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Index;
