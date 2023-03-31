import React from 'react'


const Button = (props) => {

    console.log(props.title + " is Calling...")

    return (
        <div>
            <button onClick={props.action}>{props.title}</button>
          
        </div>
    )
}

export default React.memo(Button)