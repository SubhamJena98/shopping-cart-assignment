import React from 'react'
import Table from 'react-bootstrap/Table';

function ProductList() {

  const prod_data = JSON.parse(localStorage.getItem('product-data'))

  console.log(prod_data);

  const deleteData = () =>{
    const deleteproduct = JSON.stringify(localStorage.getItem('product-data'))
     localStorage.removeItem(deleteproduct.serial)
  }

  return (
<div className='h-screen'>

<h1 className='uppercase text-center text-2xl text-gray-300 border-b border-gray-300 w-[20%] mb-10 pt-5 pb-2'>ProductList</h1>

<Table className='bg-gray-400 font-bold text-center' striped bordered hover>
      <thead>
        <tr>
          <th>S No.</th>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Gender</th>
          <th>Image</th>
          <th>Color</th>
          <th>Action</th>
        </tr>
      </thead>
      {prod_data.map((data)=>
      <tbody >
      
        <tr key={data.serial}>

          <td>{data.serial}</td>
          <td>{data.name}</td>
          <td>{data.quantity}</td>
          <td>{data.price}</td>
          <td>{data.gender}</td>
          <td>{data.img}</td>
          <td>{data.color}</td>
          <td><button onClick={deleteData}>Delete</button></td>
        </tr>
      </tbody>
      )}
    </Table>
</div>
  )
}

export default ProductList