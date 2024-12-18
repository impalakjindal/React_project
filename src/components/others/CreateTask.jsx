import React from 'react'

const CreateTask = () => {
  return (
    <div>
       <div>
        <form className="flex flex-wrap w-full items-start justify-between ">
          <div className="w-1/2">
            <div>
              <div>
                <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
                <input className="text-sm py-1 w-4/5 rounded outline-none bg-transparent  border-[1px] border-gray-400 mb-4" type="text" placeholder="Make ui design"/>
              </div>
              <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
              <input className="text-sm text-white py-1 w-4/5 rounded outline-none bg-transparent  border-[1px] border-gray-400 mb-4" type="date"/>
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
              <input className="text-sm py-1 w-4/5 rounded outline-none bg-transparent  border-[1px] border-gray-400 mb-4" type="text" placeholder="Employe name" />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
              <input className="text-sm py-1 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"  type="text" placeholder="design,dev,etc" />
            </div>
          </div>

          <div className="w-2/5 flex flex-col items-start">
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent  border-[1px] border-gray-400"name="" id="" cols="30" rows="10"></textarea>
          </div>
          <button className="text-white bg-emerald-500 py-3 hover:bg-emarald-60 px-5 rounded text-sm mt-4 w-full">Create Task</button>
        </form>
      </div>
    </div>
  )
}

export default CreateTask
