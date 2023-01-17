import Navbar from './components/Navbar';
import './App.css'
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <Navbar />
      <main>
        <Carousel />
      </main>
      <Footer />
    </div>
  )
}

export default App
