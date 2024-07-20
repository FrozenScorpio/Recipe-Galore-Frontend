import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Create';
import Posts from './components/Posts';
import Navbar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/posts" element={<Posts/>}/>
      </Routes>
    </div>
  );
}

export default App;
