import { useEffect } from "react";
import { useState } from "react"

const EffectDemo = () =>{

    const[counter,setCounter] = useState(0);

//useEffect() = componentDidMount() + componentDidUpdate() + componentWillUnmount()

    useEffect(()=>{
        //console.log("This is UseEffect")                //Once the component is fully rendered then only useEffect() hook is called or rendered
        //document.title = "Hello World"                      //Updates the title on the tab 
    //    document.title = "You clicked ${counter} times";
        document.title = "You clicked " + counter + " times";
    });

    console.log("This is FC")

    const incrementCounter =()=>
    {
        setCounter(counter + 1)

    }

    return <section>
        <h1>UseEffect Demo</h1>
        <h3>Counter - {counter}</h3>
        <button onClick={incrementCounter}>Increment</button>
    </section>

}

export default EffectDemo