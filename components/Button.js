import React from 'react';

const Button = (props) => {

    return (
        <div>
            <button
            style={{ backgroundColor: props.backgroundColor, margin:"10px" }}
            className="btn btn-lg"
            >
                {props.title}
            </button>
        </div>
    )
}

export default Button;