import {Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import ReposLayout from './layout/ReposLayout'
import Repos from './pages/Repos';
import Footer from './components/Footer';
function App() {
  return(
    <>
          <div className='min-h-screen flex flex-col bg-zinc-50'>
          <div className="flex-row">
            <Navbar/>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/skills' element={<Skills/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/repos' element={<ReposLayout/>}>
                  <Route index element={<Repos/>}/>
                </Route>
              </Routes>
              
            </div>
            <Footer/>
          </div>
        </>
  )
}

export default App
