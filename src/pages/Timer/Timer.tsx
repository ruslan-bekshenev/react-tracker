import React from "react"

import MainLayout from "../../components/Layouts/MainLayout"
import Tasks from "../../components/Tasks"
import Timer from "../../components/Timer"

const TimerPage = () => {
  return (
    <MainLayout>
      <div>
        123
        <div className="clock">
          <Timer />
        </div>
        <div className="task-container">
          <Tasks />
        </div>
      </div>
    </MainLayout>
  )
}

export default TimerPage
