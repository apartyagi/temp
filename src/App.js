import './App.css';
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddEmployeeSections from './components/AddEmployeeSections';
import NoClient from './components/NoClient';
import DashBoard from './components/DashBoard';
import Noemployee from './components/Noemployee'
import AllEmployeList from './components/AllEmployeList';
import SingleEmployee from './components/SingleEmployee';
import LoginPage from './pages/LoginPage';
import Signup from './pages/Signup';
import Payrun from './components/Payrun';
import PayrollView from './components/PayrollView';

function App() {
  return (
    <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<DashBoard/>}/>
          <Route path="noemp" element={<Noemployee/>}/>
          <Route path="pay" element={<Payrun/>}/>
          <Route path="paydet">
            <Route path=":id" element={<PayrollView/>}/>
          </Route>
          <Route path="emp" element={<AddEmployeeSections/>}/>
          <Route path="liemp" element={<AllEmployeList/>}/>
          <Route path="siemp">
            <Route path=":id" element={<SingleEmployee/>}/>
          </Route>
          <Route path="cm" element={<NoClient/>}/>
          
          </Route>

        <Route path="*" element={<h1>Not Found..</h1>}/>
        <Route path='sign' element={<Signup/>} />
          <Route path='login' element={<LoginPage/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  );
}

export default App;

