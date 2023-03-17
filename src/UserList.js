const UsersList = () => {

    const inst = "Sunadh Tech";

    const studentsList = [
        {firstname:"Ram",lastname:"Kapoor",city:"Mumbai",pincode:78944},
        {firstname:"Raj",lastname:"Kapoor",city:"Bangalore",pincode:28914},
        {firstname:"Aman",lastname:"Kapoor",city:"Delhi",pincode:45044},
        {firstname:"Rishi",lastname:"Kapoor",city:"Mumbai",pincode:99944},
        {firstname:"Rakesh",lastname:"Kapoor",city:"Hyderabadh",pincode:33944}
    ];

    const greeting = () =>{
        return "Ram"
    }

    return <div>
        <h1>Greetings from {inst}</h1>
        <h3>{greeting()}</h3>
        <table border="1">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Full Name</th>
                    <th>City</th>
                    <th>Pincode</th>
                </tr>
            </thead>
            <tbody>
                {
                    studentsList.map((item,index)=><tr key={index}>
                        <td>{index+1}</td>
                        <td>{item.firstname + " " + item.lastname}</td>
                        <td>{item.city}</td>
                        <td>{item.pincode}</td> 
                      </tr>)
                }
            </tbody>
        </table>
    </div>


}

export default UsersList;
