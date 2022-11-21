import React from 'react'

function CheckOut() {

  const prod_data = JSON.parse(localStorage.getItem('product-data'))

  return (
    <>
      <div className='h-[100%] flex '>

        <div className='h-[100%] w-[100%] m-10 p-5 bg-gray-700 text-black'>
          {prod_data.map(data =>

            <div className='flex flex-row w-[100%] bg-gray-400 h-[250px] justify-between items-center'>
              <div className='flex flex-row items-center m-2 p-2'>
                <img src='https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/9/4/9405ca852249533_1.jpg?rnd=20200526195200' alt='' className='h-[200px] w-[150px]' />

                <div className='p-3'>
                  <p>Brand: <span className='text-gray-800 font-bold'>{data.name}</span></p>
                  <p>Color:<span className='text-gray-800 font-bold'>{data.color}</span></p>

                </div>
              </div>


              <p className='p-5'>Quantity: <span className='text-gray-800 font-bold'>{data.quantity}</span></p>
              <p className='p-5 ml-4'>Price: <span className='text-gray-800 font-bold'>{data.price}</span> </p>
            </div>
          )}

        </div>
        <div className='w-[100%] m-auto ml-10 uppercase text-center'>
          <h1>Thanks For Shopping</h1>
        </div>
      </div>
    </>
  )
}

export default CheckOut