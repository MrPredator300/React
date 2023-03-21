import { Component } from "react";

class RegisterOne extends Component
{
    constructor()
    {
        super()
        this.state = {
            username: '',
            email: ''
        }
    }

    handelSubmit = (event) =>{
        event.preventDefault();
        console.log(this.state)
    }

    render()
    {
        return <section>
            <h1>Register One</h1>
            <form method="POST" action="" onSubmit={this.handelSubmit}>
                <div className="formgroup">
                    <label>Username</label>
                    <input type="text" id="uname" className="formcontrol" onChange={(event) => this.setState({
                        username: event.target.value})} value={this.state.username}/>     
                </div>
                <div className="formgroup">
                    <label>Email</label>
                    <input type="text" id="email" className="formcontrol" onChange={(event) => this.setState({
                        email: event.target.value})} value={this.state.email} />          
                </div>
                <div className="formgroup">
                    <input type="submit" className="btn" value="Register" />
                </div>
            </form>
        </section>
    }

}

export default RegisterOne;