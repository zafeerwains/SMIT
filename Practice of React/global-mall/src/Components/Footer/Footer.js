import React from 'react'

export default function Footer() {
  return (
    <>
      <div className="container-xxl py-1 bg-primary">
        <div className="row">
          <div className="col">
            <p className="text-center text-light">
              &copy; {new Date().getFullYear()} All Right Reserved. 
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
