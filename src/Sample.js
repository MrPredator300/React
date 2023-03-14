import { Component } from "react";
//import Welcome from './Welcome';

class Sample extends Component
{
    username = "Raj";
    price = 7985;
    discount = 54;

    render() {
        return <div>
            <h1>Welcome to {this.username}</h1>
            <h2>{window.location.href}</h2>
            <h3>{(Math.PI).toFixed(2)}</h3>
            <h2>Price - {this.price}</h2>
            <h2>Discount - {this.discount}</h2>
            <h2>Total Amount - {(this.price - (this.price*this.discount / 100)).toFixed(2)}</h2>
            <h1>Class Component</h1>
            <h1>This is a Class Component</h1>
            <p>Some discription follows</p>

        </div>
    }

}

export default Sample;