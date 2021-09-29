import { useForm } from 'react-hook-form';
import React, { useState, useRef } from "react";

import Button from 'components/Button';
import ErrorMessage from "./ErrorMessage";
import Snackbar from "components/Snackbar";

const SnackbarType = {
  success: "success",
  fail: "fail",
};

const FormEmail = () => {
     const [submitted, setSubmitted] = useState(false);
     const [animate, setAnimate] = useState("test");
     const snackBarRef = useRef(null);
    const { handleSubmit, register, formState: { errors }} = useForm();

    const onSubmit = (data) => {
        setSubmitted(true)
        setAnimate("animate");
        setTimeout(() => {
            snackBarRef.current.show();
            setAnimate("");
        }, 3000);
}


    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <input
            type="text"
            className={`form-control ${errors?.email ? "error-message" : ""}`}
            placeholder="Your emaill address..."
            name="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: "Please provide a valid email address.",
              },
            })}
          />
          <Button className={animate} >Notify Me</Button>
        {errors?.email && <ErrorMessage message={errors.email.message} />}
        </div>
        <Snackbar ref={snackBarRef} message="Thanks for Subscribing :)" type={SnackbarType.success} />
      </form>
    );
}

export default FormEmail;