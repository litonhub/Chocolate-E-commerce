import './App.css'
import { Routes, Route } from "react-router";
import Home from './pages/Home';
import MainLayouts from './components/layouts/MainLayouts';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Forget from './pages/Forget';
import Verify from './pages/Verify';
import Createpass from './pages/Createpass';

function App() {


  return (
    <Routes>
      <Route element={<MainLayouts />}>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/create-new-password" element={<Createpass />} />
      </Route>
    </Routes>
  )
}

export default App
