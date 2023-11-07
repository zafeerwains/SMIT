import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <div className="container-xxl ">
                <div className="row">
                    <div className="col p-0"><nav className="navbar navbar-expand-lg bg-primary navbar-dark">
                        <div className="container-xxl">
                            <Link to="/Home" className="navbar-brand" >LOGO</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link to="/Home" className="nav-link active" aria-current="page" >Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/Products" className="nav-link" >Products</Link>
                                    </li>
                                    {/* <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropdown
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" >Action</Link></li>
                                            <li><Link className="dropdown-item" >Another action</Link></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><Link className="dropdown-item" >Something else here</Link></li>
                                        </ul>
                                    </li> */}
                                    <li className="nav-item">
                                        <Link to="/Contact" className="nav-link ">Contact</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/About" className="nav-link ">About</Link>
                                    </li>
                                </ul>
                                <form className="d-flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </nav></div>
                </div>
            </div>
        </>
    )
}
