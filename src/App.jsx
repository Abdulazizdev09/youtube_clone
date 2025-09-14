import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Home from "./components/Home/Home"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './components/NotFound/NotFound'
import VideoPage from './components/VideoPage/VideoPage'
import SubscribedChannels from './components/ChannelList/ChannelList'

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/video/:id' element={<VideoPage />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/subscriptions' element={<SubscribedChannels />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>

  )
}

export default App

