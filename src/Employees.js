import { Component } from "react";

class Employees extends Component
{
    employees = [
        {name:"Ram",city:"Delhi",designation:"Developer",salary:60000,dob:"1980-05-25"},
        {name:"Rahul",city:"Mumbai",designation:"Tester",salary:50000,dob:"1985-09-21"},
        {name:"Raj",city:"Kolkata",designation:"Digital",salary:35000,dob:"1990-02-14"},
        {name:"Shaym",city:"Bangalore",designation:"Designer",salary:70000,dob:"1995-06-27"},
        {name:"Rohan",city:"Chennai",designation:"Tester",salary:25000,dob:"2000-05-30"}
    ];

    render()
    {
        return <div>
            <h1>Employees List</h1>
            {
                (this.employees.length > 0) ? <div>
                    <p>Total Employees : {this.employees.length}</p>
                        <table border={1} cellPadding="10">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>City</th>
                                    <th>Role</th>
                                    <th>Salary</th>
                                    <th>Dob</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.employees.map((emp,index) =><tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{emp.name}</td>
                                        <td>{emp.city}</td>
                                        <td>{emp.designation}</td>
                                        <td>{emp.salary}</td>
                                        <td>{emp.dob}</td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>  : <p>Sorry! Employees not Found</p>
            }
        </div>
    }
   
    
}

export default Employees;