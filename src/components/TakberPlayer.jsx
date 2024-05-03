import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function TakberPlayer() {
  return (
    <section className="pt-4">
      <div className="container p-4 bg-body-tertiary rounded-4 shadow-lg">
        <div className="sec-title d-flex align-items-center mb-3">
          <i className="fa-solid fa-quote-right me-2"></i>
          <h2 className="fw-bold mb-0">تكبيرات عيد الفطر</h2>
        </div>
        <hr className="m-0 pb-3" />
        <AudioPlayer
          className="shadow-sm"
          autoPlay={true}
          src="/eidfiter.mp3"
          loop={true}
          autoPlayAfterSrcChange={true}
        />
      </div>
    </section>
  );
}
