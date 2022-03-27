import logo from './logo.svg';
import './App.css';
import Page from './components/Page';
import Data from './components/Data';
import { useState } from "react";
import { auth } from "./firebase-config";
import { signOut } from "firebase/auth";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const signUserOut = () => {
    signOut(auth).then( () => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login"; // redirect to login page after logging out
    } )
  };

  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        {!isAuth ? <Link to="/login"> Login </Link> : <button onClick={signUserOut}>Logout</button>}
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />
      </Routes>
    </Router>
    // <Page>
    //   <p>Hey</p>
    //   <Data />
    // </Page>
  );
}

export default App;
