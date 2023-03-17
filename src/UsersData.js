const UsersData = () => {
    const username = "Rakesh Roshan";
//    const isUserLoggedIn = false;
  const isUserLoggedIn = true;    

    return <div>
        {
            (isUserLoggedIn) ? <h1>Welcome to {username} </h1> : <h1>Please Login</h1>  //Ternery Operator
        }
        {
            (isUserLoggedIn) && <h1>{username}</h1>
        }

        <h1>{Math.PI}</h1>
        {/*
        <h1>Welcome to {username}</h1>
        <h1>Please Login</h1>
    */}

    </div>   

/*
    return <div>
        <h1>Welcome to {username}</h1>
        <p>Your Loggedin time is: {new Date().toLocaleString()}</p>
    </div>   
*/
    /*
    if(isUserLoggedIn)
    {
        return <div>
            <h1>Welcome to {username}</h1>
            <p>Your Loggedin time is: {new Date().toLocaleString()}</p>
        </div>   

    }
    else
    {
        return <div>
            <h1>Login Here</h1>
            <p>Create an Account</p>
        </div>

    }
    */

    /*

    return <div>
        <h1>Welcome to {username}</h1>
        <p>Your Loggedin time is: {new Date().toLocaleString()}</p>
    </div>

    */
}

export default UsersData;
