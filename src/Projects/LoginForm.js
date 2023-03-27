import { Component } from "react";

class LoginForm extends Component
{
    constructor()
    {
        super()
        this.state = {
            email: "",
            password: ""
        };
    }


    handelSubmit =(event) =>{
        event.preventDefault()
        console.log(event)
    }

    emailHandeler =(event) =>{
        this.setState({
            email: event.target.value
        })
    }

    passwordHandeler =(event) =>{
        this.setState({
            password: event.target.value
        })
    }
    

    render()
    {
        return <section>
            <h1>Login Form</h1>
            <form method="POST" action="" onSubmit={this.handelSubmit}>
                <div className="formgroup">
                    <label>Email</label>
                    <input type="text" id="email" className="LoginForm" onChange={this.emailHandeler} value={this.state.email} />
                </div>
                <div className="formgroup">
                    <label>Password</label>
                    <input type="password" id="password" className="LoginForm" onChange={this.passwordHandeler} value={this.state.password} />
                </div>
                <div className="formgroup">
                    <input type="submit" className="formgroup" value="Submit" />
                </div>
            </form>
        </section>

    }
}

export default LoginForm