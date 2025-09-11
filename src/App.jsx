import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Home from "./components/Home/Home"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './components/NotFound/NotFound'

function App() {
  return (
    <Sidebar>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Sidebar>

  )
}

export default App

