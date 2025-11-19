import React from "react";
import { MdOutlinePhone } from "react-icons/md";
import { IoMdAirplane } from "react-icons/io";
import { IoBatteryFull } from "react-icons/io5";

export const PhoneScreen = ({ onAttend, onDecline }) => {
  return (
    <div className="phoneScreen">
      <div className="phoneContainer">
        <div style={{ paddingLeft: "0.7vw" }}>09:11</div>
        <div className="notificationBarRight">
          <IoMdAirplane style={{ fontSize: "1.5vw", transform: "rotate(-90deg)" }} />
          <IoBatteryFull style={{ fontSize: "1.6vw" }} />
        </div>
      </div>
      <div style={{ fontSize: "1vw", textAlign: "center", paddingTop: "2vw" }}>
        Call from
      </div>
      <div style={{ fontSize: "3vw", textAlign: "center" }}>Him :{"("}</div>
      <div className="callControlContainer">
        <a onClick={onAttend} href="#">
          <div className="attend">
            <MdOutlinePhone />
          </div>
        </a>
        <a onClick={onDecline} href="#">
          <div className="decline">
            <MdOutlinePhone />
          </div>
        </a>
      </div>
    </div>
  );
};

