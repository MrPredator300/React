const PropsDemo =(Props)=> {

    /*
    console.log(Props);
    console.log(Props.myname);
    console.log(Props.subjects);        //By this we can access the induvidual information 
    console.log(Props.myaction);
    */

    const {myname,subjects,user,myaction} = Props;

    return <section>
        <h1>Props Demo - {Props.myname}</h1>
        <h3>Welcome to {user.fname + " " + user.lname}</h3>
        <h3>{subjects.join(", ")}</h3>
        <button onClick={Props.myaction}>Click Here</button>
    </section>
}

export default PropsDemo