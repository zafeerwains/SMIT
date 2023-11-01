import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <header className="conatiner-xxl">
      <nav className="navbar navbar-expand-lg  navbar-dark bg-primary">
  <div className="container-xxl">
    <Link to={"/Home"} className="navbar-brand"  >Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to={"/Home"} className="nav-link active" aria-current="page" >Home</Link>
        </li>
        <li className="nav-item">
          <Link to={"/About"} className="nav-link" >About</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" >Action</Link></li>
            <li><Link className="dropdown-item" >Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" >Something else here</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link to={"/Contact"} className="nav-link ">Contact</Link>
        </li>
        <li className="nav-item">
          <Link to={"/UseState"} className="nav-link ">UseState</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
        <button className="btn btn-light " type="submit">Login</button>
      </form>
    </div>
  </div>
</nav>
      </header>
    </>
  );
}
