import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="item">
          <ul>
            <li>Cookie Policy</li>
            <li>Cancellatiion and Refund Policy</li>
            <li>Privacy Policy</li>
            <li>Terms & Service</li>
            <li>FAQ</li>
            <li>About us</li>
          </ul>
          <ul>
            <li>
              <span>We Accept</span>

              <img src="/cards.png" alt="cards" loading="lazy" />
            </li>
          </ul>
        </div>
        <div className="item">
          <ul>
            <li>
              Copyright © 2023 FLYNFARE LLC.
              <br /> All rights reserved Please note that all HTML mark up
              codes, Images and logos contained on this website, is owned by
              flynfare.com, its affiliates, and/or their suppliers, and is
              protected by copyright laws, in case you identify any content on
              our website which violates your privacy or any copyright laws then
              report us on admin@flynfare.com or call us on 1-888-831-1814, if
              we find your claim legitimate then we will remove the reported
              content immediately.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
