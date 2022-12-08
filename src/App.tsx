import React from "react"
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import TimerPage from "./pages/Timer"

const App = () => {
  console.log("123222")

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<TimerPage />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
