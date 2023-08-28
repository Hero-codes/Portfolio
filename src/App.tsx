import Hero from './scenes/Hero/Hero'
import About from './scenes/About/About'
import Services from './scenes/Services/Services'
import Contact from './scenes/Contact/Contact'
import Footer from './components/Footer/Footer'
import NavigationBar from './components/NavigationBar/NavigationBar'

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
      <NavigationBar />
    </div>
  )
}

export default App;