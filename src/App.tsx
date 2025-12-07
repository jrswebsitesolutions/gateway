import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Sundays from './pages/Sundays';
import Ministries from './pages/Ministries';
import Watch from './pages/Watch';
import Values from './pages/Values';
import Contact from './pages/Contact';
import BeOurGuest from './pages/BeOurGuest';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/sundays" element={<Sundays />} />
            <Route path="/be-our-guest" element={<BeOurGuest />} />
            <Route path="/ministries" element={<Ministries />} />
            <Route path="/watch" element={<Watch />} />
            <Route path="/values" element={<Values />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
