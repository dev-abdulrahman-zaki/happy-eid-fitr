import React from "react";
import Countdown from "react-countdown";

const CountdownTimer = () => {
  // Target date (April 10, 2024)
  const targetDate = new Date("2024-04-10T00:00:00+02:00");

  // Renderer function to format the countdown display
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render completed state
      return (
        <div className="d-flex justify-content-center text-center text-white">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <span className="countdown-num countdown-span bg-dark rounded-3 d-flex justify-content-center">
              0
            </span>
            <span className="countdown-txt countdown-span px-4 py-1 bg-dark d-flex justify-content-center">
              ثوان
            </span>
          </div>
          <div className="d-flex ps-2 flex-column align-items-center justify-content-center">
            <span className="countdown-num countdown-span bg-dark rounded-3 d-flex justify-content-center">
              0
            </span>
            <span className="countdown-txt countdown-span px-4 py-1 bg-dark d-flex justify-content-center">
              دقيقة
            </span>
          </div>
          <div className="d-flex ps-2 flex-column align-items-center justify-content-center">
            <span className="countdown-num countdown-span bg-dark rounded-3 d-flex justify-content-center">
              0
            </span>
            <span className="countdown-txt countdown-span px-4 py-1 bg-dark d-flex justify-content-center">
              ساعة
            </span>
          </div>
          <div className="d-flex ps-2 flex-column align-items-center justify-content-center">
            <span className="countdown-day countdown-num countdown-span bg-dark rounded-3 d-flex justify-content-center">
              0
            </span>
            <span className="countdown-day countdown-txt countdown-span px-4 py-1 bg-dark d-flex justify-content-center">
              يوم
            </span>
          </div>
        </div>
      );
    } else {
      // Render countdown
      return (
        <div className="d-flex justify-content-center text-center text-white">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <span className="countdown-num countdown-span bg-dark rounded-3 d-flex justify-content-center">
              {seconds}
            </span>
            <span className="countdown-txt countdown-span px-4 py-1 bg-dark d-flex justify-content-center">
              ثوان
            </span>
          </div>
          <div className="d-flex ps-2 flex-column align-items-center justify-content-center">
            <span className="countdown-num countdown-span bg-dark rounded-3 d-flex justify-content-center">
              {minutes}
            </span>
            <span className="countdown-txt countdown-span px-4 py-1 bg-dark d-flex justify-content-center">
              دقيقة
            </span>
          </div>
          <div className="d-flex ps-2 flex-column align-items-center justify-content-center">
            <span className="countdown-num countdown-span bg-dark rounded-3 d-flex justify-content-center">
              {hours}
            </span>
            <span className="countdown-txt countdown-span px-4 py-1 bg-dark d-flex justify-content-center">
              ساعة
            </span>
          </div>
          <div className="d-flex ps-2 flex-column align-items-center justify-content-center">
            <span className="countdown-day countdown-num countdown-span bg-dark rounded-3 d-flex justify-content-center">
              {days}
            </span>
            <span className="countdown-day countdown-txt countdown-span px-4 py-1 bg-dark d-flex justify-content-center">
              يوم
            </span>
          </div>
        </div>
      );
    }
  };

  return (
    <section className="pt-3">
      <div className="container p-4 bg-body-tertiary rounded-4 shadow-lg">
        <div className="sec-title d-flex align-items-center mb-3">
          <i className="fa-solid fa-quote-right me-2"></i>
          <h2 className="fw-bold mb-0">كم باقي على عيد الفطر؟</h2>
        </div>
        <hr className="m-0 pb-3" />
        <p className="text-muted fs-4 fw-normal">
          يصادف عيد الفطر لعام 2024 يوم الأربعاء بتاريخ 10-04-2024.
        </p>
        <Countdown date={targetDate} renderer={renderer} />
      </div>
    </section>
  );
};

export default CountdownTimer;
