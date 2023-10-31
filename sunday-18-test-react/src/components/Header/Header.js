import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
  <>
  <div className="conatiner-xxl">
  <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
  <div className="container-xxl">
    <Link to={'/TodoList'} className="navbar-brand" >ToDo App</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to={"/TodoList"} className="nav-link active" aria-current="page" >Home</Link>
        </li>
        <li className="nav-item">
          <Link to={"/TodoList"} className='nav-link' >Todo List</Link>
        </li>
        <li className="nav-item">
          <Link to={"/AddTodo"} className='nav-link' >Add Todo </Link>
        </li>
    
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
 </div>
   </>
  )
}
