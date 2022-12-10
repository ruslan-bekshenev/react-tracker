import React from "react"

import Tasks from "../../components/Tasks"
import Timer from "../../components/Timer"

const TimerPage = () => {
  return (
    <div>
      123
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
