import { Component } from "react";

class MyList extends Component
{
    name = "Ram"

    render()
    {
{/*      console.log(this.props.employees);            {/* you are not passing props as a argument so you need to write "this.props" */}      
{/*        console.log(this.name);      */}
        console.log(this.props);
        return <div>                        
            <h1>Employees List - {this.name}</h1>
            {
                this.props.employees.length > 0 ? <table>       {/*we are writing "this.props" because we are getting the component from somewhere else */}
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>City</th>
                            <th>Salary</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.employees.map((item,index) => <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.city}</td>
                                <td>{item.salary}</td>
                                <td>{item.designation}</td>
                            </tr>)
                        }
                    </tbody>
                </table> : <p>Sorry! Employees not found</p>
            }
        </div>
    }
}

export default MyList;