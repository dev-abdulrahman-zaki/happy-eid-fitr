import React from "react";

export default function ZakatFAQ() {
  return (
    <section className="pt-4">
      <div className="container p-4 bg-body-tertiary rounded-4 shadow-lg">
        <div className="sec-title d-flex align-items-center mb-3">
          <i className="fa-solid fa-quote-right me-2"></i>
          <h2 className="fw-bold mb-0">أحكام زكاة الفطر</h2>
        </div>
        <hr className="m-0 pb-3" />
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h3 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                الحكمة من مشروعية زكاة الفطر
              </button>
            </h3>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                فرض رسول الله ﷺ زكاة الفطر؛ طهرة للصائم من اللغو والرفث، وطعمة
                للمساكين، من أداها قبل الصلاة فهي زكاة مقبولة، ومن أداها بعد
                الصلاة فهي صدقة من الصدقات رواه أبو داود
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h3 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                مقدار زكاة الفطر، وعلى من تجب؟
              </button>
            </h3>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                فرض رسول الله ﷺ زكاة الفطر صاعًا من تمر، أو صاعًا من شعير على
                العبد والحر، والذكر والأنثى، والصغير والكبير من المسلمين، وأمر
                بها أن تؤدى قبل خروج الناس إلى الصلاة. رواه البخاري ومسلم
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h3 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                قيمة زكاة الفطر بالجنيه
              </button>
            </h3>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                تم تقدير قيمة زكاة الفطر في رمضان 1445 هـ / 2024 م بـ 75 جنيهًا
                عن الفرد الواحد، وذلك اعتمادًا على سعر الأرز في الوقت الحالي. من
                أراد الزيادة وإخراج أكثر من المذكور فله ذلك.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h3 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                وقت إخراج زكاة الفطر
              </button>
            </h3>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                فرض رسول الله ﷺ زكاة الفطر؛ طهرة للصائم من اللغو والرفث، وطعمة
                للمساكين، من أداها قبل الصلاة فهي زكاة مقبولة، ومن أداها بعد
                الصلاة فهي صدقة من الصدقات رواه أبو داود
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
