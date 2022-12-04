import React from "react"
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<div>123</div>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
