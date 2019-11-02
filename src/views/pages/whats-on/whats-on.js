import React from "react";
import "./whats-on.scss";
import { LOGIN_BACKGROUND_IMAGE } from "../../../constants/images";
import ShowTimeTab from "../../components/show-time-tab";
import ContactInfo from "../../components/contact-info";

function WhatsON() {
  return (
    <div className="whats-on__container">
      <div
        className="hero"
        style={{
          backgroundImage: `url(${LOGIN_BACKGROUND_IMAGE})`
        }}
      >
        <h1>What&rsquo;s On</h1>
      </div>
      <div className="whats-on__main-content">
        <div className="live-search">
          <input type="text" placeholder="Type to search" />
        </div>
        <ShowTimeTab />
      </div>
      <ContactInfo />
    </div>
  );
}

export default WhatsON;
