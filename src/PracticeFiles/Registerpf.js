import { Component } from "react";

class Registerpf extends Component
{
    constructor()
    {
        super()
        this.state = {
            username: "",
            email: ""
        }
    }

    handelSubmit = (event) =>{
        event.preventDefault();
        console.log(this.state)

    }

    usernameHandeler = (event) =>{
        this.setState({
            username: event.target.value
        })
    }

    emailHandeler = (event) =>{
        this.setState({
            email: event.target.value
        })
    }


    render()
    {
        return <section>
            <h1>Register Here</h1>
            <form method="POST" action="" onSubmit={this.handelSubmit}>
                <div className="formgroup">
                    <label>Username</label>
                    <input type="text" id="uname" className="formcontrol" onChange={this.usernameHandeler} value= {this.state.username} />
                </div>
                <div className="formgroup">
                    <label>Email</label>
                    <input type="text" id="email" className="formcontrol" onChange={this.emailHandeler} value={this.state.email} />
                </div>
                <div className="formgroup">
                    <input type="Submit" className="btn" value="Register" />
                </div>
            </form>
        </section>
    }

}

export default Registerpf