
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/pages/about/About';
import Buy from './components/pages/buy/Buy';
import Catalog from './components/pages/catalog/Catalog';
import Catalog__product from './components/pages/catalog/catalog_product/Catalog__product';
import Home from './components/pages/home/Home';
import News from './components/pages/news/News';
import News_inside from './components/pages/news/news-inside/News_inside'
import Succefull from './components/pages/succefull/Succefull';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>} />
        <Route path='/catalog' element={<Catalog/>} />
        <Route path='/news' element={<News/>}>
        </Route>
        <Route path='/news-inside' element={<News_inside/>}/>
        <Route path='/catalog-product' element={<Catalog__product/>} />
        <Route path='/buy' element={<Buy/>}/>
        <Route path='/succefull' element={<Succefull/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
