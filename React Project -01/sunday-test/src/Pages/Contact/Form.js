import React, { useState } from "react";
import { toast } from "react-toastify";
const initValue = {
  fullName: "",
  email: "",
  phone: "",
  city: "",
  query: "",
};
export default function Form() {
  const notify = (p) => toast(p,{autoClose:2000});
  const [state, setState] = useState(initValue);
  const handleCahnge = (e) => {
    const { name, value } = e.target;
    setState((s) => ({ ...s, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let { fullName, email, phone, city, query } = state;
    if (
      fullName.trim().length < 3 ||
      phone.trim().length < 10 ||
      city.trim().length < 3
    )
      return notify("Enter the Proper Details");
    let data = {
      fullName,
      email,
      phone,
      city,
      query,
      id: Math.random().toString(36).slice(2),
      date: new Date().getTime(),
    };
notify("Can see the record in console")
    console.log(data);
  };
  return (
    <>
      <div className="bg-primary py-5 mt-4">
        <div className="container-xxl ">
          <form className="row mt-5 g-3" onSubmit={handleSubmit}>
            <div className="col-md-6">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="form-control"
                required
                onChange={handleCahnge}
              />
            </div>
            <div className="col-md-6">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="form-control"
                onChange={handleCahnge}
              />
            </div>
            <div className="col-md-6">
              <input
                type="number"
                name="phone"
                placeholder="Phone "
                required
                className="form-control"
                onChange={handleCahnge}
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                name="city"
                required
                placeholder="City"
                className="form-control"
                onChange={handleCahnge}
              />
            </div>
            <div className="col-12">
              <textarea
                type="text"
                name="query"
                required
                placeholder="Your message / question / query"
                onChange={handleCahnge}
                className="form-control "
                style={{ minHeight: "160px" }}
              />
            </div>
            <div className="col-12 text-center ">
              <button
                type="submit"
                className="px-5 btn btn-light text-center mb-5 w-25 "
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
