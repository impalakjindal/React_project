import React from 'react'
import Header from '../others/header'
import TaskListNumbers from '../others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'
const EmployeeDashboard = () => {
  return (
    <div className='text-white'>
        <div className='p-10 bg-[#1C1C1C] h-screen'>
            <Header />
            <TaskListNumbers />
            <TaskList />
        </div>
    </div>
  )
}

export default EmployeeDashboard
