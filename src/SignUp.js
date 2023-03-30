import React from "react";
import { useState } from "react";
import axios from "axios";

const initialState = {
  username: "",
  email: "",
  gender: "",
  hobbies: [], //taken an array because we need to store multiple hobbies into the array
  errors: {},
};

const SignUp = () => {
  //    const[formdata,setFormData] = useState(initialState);
  //   const[submit,setSubmit] = useState(false)

  //    console.log(formdata)                                                 //This will show us the output of each and every click and text entered in the form in the console

  //    const handelInputs =(event)=>{

  //            username: event.target.value                                    //we have to write this line for it to accept the value that the user is tying in the text Box

  /*
            if(event.target.type == "checkbox")                                 //here it should be if(event.target.type=="checkbox") if we write if(event.target.value == "checkbox") only one value will get selected and not multiple values
            {
                formdata.hobbies.push(event.target.value)
                setFormData({
                    ...formdata,
                    hobbies: formdata.hobbies
                })
            }
            else
            {
                setFormData({
                    ...formdata,                                                      //this will keep the copy of the formdata without the formdata only one will appear in the console either the email or the username
                    [event.target.name] : event.target.value                            //we are making the text box dynamic not static so we used [event.target.name] 
                })

            }
*/

  const [formdata, setFormData] = useState(initialState);
  const[submit,setSubmit] = useState(false)

  const [index, setindex] = useState();

  const handelInputs = (event) => {
    console.log("hobbies:", formdata);

    if (event.target.type === "checkbox") {
        let indexx = formdata.hobbies.indexOf(event.target.value);
        setindex(indexx)



      if (event.target.checked) {

        formdata.hobbies.push(event.target.value);
      } else {
        formdata.hobbies.splice(index, 1);
      }

      // if(index)
      // let index = formdata.hobbies.indexOf(event.target.value) !== -1

      // if(index !== -1)
      // {
      //     formdata.hobbies.splice(index,1)
      // }
      // else
      // {
      //     formdata.hobbies.push(event.target.value)
      // }

      // setFormData({
      //     ...formdata,
      //     hobbies: formdata.hobbies
      // })
    } else {
      setFormData({
        ...formdata,
        [event.target.name]: event.target.value,
        hobbies: formdata.hobbies,
      });
    }
  };

  const handelSubmit = (event) => {
    console.log("index",index)
    event.preventDefault(); //This will stop the page from refreshing
    if (validateForm()) {
      let data = {
        username: formdata.username,
        useremail: formdata.email,
        usergender: formdata.gender,
        userhobbies: formdata.hobbies,
      };
      //            axios.post("",data);
      console.log(data);

      //            console.log("Sending data to server",formdata);
    } else {
      setFormData({
        ...formdata,
        errors: formdata.errors,
      });

      console.log(formdata.errors);
    }
  };

  const validateForm = () => {
    let isValid = true;

    if (formdata.username === " ") {
      isValid = false;
      formdata.errors.username = "Username is Required";
    }

    if (formdata.hobbies?.length <= 0) {
      isValid = false;
      formdata.errors.hobbies = "Please Select atleast one hobby";
    }

    return isValid;
  };

  return (
    <div>
      <h1>SignUp</h1>
      <form onSubmit={handelSubmit}>
        <div className="formgroup">
          <label>Username</label>
          <input type="text" name="username" value={formdata.username} onChange={handelInputs} className="formcontrol" />
          {submit && formdata.errors.username ? (<small>{formdata.errors.username}</small>) : null}
        </div>
        <div className="formgroup">
          <label>Email</label>
          <input type="text" name="email" value={formdata.email} onChange={handelInputs} className="formcontrol" />
        </div>
        <div className="formgroup">
          <label>Gender</label>
          <label><input type="radio" name="gender" onChange={handelInputs} value="Male"/>Male</label>
          <label><input type="radio" name="gender" onChange={handelInputs} value="Female" />Female</label>
        </div>
        <div className="formgroup">
          <label>Hobbies</label>
          <label><input type="checkbox" name="hobbies" onChange={handelInputs} value="Cooking" />Cooking</label>
          <label><input type="checkbox" name="hobbies" onChange={handelInputs} value="Singing"/>Singing</label>
          <label><input type="checkbox" name="hobbies" onChange={handelInputs} value="Dancing" />Dancing</label>
          {formdata.errors.hobbies ? (<small>{formdata.errors.hobbies}</small>) : null}
        </div>
        <div className="formgroup">
          <input type="submit" className="btn" value="Sign Up" />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
