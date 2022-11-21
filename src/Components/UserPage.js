import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function UserPage() {

  const prod_data = JSON.parse(localStorage.getItem('product-data'))

 


 const [num , setNum] = useState(1)

const increase = () =>{
  setNum(num +1)
}
const decrease = () =>{

  setNum(num)
  
  if(num === 1){

    toast.error("Minimum order is 1")
  }
  else{
    setNum(num-1)
  }
}

  return (
    <>

      <h1 className="h-20 text-center p-4 mb-5">Items</h1>
      
      <Container className=' h-[100%]'>
          <Row  >
        {prod_data.map((data) => 
            <Col key={data.serial} sm={3} className="m-3" >
              <div className='flex flex-col items-center  bg-gray-400 text-black m-3 p-3 w-[100%] hover:transform- '>
                <img src='https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/9/4/9405ca852249533_1.jpg?rnd=20200526195200' alt='' className='bg-transparent h-[300px] w-[300px]' />
                <div className='flex flex-col w-[100%] mt-3 text-left'>
                  <p name='brand' className='text-1xl font-bold w-full mt-3 uppercase space-x-5 '>Brand: <span className='text-slate-700 font-bold ml-1' >{data.name}</span></p>
                  <p name='color' className='text-1xl font-bold w-full mt-3 uppercase space-x-5text-1xl'>Color: <span className='text-slate-700 font-bold ml-1' >{data.color}</span></p>
                  <p name='gender' className='text-1xl font-bold w-full mt-3 uppercase space-x-5'>For: <span className='text-slate-700 font-bold ml-1' >{data.gender}</span></p>
                  <div className='text-1xl w-[40%] flex space-x-2 border-2 bg-slate-400 border-slate-400 text-center items-center justify-evenly'>
                    <button onClick={increase} className='cursor-pointer bg-slate-500 w-full font-bold text-2xl'>+</button>
                    <span name='quantity' className='font-bold text-1xl bg-gray-400 w-[100%]' >{num}</span>
                    <button onClick={decrease} className='cursor-pointer bg-slate-500 w-full font-bold text-2xl'>-</button>
                  </div>
                <p name='price' className='text-1xl font-bold w-full mt-3 uppercase space-x-5' >Price : &#x20B9;<span className='text-slate-700 font-bold ml-1'>{data.price}</span></p>
                </div>
                <button  className='border-2 w-[100%] font-bold rounded-full border-slate-400 hover:bg-slate-700 h-[40px] hover:text-white'>Add To Cart</button>
              </div>
            </Col>
            )}
          </Row>
          <Link to='/checkout'>
          <button className='text-2xl text-center bg-gray-500 hover:bg-gray-800 text-gray-800 hover:text-gray-400 rounded-lg border-gray-500 m-4 font-bold h-12 pr-3 border-2 w-[20%]'>Check Out</button>
            
          </Link>
      </Container>
    </>
  )
}

export default UserPage