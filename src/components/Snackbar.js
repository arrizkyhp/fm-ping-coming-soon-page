import React, { useState, forwardRef, useImperativeHandle } from 'react'

const Snackbar = forwardRef((props, ref) => {
    const [showSnackbar, setShowSnackbar] = useState(false);

    useImperativeHandle(ref, () => ({
        show() {
            setShowSnackbar(true);
            setTimeout(() => {
                setShowSnackbar(false)
            }, 3000);
        },
    }))

    return (
      <div
        id={showSnackbar ? "show" : "hide"}
        className="snackbar"
        style={{backgroundColor: props.type === "success" ? "#00F593" : "FF0033"}}
    >
        <div className="icon">{props.type === "success" ? <h1>&#10004;</h1> : <h1>&#10006;</h1>}</div>
        <div className="message">{props.message}</div>
      </div>
    );
})

export default Snackbar
