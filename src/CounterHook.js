//This is a Functional Component not a CLASS Component !!!

import { useState } from "react";

const CounterHook = () =>{

    const[course, setCourse] = useState("Reactjs Training");
    const[counter, setCounter] = useState(0); 

    const[info, getInfo] = useState({
        counter:0,
        course:"HTML"
    });
    
    return <section>
        <h1>Hooks Demo - useState</h1>
        <h4>Title: {course}</h4>
        <h4>Counter: {counter}</h4>
        <p>{info.counter} and {info.course}</p>
    </section>
}

export default CounterHook;