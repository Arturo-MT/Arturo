import React, { lazy, Suspense } from 'react'
import Home from './Components/Home'
import NavBar from './Components/NavBar'
import './App.css'
import Footer from './Components/Footer'
import ResponsiveNav from './Components/Subcomponents/ResponsiveNav'

const AboutMe = lazy(() => import('./Components/AboutMe'))
const Contact = lazy(() => import('./Components/Contact'))
const Projects = lazy(() => import('./Components/Projects'))
const Services = lazy(() => import('./Components/Services'))

function App () {
  return (
    <div className="App">
      <NavBar />
      <ResponsiveNav />
      <div className="flex-col">
        <Home />
        <Suspense fallback={<span className="loader mx-auto" />}>
          <AboutMe />
        </Suspense>
        <Suspense fallback={<span className="loader mx-auto" />}>
          <Services />
        </Suspense>
        <Suspense fallback={<span className="loader mx-auto" />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<span className="loader mx-auto" />}>
          <Contact />
        </Suspense>
        <Footer />
      </div>
    </div>
  )
}

export default App
