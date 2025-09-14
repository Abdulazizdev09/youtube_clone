import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Home from "./components/Home/Home"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './components/NotFound/NotFound'
import VideoPage from './components/VideoPage/VideoPage'
import SubscribedChannels from './components/ChannelList/ChannelList'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>

        <Sidebar>
          <Routes>
            <Route path='/'
              element={
                <ErrorBoundary>
                  <Home />
                </ErrorBoundary>

              } />
            <Route path='/video/:id'
              element={
                <ErrorBoundary>
                  <VideoPage />
                </ErrorBoundary>

              } />
            <Route path='*'
              element={
                <ErrorBoundary>
                  <NotFound />
                </ErrorBoundary>

              } />
            <Route path='/subscriptions'
              element={
                <ErrorBoundary>
                  <SubscribedChannels />
                </ErrorBoundary>

              } />
          </Routes>
        </Sidebar>
      </ErrorBoundary>
    </BrowserRouter>

  )
}

export default App

