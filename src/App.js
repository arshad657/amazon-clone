import React, {useEffect} from "react";
import "./App.css";
import Home from "./Home/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Checkout from "./Checkout/Checkout";
import Login from "./Login/Login"
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment/Payment"
 
function App() {
const [{}, dispatch] = useStateValue();

useEffect(() => {
  auth.onAuthStateChanged(authUser => {
    if (authUser) {
      dispatch({
        type: "SET_USER",
        user: authUser
      })
    }else{
      dispatch({
        type:"SET_USER",
        user: null
      })
    }
  })
}, [])

  return (
    //BEM
    <Router>
    <div className="App">
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/checkout' element={<Checkout />}/>
      <Route path='/payment' element={<Payment />} />
      </Routes>
    </div>
    </Router>
    
  );
}

export default App;
