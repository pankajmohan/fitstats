import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Protected from "./components/Protected";
import Dashboard from './components/Dashboard';
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header></Header>
      <BrowserRouter>
        <Navbar></Navbar>
        <div className='flex-grow'>
        <Routes>
          <Route path="/" element={<Protected Component={Dashboard} />} />
        </Routes>
        </div>
      </BrowserRouter>
      <Footer></Footer>

    </div>
  )
}