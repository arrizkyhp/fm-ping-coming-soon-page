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
     const snackBarRef = useRef(null);
    const { handleSubmit, register, formState: { errors }} = useForm();

    const onSubmit = (data) => {
        setSubmitted(true)
        snackBarRef.current.show();
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
          <Button>Notify Me</Button>
        </div>
        {errors?.email && <ErrorMessage message={errors.email.message} />}
        <Snackbar ref={snackBarRef} message="Thanks for Subscribing :)" type={SnackbarType.success} />
      </form>
    );
}

export default FormEmail;