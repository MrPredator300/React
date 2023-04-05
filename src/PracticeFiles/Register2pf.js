import { Component } from "react";

class Register2pf extends Component
{
    constructor()
    {
        super()
        this.state = {
            username: "",
            email: "",
            state: "",
            gender: ""
        }
    }

    handelInput =(event)=>{

        this.setState({
            term: event.target.checked ? true: false
        })
        console.log(this.state.term)

    }

    handelSubmit =(event) =>{
        this.setState({
            errors: this.state.errors
        })

        console.log(this.state.errors)

    }

    validateForm =() =>{

    }

    checkTextBox =() =>{

    }

    verifyTextBox =() =>{

    }


    render()
    {
        return <section>
            <h1>Register22 Here</h1>
            <form method="POST" action="" onSubmit={this.handelSubmit}>
                <div className="formgroup">
                    <label>Username</label>
                    <input type="text" id="uname" name="username" className="formcontrol" value={this.state.username} />
                </div>
                <div className="formgroup">
                    <label>Email</label>
                    <input type="text" id="email" name="email" className="formcontrol" value={this.state.email} />
                </div>
                <div className="formgroup">
                    
                </div>
            </form>
        </section>
    }

}

export default Register2pf