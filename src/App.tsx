import React from "react"
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import Timer from "./pages/Timer"

const App = () => {
  console.log("123")

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Timer />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
