import React from "react";

export default function Footer() {
  return (
    <>
      <footer className=" bg-primary">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="py-1 text-center text-light">
                &copy; {new Date().getFullYear()} All Right Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
