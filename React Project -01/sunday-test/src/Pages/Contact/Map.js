import React from "react";

export default function Map() {
  return (
    <>
      <div className="container-fluid m-0  ">
        <div className="row">
          <div className="col  ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.895594947761!2d73.1123806!3d31.4170025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922686cd8d838ef%3A0x1743ea4bbe76101e!2sSaylani%20Trust!5e0!3m2!1sen!2s!4v1685242078475!5m2!1sen!2s"
              width="100%"
              height="600"
              style={{ border: "0" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
