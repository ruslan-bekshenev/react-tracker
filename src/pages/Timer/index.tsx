import React from "react"
import Timer from "../../components/Timer"
import Tasks from "../../components/Tasks"

const TimerPage = () => {
  return (
    <div>
      <div className="clock">
        <Timer />
      </div>
      <div className="task-container">
        <Tasks />
      </div>
    </div>
  )
}

export default TimerPage
