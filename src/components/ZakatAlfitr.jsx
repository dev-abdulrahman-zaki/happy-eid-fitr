import React, { useState } from "react";

export default function ZakatAlfitr() {
  const [numOfPeople, setNumOfPeople] = useState(0);

  return (
    <section className="pt-4">
      <div className="container p-4 bg-body-tertiary rounded-4 shadow-lg">
        <div className="sec-title d-flex align-items-center mb-3">
          <i className="fa-solid fa-quote-right me-2"></i>
          <h2 className="fw-bold mb-0">حاسبة زكاة الفطر</h2>
        </div>
        <hr className="m-0 pb-3" />
        <div className="col-sm-12 mb-3">
          <label htmlFor="numOfPeople" className="numOfPeople-label form-label fw-bolder text-end">
            كم عدد الأفراد؟
          </label>
          <input
            type="number"
            min="1"
            id="numOfPeople"
            className="form-control text-end"
            value={numOfPeople}
            onChange={(e) => {
              setNumOfPeople(e.target.value);
            }}
            style={{ width: "250px" }}
          />
        </div>
        <p className="text-muted fs-5 mb-0">
          إجمالي زكاة الفطر عن هؤلاء الأفراد (رمضان 1445هـ / 2024م): <span className="zakat-amount">{numOfPeople*75} جنيه</span>
        </p>
      </div>
    </section>
  );
}
