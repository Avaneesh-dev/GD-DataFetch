import './App.css'
import { Routes, Route } from "react-router-dom"
import Table from './Table'
import TableHero from './TableHero'
import Login from './login'
import Home from './Home'
import Logout from './Logout'

function App() {
  return (
    <>    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path="/contactdata" element={<Table/>} />
        <Route path="/surveydata" element={<TableHero/>} />
        <Route path="/logout" element={<Logout/>} />
      </Routes>
      <p className="read-the-docs">
        © 2023{" "}
        <a href="https://GreenDumbells.com/ " className="footerText">
          GreenDumbells
        </a>
        . All Rights Reserved.
      </p>
    </>
  )
}

export default App
