import React from 'react'

const header = () => {
  return (
    <div className='flex items-end justify-between bg-[#1C1C1C] text-white'>
      <h1 className='bg-[#1C1C1C] text-2xl font-medium'>hello <br/> <span className='bg-[#1C1C1C] font-semibold text-3xl'>Palak</span></h1>
      <button className='text-lg bg-red-600 font-medium text-white px-5 py-2 rounded-small'>Log out</button>
    </div>
  )
}

export default header
