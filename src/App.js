import React from 'react'
import './App.css';
import {Routes,Route,BrowserRouter} from "react-router-dom"
import Login from './login';
import Register from './register';
import Dashboard from './Dashboard';
import Home from './Home';
import Contact from './Contact';
import Help from './Help';
import Footer from './NavComponent/Footer';
import Header from './NavComponent/Header';
import Layout from './NavComponent/Layout';
import TopBar from './NavComponent/TopBar';
import ShopPage from './ShopPage';
import { AddCard } from '@mui/icons-material';
import AddProduct from './AdminDashboard/AddProduct';


function App() {
  return (
    <div style={{ background:'aliceblue' }}>  
    
    <TopBar/>
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/help' element={<Help/>} />
          <Route path='/shop' element={<ShopPage/>}/>
          <Route path='/add_cart' element = {<AddCard/>} />
          <Route path='/admin/addProduct' element = {<AddProduct/>}/>
        </Routes>
      </BrowserRouter>
   </Layout>   
   <Footer/>
    </div>
  );
}

export default App;
