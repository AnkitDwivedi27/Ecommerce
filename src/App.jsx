import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import MenPage from './pages/MenPage'
import WomenPage from './pages/WomenPage'
import ChildrenPage from './pages/ChildrenPage'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/men" element={<MenPage />} />
        <Route path="/women" element={<WomenPage />} />
        <Route path="/children" element={<ChildrenPage />} />
      </Routes>
    </div>
  )
}

export default App
