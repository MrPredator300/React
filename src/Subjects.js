const Subjects =(Props)=> {

//      console.log(Props)
//      console.log(Props.list)
//      console.log(Props.mytitle)

    return <div>
{/*        <h1>Props in React</h1>      */}

        <h2>{Props.mytitle}</h2>

            {
                Props.list.length > 0 ? <ul>
                    {
                        Props.list.map((item,index)=><li key={index}>{item}</li>)
                    }
                </ul>  : null
            }
    </div>
}

export default Subjects;