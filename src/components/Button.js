import React from 'react'

export default function Button(props) {
    const className = [props.className];

    return (
        <button className={`btn bg-blue text-white fw-semi-bold ${className.join(" ")}`}>
            {props.children}
        </button>
    )
}