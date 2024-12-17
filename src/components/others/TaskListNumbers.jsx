import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        <div className='rounded-xl py-6 px-9 w-[45%] bg-red-400'>
        <h3 className=' text-3xl font-semibold'>New task</h3>
        <h2 className=' text-xl font-medium'>0</h2>
        </div>
        <div className='rounded-xl py-6 px-9 w-[45%] bg-blue-400'>
        <h3 className=' text-3xl font-semibold'>New task</h3>
        <h2 className=' text-xl font-medium'>0</h2>
        </div>
        <div className='rounded-xl py-6 px-9 w-[45%] bg-green-400'>
        <h3 className=' text-3xl font-semibold'>New task</h3>
        <h2 className=' text-xl font-medium'>0</h2>
        </div>
        <div className='rounded-xl py-6 px-9 w-[45%] bg-yellow-400'>
        <h3 className=' text-3xl font-semibold'>New task</h3>
        <h2 className=' text-xl font-medium'>0</h2>
        </div>
    </div>
  )
}

export default TaskListNumbers
