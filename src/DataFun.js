
const DataFun = () => {
    const username = "Ram";

    const user = {name:"Sudha",city:"Mumbai",pincode:789456};
    const subjects = ["HTML","CSS","JavaScript","jquery","React","bootstrap"];

    return <div>
        <h1>Functional Component</h1>
        <h3>Welcome to {username}</h3>
        <h3>UserInfo: {user.name} from {user.city}</h3>
        <h3>Subjects: {subjects.join(", ")}</h3>

        <ul>
            {
                subjects.map((items,index,arr)=><li key={index}>{item}</li>)
            }
        </ul>
    </div>
}

