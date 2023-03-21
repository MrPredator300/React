//(0r14) vid14: Form Handeling 2 checkBox 

//import axios from "axios";
import { Component } from "react";

class RegisterTwo_two extends Component
{
    constructor()
    {
        super()
        this.state = {
            username: "",
            email: "",
            state: "",
            gender: "",
            terms: false,
            errors:{}
        }
    }

    handelInputs = (event) =>{
//        event.target.name   //this is the name of the input field
//        event.target.value  //this is the value that you have entered

        if(event.target.type == "checkbox")             //use the if else condition if the user checks the box it will display terms:TRUE if not terms:FALSE
        {
//            console.log(event.target.checked)       //here if the user checks the box it will be TRUE if the user unchecks the box it will be FALSE
            
            this.setState({
                terms: event.target.checked ? true : false
            })

        }
        else
        {
            this.setState({
                [event.target.name]: event.target.value         //Here we are dynamically assigning the value 
            })
        }


//        console.log(event.target.type)                      //this shows all the interactions the user and the form 

/*
        this.setState({
            [event.target.name]: event.target.value         //Here we are dynamically assigning the value 
        })
*/

    }

    handelSubmit = (event) =>{
        event.preventDefault();
        if(this.validateForm())                             //user-defined function not pre-defined function
        {

            const data = {
                username: this.state.username,
                useremail: this.state.email,
                userstate: this.state.state,
                usergender: this.state.gender,
                userterms: this.state.terms
            }
/*
            axios.post("http://localhost/reactAPI/users.php", data).then((res)=>{                   //users.php files is not there so this won't work
                console.log(res)
            }).catch((errors)=>{
                console.log(errors)
            })

*/

           // console.log("Sending data to server:" + this.state)
          // console.log(this.state)
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
                    <label>State</label>
                    <select name="state" value={this.state.state} onChange={this.handelInputs}>
                        <option value=' '>--Select State--</option>
                        <option value='Maharashtra'>Maharashtra</option>
                        <option value='Karnataka'>Karnataka</option>
                    </select>
                    {this.state.errors.email ? <small className="error">{this.state.errors.email}</small>: null}
                </div>

                <div className="formgroup">
                    <label>Gender</label>
                    <label><input type="radio" name="gender" value="Male" onChange={this.handelInputs}/>Male</label>
                    <label><input type="radio" name="gender" value="Female" onChange={this.handelInputs} />Female</label>
                    {this.state.errors.email ? <small className="error">{this.state.errors.email}</small>: null}
                </div>

                <div className="formgroup">
                    <label><input type="checkbox" value={this.state.terms} name="terms" onChange={this.handelInputs}></input>Please accept terms and conditons</label>
                </div>

                <div className="formgroup">
                    <input type="submit" className="btn" value="Register" />
                </div>
            </form>
        </section>
    }


}

export default RegisterTwo_two