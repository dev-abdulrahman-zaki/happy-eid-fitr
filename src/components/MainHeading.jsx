import React from "react";

export default function MainHeading() {
  return (
    <>
      <div className="badge container text-center d-flex justify-content-center pt-4 d-none d-md-block">
        <h1
          style={{ textShadow: "2px 2px 4px #000" }}
          className="festive-animation"
        >
          عيدكم مبارك وكل عام وأنتم بألف خير 🎉
        </h1>
      </div>
      <div className="badge container text-center d-flex justify-content-center pt-4 d-md-none">
        <h1
          style={{ textShadow: "2px 2px 4px #000" }}
          className="festive-animation d-flex flex-column"
        >
          <span>عيدكم مبارك</span>
          <span className="pt-3">وكل عام وأنتم بألف خير 🎉</span>
        </h1>
      </div>
    </>
  );
}
