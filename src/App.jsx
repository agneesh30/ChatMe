import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import { useContext } from "react";
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from "react-router-dom";
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import { AuthContext } from './context/AuthContextProvider';

function App() {
  const { currentUser } = useContext(AuthContext);
  console.log("app called", currentUser);

  const ProtectedRoute = ({ children }) => {
    console.log("producted route", currentUser);
    return currentUser ? children : <Navigate to="/login"></Navigate>
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} ></Route>
        <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>} ></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App


