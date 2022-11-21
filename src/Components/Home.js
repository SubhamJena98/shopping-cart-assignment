import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function Home() {

    const navigate = useNavigate();

    const [input, setInput] = useState({
        serial:"",
        name:"",
        quantity:"",
        price:"",
        gender:"",
        img:"",
        color:""
    })

    

    // console.log(input);

    const getData = (e) =>{
        const {value, name} = e.target;
        
        setInput(()=>{
            return {
                ...input,
                [name]:value
            }
        })
    }

    const addData = (e) =>{
        e.preventDefault()

        const pdata = JSON.parse(localStorage.getItem('product-data') || '[]')
        const {serial, name, quantity, price, gender, img , color} = input;

        if(serial === ''){
            toast.error("Serial No. is Required.")
        }
        else if(name === ""){
            toast.error("Name is Required.")
        }
        else if(quantity === ""){
            toast.error("NUmber of Quantity is Required.")
        }
        else if(price === ""){
            toast.error("Price of Product is Required.")
        }
        else if(gender === ""){
            toast.error("Select Gender.")
        }
        else if(img === ""){
            toast.error("Add Image")
        }
        else if(color === ""){
            toast.error("Choose Color.")
        }
        else{
            toast.success("User Saved!");

            // pdata.push(input)
            localStorage.setItem("product-data", JSON.stringify([...pdata , input]))

            navigate('/productlist')
            console.log(pdata);
        }
    }

    let base64code =''

    const handleImg = (e)=>{
        const files = e.target.files
        const file = files[0]
        getbase64(file)
    }

    const onLoad = (fileString) =>{
        this.base64code = fileString
    }

    const getbase64 = (file) =>{
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = ()=>{
            onLoad(reader.result)
        }
    }


    return (
        <div className='container h-screen mt-0 '>
            <section className='d-flex justify-content-between'>
                <div className='left_data mt-20' style={{width:"100%"}}>
                    <h2 className='text-center col-lg-6 mb-5'>Add Product</h2>
                    <Form>
                        <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                            <Form.Label>Serial No.</Form.Label>
                            <Form.Control onChange={getData} name="serial" type="number" placeholder="Serial No." />
                        </Form.Group>

                        <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control onChange={getData} name="name" type="text" placeholder="Enter Name" />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control onChange={getData} name="quantity" type="number" placeholder="Number of Items" />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                            <Form.Label>Price</Form.Label>
                            <Form.Control onChange={getData} name="price" type="number" placeholder="Price in Rupees" />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                            <Form.Label>Gender :</Form.Label>
                            <Form.Check
                                type="radio"
                                id="default-radio"
                                label="Male"
                                value='male'
                                name="gender"
                                onClick={getData}
                            />
                            <Form.Check
                                type="radio"
                                value='female'
                                id="default-radio"
                                label="Female"
                                name="gender"
                                onClick={getData}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                            <Form.Label>Image</Form.Label>
                            <Form.Control name="img" accept='image/png image/jpg' onChange={getData} onCLick={handleImg} type="file" />
                        </Form.Group>

                        <Form.Group className="mb-3 col-lg-3" controlId="formBasicEmail">
                            <Form.Label>Color</Form.Label>
                            <Form.Control name="color" onChange={getData} type="Color" className="p-0 m-0 border rounded-full"/>
                        </Form.Group>
                        <Button onClick={addData} variant="dark" className='mt-3 col-lg-6' type="submit" >
                            Submit
                        </Button>
                    </Form>

                </div>
                <div className='right_data mt-20' style={{width:"100%", margin:"60px"}}>
                    <div className='sign_img mt-3'>
                        <img src='./sign.svg' style={{maxWidth:500, height:500}} alt=''/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home