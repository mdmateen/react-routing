import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Nav from './components/Nav';
import Services from './components/Services';
import PageNotFount from './components/PageNotFount';

function App() {
  return (
    <>

      <Nav />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/servies' element={<Services />} />

      </Routes>
    </>

  );
}

export default App;
