import { Component } from "react";

class StateDemo extends Component
{

    constructor()
    {
        super();
        this.state = {
            name: "Ram",
            price: 12000,
            user: {city:"Hyderabad"},
            subjects: ["html","css","javaScript","Bootstrap"],
        }
    }

    render()
    {
        
        const {name,price,user,subjects} = this.state;      //Mistake made was taken const [] = this.state (was taking it in array format) it must be const {} = this.state

        const {title} = this.props;

        return <section>
            <h1>{title}</h1>
            <h2>Welcome to {name} from {user.city}</h2>
            <p>Price:{price}</p>
            {
               subjects && subjects.length > 0 ? <ul>
                    {
                        subjects.map((item,index)=><li key={index}>{item}</li>)
                    }
                </ul> : null
            }
        </section>

    }

}

export default StateDemo;