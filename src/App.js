import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './container/home';
import About from './container/skills';
import Contact from './container/contact';
import Portfolio from './container/portfolio';
import Resume from './container/resume';

function App() {
  return (
    <div className="App">
      {/* particles js */}

      {/* navbar */}

      {/* main page content */}
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route index path='/about' element={<About />} />
        <Route index path='/contact' element={<Contact />} />
        <Route index path='/portfolio' element={<Portfolio />} />
        <Route index path='/resume' element={<Resume />} />
        <Route index path='/skills' element={<Skills />} />
      </Routes>
    </div>
  );
}

export default App;
