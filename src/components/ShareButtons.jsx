import React from "react";
import {
  FacebookShare,
  LinkedinShare,
  TelegramShare,
  TwitterShare,
  WhatsappShare,
} from "react-share-lite";

const ShareButtons = () => {
  const shareUrl = "https://happy-eid-zaki.netlify.app/";
  const title = "Happy Eid-ul-Fitr";

  return (
    <section className="pt-4">
      <div className="container p-4 bg-body-tertiary rounded-4 shadow-lg">
        <div className="sec-title d-flex align-items-center mb-3">
          <i className="fa-solid fa-quote-right me-2"></i>
          <h2 className="fw-bold mb-0">شارك مع أصدقائك</h2>
        </div>
        <hr className="m-0 pb-3" />
        <LinkedinShare url={shareUrl} />
        <FacebookShare url={shareUrl} quote={title} />
        <TwitterShare url={shareUrl} title={title} />
        <WhatsappShare url={shareUrl} title={title} separator=":: " />
        <TelegramShare url={shareUrl} />
      </div>
    </section>
  );
};

export default ShareButtons;
