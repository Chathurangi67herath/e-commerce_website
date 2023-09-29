import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Navbar from "./components/navbar";
import Shop from './pages/shop/shop';
import Card from './pages/card/card';

function App() {
  return (
   <div className='App'>
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Shop></Shop>} ></Route>
        <Route path='/card'element={<Card></Card>}></Route>
      </Routes>
    </Router>
   
  
   </div>
  );
}

export default App;
