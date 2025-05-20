import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom';
import Landing from './pages/Auth/Landing';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import Home from './pages/Dashboard/Home';
import Income from './pages/Dashboard/Income';
import Expense from './pages/Dashboard/Expense';
import UserProvider from './context/UserContext';
import { Toaster } from "react-hot-toast";


const App = () => {
  return (
    <UserProvider>
      <div className='text-2xl text-indigo-600 overflow-x-hidden'>
        <Router>
          <Routes>
            <Route path='/' exact element={<Landing/>} />
            <Route path='/login' exact element={<Login/>} />
            <Route path='/signup' exact element={<Signup/>} />
            <Route path='/dashboard' exact element={<Home/>} />
            <Route path='/income' exact element={<Income/>} />
            <Route path='/expense' exact element={<Expense/>} />
          </Routes>
        </Router>
      </div>

      <Toaster 
        toastOptions={{
          className:"",
          style: {
            fontSize: '13px'
          },
        }}
      />
    </UserProvider>
  );
};

export default App

const Root = () => {
  //Check if token exists in local Storage
  const isAuthenticated = !!localStorage.getItem("token");

  //Redirect to dashboard if authenticated,otherwise to login
  return isAuthenticated ?(
    <Navigate to={<Home/>}></Navigate>
  ) : (
    <Navigate to={<Login/>}></Navigate>
  );

};