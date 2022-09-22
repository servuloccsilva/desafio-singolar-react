import React from 'react'

const CardDetails = (props) => {

    console.log(props.title);
    return (
        <div>
            <p>{props.title}</p>
            <p>{props.body}</p>
        </div>
    )
}

export default CardDetails