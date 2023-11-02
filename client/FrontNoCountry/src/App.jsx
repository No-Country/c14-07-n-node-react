import './App.css'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import LoadingScreen from './components/loader/LoadingScreen '
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from "react";

function App() {

    //estado pantalla de carga
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      // Simulamos un tiempo de carga de 2 segundos
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    }, []);

    if (isLoading) {
      return <LoadingScreen />;
    } else {
      return (
        <div className='App'>
        <Header />
        <Routes>
          <Route path='/login' element= {<Login/>}/>
          <Route path='/register' element= {<Register/>}/>
          <Route path='/contact' element= {<Contact/>}/>
          <Route path='/about' element= {<About/>}/>
        </Routes>
        <Footer />
      </div>
      );
    }

  
}

export default App
