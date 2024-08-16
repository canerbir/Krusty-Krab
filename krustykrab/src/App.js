import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from "./components/Home"
import About from './components/About';
import Menu from "./components/Menu"
import Crew from "./components/Crew"
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-imageBg bg-no-repeat bg-cover bg-center h-screen">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/menu" exact element={<Menu />} />
        <Route path="/crew" exact element={<Crew />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
