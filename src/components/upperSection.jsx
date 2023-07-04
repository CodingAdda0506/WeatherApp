import React from 'react'

const upperSection = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      {/* upper sectoin -> place */}
      <div className="text-[70px]">
        London
      </div>
      {/* upper section -> temperature */}
      <div className="text-[180px] mt-[-80px] mb-[-70px]">
        18&deg;C
      </div>
      {/* upper sectoin -> date */}
      <div className="text-[30px]">
        2023-7-4
      </div>
    </div>
  )
}

export default upperSection