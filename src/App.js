import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Navbar from "./components/navbar";
import Shop from './pages/shop/shop';
import Card from './pages/card/card';
import { ShopContextProvider } from './context/shop-context';

function App() {
  return (
   <div className='App'>
    <ShopContextProvider>
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Shop></Shop>} ></Route>
        <Route path='/card'element={<Card></Card>}></Route>
      </Routes>
    </Router>
    </ShopContextProvider>
  
   </div>
  );
}

export default App;
