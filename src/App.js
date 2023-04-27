import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Cart from './components/Cart';
import CreateUser from './components/CreateUser';
import { Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create_user" element={<CreateUser />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
    </div>
  );
}

export default App;
