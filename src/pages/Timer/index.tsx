import React from "react"
import Clock from "../../components/Clock"
import Tasks from "../../components/Tasks"

const Timer = () => {
  return (
    <div>
      <div className="clock">
        <Clock />
      </div>
      <div className="task-container">
        <Tasks />
      </div>
    </div>
  )
}

export default Timer
