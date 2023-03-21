//Here we have created two separate functions for email and username and calling both the functions

import { Component } from "react";

class Register extends Component
{
    constructor()                       //NOTE:remember you can define the constructor wherever you want
    {
        super();
        this.state = {
            username: "",
            email: ""
        };
    }


    handelSubmit =(event) =>{
        event.preventDefault();     //This helps in stopping the page from refreshing 
//        var name = document.getElementById("uname").value;
//        var email = document.getElementById("email").value;
//        console.log(name);
//        console.log(email);
        console.log(this.state)
    //    alert("Hi")
    }

    usernameHandeler = (event) =>{
        this.setState({
            username: event.target.value,
        }) 
    }

    emailHandeler = (event) =>{
        this.setState({
            email: event.target.value,
        }) 
    }

    render()
    {
        return <section>
            <h1>Register Here</h1>
            <form method="POST" action="" onSubmit={this.handelSubmit}>
                <div className="formgroup">
                    <label>Username</label>
                    <input type="text" id="uname" className="formcontrol" onChange={this.usernameHandeler} value = {this.state.username}/>      {/* For username create a function usernameHandeler and call it here */}
                </div>
                <div className="formgroup">
                    <label>Email</label>
                    <input type="text" id="email" className="formcontrol" onChange={this.emailHandeler} value = {this.state.email}/>          {/* For email create a function emailHandeler and call it here */}
                </div>
                <div className="formgroup">
                    <input type="submit" className="btn" value="Register" />
                </div>
            </form>
        </section>

    }

}

export default Register;