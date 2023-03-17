
const EventFun =()=> {

    const someAction = () => {
        alert("Hello")
    }

    return <div>
        <h1>Event handling</h1>
          <button onClick={someAction}>Click Here</button>     
      {/*  <button onMouseOver={someAction}>Click Here</button>  */}
    </div>

}

export default EventFun;
