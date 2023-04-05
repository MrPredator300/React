import React from 'react'
import { useState } from 'react';

const initialState = {
    username: "",
    email: "",
    gender: "",
    hobbies: [],
    errors: {}
};

const SignUppf = () => {

const [formdata,setFormData] = useState(initialState)    
const [index,setIndex] = useState()

    const handelInputs =(event)=>{
        console.log("hobbies: ",formdata)

        if(event.target.type === "checkbox") {
            let index1 = formdata.hobbies.indexOf(event.target.value);
            setIndex(index1)

            if(event.target.checked) {
                formdata.hobbies.push(event.target.value);
            }
            else
            {
                formdata.hobbies.splice(index,1);
            }

        }
        else
        {
            setFormData({
                ...formdata,
                [event.target.name]: event.target.value,
                hobbies: formdata.hobbies
            });
        }

    };

    
    const handleSubmit =(event)=>{
        event.preventDefault();
        if(validateForm())
        {
            let data = {
                username: formdata.username,
                email: formdata.email,
                gender: formdata.gender,
                hobbies: formdata.hobbies
            }

            console.log("data= ",data)

        }
        else
        {
            setFormData({
                ...formdata,
                errors: formdata.errors
            });
            console.log(formdata.errors)
        }

    }

    const validateForm =()=>{
        let isValid = true;

        if(formdata.username === " ") 
        {
            isValid = false;
            formdata.errors.username = "Username is Required";
        }

        if(formdata.hobbies?.length <=0) 
        {
            isValid = false;
            formdata.errors.hobbies = "Please select One Hobby";
        }
        return isValid;

    }


    return (
        <div>
            <h1>SignUppf </h1>
                <form onSubmit={handleSubmit}>
                    <div className='formgroup'>
                        <label>Username</label>
                        <input type="text" name='username' value={formdata.username} onChange={handelInputs} className='formcontrol' />
                        {formdata.errors.username ? (<small>{formdata.errors.username}</small>) : null}
                    </div>
                    <div className='formgroup'>
                        <label>Email</label>
                        <input type="text" name="email" value={formdata.email} onChange={handelInputs} className='formgroup' />
                    </div>
                    <div className='formgroup'>
                        <label>Gender: </label>
                        <label><input type="radio" name="gender" onChange={handelInputs} value="Male" />Male</label>
                        <label><input type="radio" name="gender" onChange={handelInputs} value="Female" />Female</label>
                    </div>
                    <div className='formgroup'>
                        <label>Hobbies: </label>
                        <label><input type="checkbox" name="hobbies" onChange={handelInputs} value="Cricket" />Cricket</label>
                        <label><input type="checkbox" name="hobbies" onChange={handelInputs}  value="Football" />Football</label>
                        <label><input type="checkbox" name="hobbies" onChange={handelInputs} value="Tennis" />Tennis</label>
                        {formdata.errors.hobbies ? (<small>{formdata.errors.hobbies}</small>) : null}
                    </div>
                    <div className='formgroup'>
                       <input type="submit" className='formgroup' value="register" />                                          
{/*                        <button>Register</button>                       //This also works and gives a button with a Registername on it                 */}
                    </div>
                </form>
        </div>
    )
}

export default SignUppf