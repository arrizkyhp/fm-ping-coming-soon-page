import React from 'react'

export default function Button(props) {
    return (
        <button className="btn bg-blue text-white fw-semi-bold">
            {props.children}
        </button>
    )
}