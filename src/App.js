
import './App.css';
import Navbar from '../src/Components/Navbar/Navbar.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../src/Pages/Login/Login.jsx'
import Register from '../src/Pages/Register/Register.jsx'
import Home from '../src/Pages/Home/Home.jsx'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
