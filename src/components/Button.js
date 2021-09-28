import React from 'react'

export default function Button(props) {
    return (
        <button className="btn bg-blue">
            {props.children}
        </button>
    )
}