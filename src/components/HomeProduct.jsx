import React from 'react'
import {useForm} from "react-hook-form";
import axios from "axios"
import "../styles/HomeProduct.css"
function HomeProduct() {
    const{register, handleSubmit
    }=useForm();

    const sendProduct=(data)=>
    {
        const{productTitle,images,productPrice,productContent}=data;
    const formData= new FormData();
    try{
formData.append('productTitle', productTitle);
formData.append ("images",images[0]);
formData.append ("productPrice",productPrice);
formData.append ("productContent",productContent);
   
const results = axios.post('https://botiga-kvf9.onrender.com/product/createProduct', formData,
{
    headers:{
        "Content-Type": "multipart/form-data",
    }
}
);
console.log(results);

}
    catch(error)
    {
console(error)
    }
    };

    const{register: registerContact, handleSubmit: handleSubmitContact
    }=useForm();
    
    const sendContact = (dataContact) => {

        const{names,email,subject,message}=dataContact;
    const formData1= new FormData();
    try{
formData1.append('names', names);
formData1.append ("email", email);
formData1.append ("subject",subject);
formData1.append ("message",message);
            const result = axios.post('https://botiga-kvf9.onrender.com/contact/createContact', formData1,
            {
                headers:{
                    "Content-Type": "application/json",
                }
            }
            );
            // console.log(result);

}
    catch(error)
    {
console(error)
    }
    };


  return (
    <div>
<form className='form-1' onSubmit={handleSubmit(sendProduct)}>
    <input type="text" placeholder='Product Title' name='productTitle' {...register('productTitle', {required:true})}/>
    <input type="file" placeholder='Product Image' name='images' {...register('images', {required:true})}/>
    <input type="text" placeholder='Product Content' name='productContent'{...register('productContent', {required:true})}/>
    <input type="text" placeholder='Product Price' name='productPrice'{...register('productPrice', {required:true})}/>
    <button type ='send'>Create Product</button>
</form>

<form className='form-2' onSubmit={handleSubmitContact(sendContact)}>
                <h2>Contact Us</h2>
                <input type='text' placeholder='Your Name' name= 'names' {...registerContact('names', { required: true })} />
                <input type='email' placeholder='Your Email' name= 'email' {...registerContact('email', { required: true })} />
                <input type='text' placeholder='Subject' name= 'subject' {...registerContact('subject', { required: true })} />
                <textarea placeholder='Message' name= 'message' {...registerContact('message', { required: true })}></textarea>
                <button type='send'>Send Message</button>
            </form>
    </div>
  )
}
export default HomeProduct