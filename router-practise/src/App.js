import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Shop from './Components/Shop/Shop';
import Orders from './Components/Orders/Orders';
import About from './Components/About/About';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>

    </div>
  );
}

export default App;
