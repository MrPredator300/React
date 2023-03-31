import React from 'react'

const Title = () => {
    console.log("Title is Calling...")

    return (
        <div>
            <h1>UseCallBack Demo</h1>
        </div>
    )
}

export default React.memo(Title)