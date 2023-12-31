import Hero from './scenes/Hero/Hero'
import About from './scenes/About/About'
import Services from './scenes/Services/Services'
import Contact from './scenes/Contact/Contact'
import Footer from './components/Footer/Footer'
import NavigationBar from './components/NavigationBar/NavigationBar'
import Blogs from './scenes/Blogs/Blogs'
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Blogs />
      <Contact />
      <Footer />
      <NavigationBar />
      <Toaster />
    </div>
  )
}

export default App;