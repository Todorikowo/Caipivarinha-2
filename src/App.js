import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Home from './pages/Home';
import Carrinho from "./pages/Carrinho";
import Account from './pages/Account';
import Register from './pages/Register';
import  {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pay from './pages/Pay';

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
          <Route path="/conta" exact element={<Account />} />
          <Route path="/registro" exact element={<Register />} />
          {/*WIP <Route path="/pagar" exact element={<Pay />} /> */}
        </Routes>
        {/* footer */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
