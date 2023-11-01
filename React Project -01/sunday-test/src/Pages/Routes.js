import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import About from "./About";
import Contact from "./Contact";
import NoPage from "./NoPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import USeState from "./USeState";
export default function index() {
  return (
    <>
      <Header />
      <main>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/UseState" element={<USeState />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <ToastContainer />
      </main>
      <Footer />
    </>
  );
}
