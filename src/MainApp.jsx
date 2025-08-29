import React from 'react'
import Header from './components/NewHeader'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

const MainApp = () => {
  return (
    <>
      <Header />
      <main className="main-content">
        <section id="hero">
          <Hero />
        </section>
        <section id="features">
          <Features />
        </section>
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default MainApp
