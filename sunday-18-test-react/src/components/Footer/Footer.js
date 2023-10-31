import React from 'react'

export default function Footer() {
    return (
        <>
            <div className="container-xxl bg-primary py-1 ">
                <div className="row">
                    <div className="col">
                        <p className="text-light text-center">
                            &copy; {new Date().getFullYear()}.All Right Reserved. Developed by Wains
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
