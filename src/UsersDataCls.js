import { Component } from "react";
import Home from "./Home";
import Login from "./Login";

class UsersDataCls extends Component
{
    username = "Ram";
    isUserLoggedIn = true;
    
    render() {
       /* return (
            <div>
            <h1>Welcome to {this.username}</h1>
            <h1>Please Login</h1>
        </div>
        )
        */

        return <div>
            {
                this.isUserLoggedIn ? <Home /> : <Login />
            }
        </div>
    }

}

export default UsersDataCls;