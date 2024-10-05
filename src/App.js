import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Home from './pages/Home';
import Carrinho from "./pages/Carrinho";
import  {BrowserRouter as Router, Route, Routes } from "react-router-dom";
// função app
function App() {
  return (
    <div className="App">
      {/* faz o link */}
      <Router>
        {/* top bar */}
        <Navbar />
        {/* rotas dos links */}
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/carrinho' exact element={<Carrinho />} />
          <Route path="/sobre" exact element={<About />} />
        </Routes>
        {/* footer */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
