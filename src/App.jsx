import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, Carousel } from './components'

const App = () => {
  return (
   <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
        {/* <section className="relative flex justify-center items-center py-12">
          <div className="w-[85%] md:w-[70%] lg:w-[55%] max-w-4xl z-10"> */}
            {/* <Carousel /> */}
          {/* </div> */}
        {/* </section> */}
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
   </BrowserRouter>
  )
}

export default App
