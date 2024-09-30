import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Protected from "./components/Protected";
import Dashboard from './components/Dashboard';
import Addnewexercise from './components/Addnewexercise';
import Navbar from "./components/Navbar";
import Startnewworkout from './components/Startnewworkout';

export default function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header></Header>
      <BrowserRouter>
        <Navbar></Navbar>
        <div className='flex-grow'>
        <Routes>
        <Route path="/fitstats" element={<Protected Component={Dashboard} />} />
        <Route path="/addexercises" element={<Protected Component={Addnewexercise} />} />
        <Route path="/startnewworkout" element={<Protected Component={Startnewworkout} />} />
        </Routes>
        </div>
      </BrowserRouter>
      <Footer></Footer>

    </div>
  )
}