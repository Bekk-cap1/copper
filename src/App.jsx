
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/pages/about/About';
import Catalog from './components/pages/catalog/Catalog';
import Home from './components/pages/home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>} />
        <Route path='/catalog' element={<Catalog/>} />
      </Routes>
    </div>
  );
}

export default App;
