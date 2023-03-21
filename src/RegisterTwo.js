//Here we are gonna use only "one function" to call username and email in Register we created two functions for email and username

import { Component } from "react";
import './style/registerTwo.css';

class RegisterTwo extends Component
{
    constructor()
    {
        super()
        this.state = {
            username: "",
            email: "",
            errors:{}
        }
    }

    handelInputs = (event) =>{
//        event.target.name   //this is the name of the input field
//        event.target.value  //this is the value that you have entered
        this.setState({
            [event.target.name]: event.target.value         //Here we are dynamically assigning the value 
        })
    }

    handelSubmit = (event) =>{
        event.preventDefault();
        if(this.validateForm())                             //user-defined function not pre-defined function
        {
            console.log("Sending data to server:" + this.state)
        }                                         
        else
        {
            this.setState({
                errors: this.state.errors
            })
            console.log(this.state.errors)

//            console.log("Display Errors...")
        }
    }

    validateForm = () =>{
        let isValid = true;
//        let isValid = false;

        let errors = this.state.errors;

        //username validation

        if(this.state.username == "")
        {
            isValid = false;

            errors.username = "Username is Required..."
        }

        if(this.state.email == "")
        {
            isValid = false;

            errors.email = "Email is Required..."
        }

        return isValid;
    }

    checkTextBox = (event) =>{
//        this.state.errors.username = ''             //Because the value here is empty so just by clicking on the text box the error disappears

        this.state.errors[event.target.name] = ''

       this.setState({
        errors: this.state.errors
       })
    }

    verifyTextBox = (event) =>{
        if(event.target.value == "")
        {
            this.state.errors[event.target.name] = event.target.name + " is required"

            this.setState({
             errors: this.state.errors
            })

        }
        /*
       this.state.errors[event.target.name] = event.target.name + " is required"

       this.setState({
        errors: this.state.errors
       })
       */
    }

    render()
    {
        return <section>
            <h1>Register Two</h1>
            <form method="POST" action="" onSubmit={this.handelSubmit}>
                <div className="formgroup">
                    <label>Username</label>
                    <input type="text" id="uname" onBlur={this.verifyTextBox} onFocus={this.checkTextBox} name="username" className="formcontrol" onChange={this.handelInputs} value={this.state.username} />     {/* Here make sure that the 'name'="username" is same as the one in constructor this.state = {"username":} */}
                    {this.state.errors.username ? <small className="error">{this.state.errors.username}</small>: null}                                     {/* Here we are using "onFocus"={this.checkTextBox} we area calling the function checkTextBox by using this when we try to enter the username the error message in red color on the web page will be gone because we have given "this.state.errors.username = ''" as empty */}
                </div>
                <div className="formgroup">
                    <label>Email</label>
                    <input type="text" id="email" onBlur={this.verifyTextBox} onFocus={this.checkTextBox} name="email" className="formcontrol" onChange={this.handelInputs} value={this.state.email} />          {/* Here make sure that the 'name'="email" is same as the one in constructor this.state = {"email":} */}
                    {this.state.errors.email ? <small className="error">{this.state.errors.email}</small>: null}
                </div>
                <div className="formgroup">
                    <input type="submit" className="btn" value="Register" />
                </div>
            </form>
        </section>
    }

}

export default RegisterTwo;