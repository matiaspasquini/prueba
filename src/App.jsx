import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Features from "./components/Features";
import './App.css'
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

function App() {


  return (
    <>
      <Navbar/>
      <Hero/>
      <HowItWorks />
      <Features />
      <Testimonials />
      <FAQ />
      <CallToAction />
      <Footer />

    </>
  )
}

export default App
