import ButtonGradient from './assets/svg/ButtonGradient'
import Header from './components/Header'
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import Collaboration from './components/Collaboration';
import Footer from './components/Footer';

const App = () => {

  return (
    <>
    <div className='app-container pt-[4.75rem] lg:pt[5.25rem] overflow-hidden'>
      <Header />
      <Hero />
      <Collaboration />
      <Benefits />
      <Pricing />
      <Footer />
    </div>
    <ButtonGradient />
  </>
  )
}

export default App
