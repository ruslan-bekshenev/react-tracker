import React from "react"
import { Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div>123</div>}></Route>
      </Routes>
    </div>
  )
}

export default App
