import { Component } from "react";

class Employeespf extends Component
{
    employee = [
        {name:"Ram",city:"Mumbai",designation:"Data Scientist",salary:2036900},
        {name:"Raj",city:"Delhi",designation:"Data Engineer",salary:210400},
        {name:"Shyam",city:"Kolkata",designation:"Java Developer",salary:765120},
        {name:"Aditya",city:"Bangalore",designation:"Web Developer",salary:103245},
        {name:"Nitin",city:"Chennai",designation:"Full Stack Devloper",salary:714520}
    ];

    render()
    {
        return <div>
            <h1>Employees List</h1>
            {
                (this.employee.length)>0 ? <div>
                    <p>Total number of Employees: {this.employee.length}</p>
                    <table border={2} cellPadding="10">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>City</th>
                                <th>Designation</th>
                                <th>Salary</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.employee.map((emp,index) => <tr key={index}>
                                    <td>{emp.name}</td>
                                    <td>{emp.city}</td>
                                    <td>{emp.designation}</td>
                                    <td>{emp.salary}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                    </div> : <p>Sorry no data available</p>
            }
        </div>
    }


}

export default Employeespf