import React from 'react'
import UpperSection from './upperSection'
import MiddleSection from './middleSection'
import LowerSection from './lowerSection'

const mainSection = () => {
  return (
    <div className='text-white bg-hot w-[500px] h-[600px] rounded-2xl flex flex-col justify-start items-center'>
      <UpperSection />
      <MiddleSection />
      <LowerSection />
    </div>
  )
}

export default mainSection  