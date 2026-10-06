import React, { useState } from 'react'

    const ProductDetailsTable = () => {
        const [product, setProduct] = useState({
        id: "",
        name: "",
        price: "",
        quantity: ""
    })

    const [productTable, setProductTable] = useState([])

    const handleSubmit = () => {
        setProductTable()
    }

    const handleChange = (e) => {
        e.target.value
        setProductTable(...prev, [id])        
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h1>Product Details</h1>
            <label>Product id</label>
            <input type="text" onChange={(e) => handleChange(e)}/>

            <label>name</label>
            <input type="text" onChange={(e) => handleChange(e)}/>

            <label>price</label>
            <input type="text" onChange={(e) => handleChange(e)}/>

            <label>quantity</label>
            <input type="text" onChange={(e) => handleChange(e)}/>

            <button type='submit'>submit</button>
        </form>




        <h1>Product Details Table</h1>
        <table border="1" cellPadding="10">
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>price</th>
                    <th>quantity</th>
                </tr>
            </thead>
            <tbody>
                {
                    productTable.map((curval) => (
                        <tr>
                            <td>{curval.id}</td>
                            <td>{curval.name}</td>
                            <td>{curval.price }</td>
                            <td>{curval.quantity}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default ProductDetailsTable