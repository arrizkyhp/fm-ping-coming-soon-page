import Header from 'layouts/Header'
import React from 'react'

import HeroImage from "assets/images/illustration-dashboard.png";
import Footer from 'layouts/Footer';
import Attribution from 'layouts/Attribution';

export default function Home() {
    return (
        <main>
            <Header />
            <img src={HeroImage} alt="Hero" className="hero" />
            <Footer />
            <Attribution />
        </main>
    )
}
