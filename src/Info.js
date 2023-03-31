import React from 'react'

const Info = (props) => {

    console.log(props.title + " is Calling...")

    return (
        <div>
            <h3>{props.title} : {props.value}</h3>
        </div>
    )
}

export default React.memo(Info)