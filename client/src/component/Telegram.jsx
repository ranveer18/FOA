import React from "react";
import { FaTelegram } from "react-icons/fa";

const Telegram = () => {
  return (
    <>
      <a
        href="https://t.me/Future_officer_academy"
        className="floating_buttons whatsapp"
        target="_blank"
        rel="noreferrer"
      >
        <div className="chatMe">
          <FaTelegram />
        </div>
      </a>
    </>
  );
};

export default Telegram;
