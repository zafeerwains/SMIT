import React from "react";

export default function Contact() {
  return (
    <>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-4 p-3 pt-3 pt-sm-5">
            <div className="card box p-5">
              <div className="text-center py-1 py-md-5  d-flex align-item-center flex-column ">
                <a
                  href="mailto:zafeerwains@gamil.com"
                  className="text-primary fw-bold"
                  style={{ textDecoration: "none", fontSize: "200%" }}
                  target="blank"
                >
                  Email
                </a>
                <p>zafeerwains@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4 p-3 pt-sm-5 ">
            <div className="card box p-5">
              <div className="text-center py-1 py-md-5 d-flex align-item-center flex-column">
                <a
                  href="https://wa.me/923100073599"
                  className="fw-bold"
                  style={{
                    textDecoration: "none",
                    fontSize: "200%",
                    color: "green",
                  }}
                  target="blank"
                >
                  WhatsApp
                </a>
                <p>03100073599</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4 p-3 pt-3 pt-sm-5">
            <div className="card box  p-5">
              <div className="text-center py-1 py-md-5  d-flex align-item-center flex-column ">
                <a
                  href="https://goo.gl/maps/3zq2b8fn4eWafKxw8"
                  className="text-primary fw-bold"
                  style={{ textDecoration: "none", fontSize: "200%" }}
                  target="blank"
                >
                  Address
                </a>
                <p>Saylani House,3rd Floor, Factory Area</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
