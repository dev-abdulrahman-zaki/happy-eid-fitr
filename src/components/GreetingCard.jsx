import React, { Component } from "react";
import { exportComponentAsPNG } from "react-component-export-image";

class GreetingCard extends Component {
  certificateWrapper = React.createRef();
  state = {
    Name: "",
  };
  render() {
    return (
      <section className="pt-4 text-center">
        <div className="container p-4 bg-body-tertiary rounded-4 shadow-lg">
          <div className="sec-title d-flex align-items-center mb-3">
            <i className="fa-solid fa-quote-right me-2"></i>
            <h2 className="fw-bold mb-0">انشاء بطاقة تهنئة بعيد الفطر</h2>
          </div>
          <hr className="m-0 pb-3" />
          <div className="GreetingCard">
            <div className="Meta">
              <label htmlFor="card-name" className="form-label fw-bolder">
                اكتب اسمك
              </label>
              <input
                type="text"
                id="card-name"
                maxLength={20}
                className="form-control"
                placeholder="اكتب اسمك"
                value={this.state.Name}
                onChange={(e) => {
                  this.setState({ Name: e.target.value });
                }}
                style={{ width: "250px" }}
              />
              <button
                className="btn btn-primary my-3 fw-bolder"
                onClick={(e) => {
                  e.preventDefault();
                  exportComponentAsPNG(this.certificateWrapper, {
                    html2CanvasOptions: { backgroundColor: null },
                  });
                  this.props.handlePartyModeClick();
                }}
              >
                تحميل الصورة
              </button>
            </div>

            <div id="downloadWrapper" ref={this.certificateWrapper}>
              <div
                id="certificateWrapper"
                className="d-flex justify-content-center"
              >
                <p>{this.state.Name}</p>
                <img src="eid.png" alt="Card" />
              </div>
            </div>
          </div>
          <div id="sorry-GreetingCard">
            <p className="p-0">
              عذراً! هذه الميزة تحت الاختبار، ومتاحة للشاشات الأكبر من 600 بيكسل
              فقط
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default GreetingCard;
