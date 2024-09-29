import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Protected from "./components/Protected";
import Dashboard from './components/Dashboard';
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className=''>
    <Header></Header>
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<Protected Component={Dashboard} />} />
      </Routes>
    </BrowserRouter>
    <Footer></Footer>

    </div>
  )
}