import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Process from './components/Process'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Team from './components/Team'
import FAQ from './components/FAQ'
import Coverage from './components/Coverage'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Process />
        <Pricing />
        <Testimonials />
        <Team />
        <FAQ />
        <Coverage />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
