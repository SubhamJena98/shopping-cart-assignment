import React, { useState , useEffect } from 'react'
import { Link , useNavigate } from 'react-router-dom'


// const getProductData = () =>{
//     const data = localStorage.getItem('products');
//     if(data){
//         return JSON.parse(data)
//     }
//     else{
//         return []
//     }
// }

function AdminPage() {

    const [input, setInput] = useState([{
        productName:"",
        serialNo:"",
        quantity:"",
        price:"",
        gender:"",
        img:"",
        color:""
    }])


    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()
        localStorage.setItem("prod_data", JSON.stringify(input))

        navigate('/productlist')
    }

    // const [products, setProducts] = useState(getProductData())


    // const [productName, setProductName] = useState('')
    // const [serialNo, setSerialNo] = useState()
    // const [quantity, setQuantity] = useState()
    // const [price, setPrice] = useState()
    // const [gender, setgender] = useState("");
    // const [img, setImg] = useState('')
    // const [color, setColor] = useState('')

    // const navigate = useNavigate()
    // const changePath = () =>{
    //     navigate('/productlist')
    // }

    // const handleProduct =(e)=>{
    //     e.preventDefault()

    //     let product ={
    //         serialNo,
    //         productName,
    //         quantity,
    //         price,
    //         gender,
    //         img,
    //         color
    //     }
    //     setProducts([...products, product])
    //     setProductName('')
    //     setSerialNo('')
    //     setQuantity('')
    //     setPrice('')
    //     setgender('')
    //     setImg('')
    //     setColor('')

        

        // if(product){
        //     navigate('/productlist')
        // }
        // if(products){

        //     navigate('/productlist')
        // }
    // }

    // useEffect(()=>{
    //     localStorage.setItem('products', JSON.stringify(products))
    // }, [products])

    return (
        <div className='wrapper'>
            <h1>Add Product</h1>

            <div className='main'>
                <div className='form-container'>
                    <form autoComplete='off' className='form-group' onSubmit={handleSubmit} >
                        <label>Serial No.</label>
                        <input value={input.serialNo} onChange={(e) => setInput({...input, [e.target.name]: e.target.value})} type='number' name='serial' className='form-control' placeholder='s.no' required />
                        <br></br>
                        <label>Product Name</label>
                        <input value={input.productName} onChange={(e) => setInput({...input, [e.target.name]: e.target.value})} type='text' name='name' className='form-control' placeholder='Product Name' required />
                        <br></br>
                        <label>Quantity</label>
                        <input value={input.quantity} onChange={(e) => setInput({...input, [e.target.name]: e.target.value})} type='number' name='quantity' className='form-control' placeholder='Quantity Required' required />
                        <br></br>
                        <div className=''>
                            <label>Gender :</label>
                            <div className="form-check ms-2">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="Gender"
                                    value="Male"
                                    defaultChecked={input.gender === "Male"}
                                    onClick={(e) => setInput({...input, [e.target.name]: e.target.value})}
                                    id="flexRadioDefault1"
                                />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Male
                                </label>
                            </div>
                            <div className="form-check ms-2">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="Gender"
                                    value="Female"
                                    defaultChecked={input.gender === "Female"}
                                    onClick={(e) => setInput({...input, [e.target.name]: e.target.value})}
                                    id="flexRadioDefault2"
                                />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Female
                                </label>
                            </div>
                        </div>
                        <label>Price</label>
                        <input value={input.price} onChange={(e) => setInput({...input, [e.target.name]: e.target.value})} type='number' name='price' className='form-control' placeholder='price in rupees' required />
                        <br></br>
                        <label>Image</label>
                        <input value={input.img} onChange={(e) => setInput({...input, [e.target.name]: e.target.value})} type='file' name='image' className='form-control' required />
                        <br></br>
                        <label>Color</label>
                        <input value={input.color} name='color' onChange={(e) => setInput({...input, [e.target.name]: e.target.value})} type='color' className='form-control form-control-sm border rounded-[100%] p-0 m-0' required />
                        <br></br>
                        {/* <Link to='/productlist'> */}
                        <button type='submit' className='btn btn-success btn-md'>Add Product</button>
                        {/* </Link> */}
                    </form>

                </div>
            </div>
        </div>
    )
}

export default AdminPage