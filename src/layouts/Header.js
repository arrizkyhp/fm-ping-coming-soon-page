import React from 'react'

import Logo from 'assets/images/logo.svg'
import FormEmail from 'components/FormEmail';

export default function Header() {
    return (
      <div className="header">
        <img src={Logo} alt="Ping" className="logo" />
        <h1 className="title">
          <span className="fw-light text-gray">We are launching </span>soon!
        </h1>
        <p className="description">Subscribe and get notified</p>
        <FormEmail />
      </div>
    );
}
