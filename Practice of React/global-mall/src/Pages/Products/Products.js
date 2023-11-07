import React, { useEffect, useRef, useState } from 'react'

export default function Products() {
    // const url = 'https://shopifyvolodimir-kudriachenkov1.p.rapidapi.com/activateApplicationCharge';

    const [products, setProducts] = useState([])
    const card= useRef(null)
    useEffect(
        () => {
            fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(json => setProducts(json))
        }, []
    )
    const test =(product)=>{console.log(product.title)}
    console.log(products)
    return (
        <><div className="container-xxl ">
            <div className="row p-2  ">
                { products.map(
                        (product, i) => {
                            return <div key={i} className="col m-1 "><div className="card" ref={card} style={{ minWidth: "18rem" }}>
                                <img src={product.image} className="card-img-top " height={300} alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text" style={{whiteSpace:"inherit"}}>{product.description}</p>
                                    <a href="#" className="btn btn-primary" onClick={()=>{test(product)}}>Go somewhere</a>
                                </div>
                            </div></div>

                        }
                    )
                }
            </div>
        </div>
        </>
    )
}
