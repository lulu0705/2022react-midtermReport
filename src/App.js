import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Home from './pages/Home';
import Product from './pages/Product';

import Indoor from './pages/Indoor'
import Blockage from './pages/Blockage'
import Bugs from './pages/Bugs'
import DoorWindowFix from './pages/DoorWindowFix'
import Storage from './pages/Storage'
import Feedback from './pages/Feedback';
import NavBar from './components/NavBar';
import Reserve from './pages/Reserve';
import Footer from './components/Footer';

import Components from './pages/Components';

function App() {
  return (
  //   <>
  //   <NavBar />
  //   <Routes>
  //     <Route path="/" element={<Home />} />
  //     <Route path="/product/:productId" element={<Product />} />
  //   </Routes>    
  // </>

  <>
    <NavBar />
      <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/components" element={<Components />} />
            <Route path="/product/:productId" element={<Product />} />
            
            <Route path="/indoor" element={<Indoor />} />
            <Route path="/storage" element={<Storage />} />
            <Route path="/dustmite" element={<Bugs />} />
            <Route path="/blockage" element={<Blockage />} />
            <Route path="/doorwindowfix" element={<DoorWindowFix />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/reserve" element={<Reserve />} />
          </Routes>

        </div>
        <Footer />
    </>
  );
}

export default App;
