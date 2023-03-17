import { Component } from "react";

class UsersListCls extends Component
{
    inst = "Sudha tech";

    studentsList = [
        {firstname:"Ram",lastname:"Kapoor",city:"Mumbai",pincode:78944},
        {firstname:"Raj",lastname:"Kapoor",city:"Bangalore",pincode:28914},
        {firstname:"Aman",lastname:"Kapoor",city:"Delhi",pincode:45044},
        {firstname:"Rishi",lastname:"Kapoor",city:"Mumbai",pincode:99944},
        {firstname:"Rakesh",lastname:"Kapoor",city:"Hyderabadh",pincode:33944}
    ];

    greeting()
    {
//        document.write("Hello");
//        return this.inst.toLocaleLowerCase();
//        return "Ram";
        return this.getdate();
    }

    getdate()
    {
        const dt = new Date();

        return dt.toLocaleDateString();
    }


    render()
    {
        return <div>
            <h1>Users list Class Component - {this.inst}</h1>
            <h3>This is {this.greeting()}</h3>
            <h4>Date: {this.getdate()}</h4>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>UserName</th>
                        <th>City</th>
                        <th>PinCode</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.studentsList.map((item,index)=> <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item.firstname+" " + item.lastname}</td>
                            <td>{item.city}</td>
                            <td>{item.pincode}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    }

}

export default UsersListCls;