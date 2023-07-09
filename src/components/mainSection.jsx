import React from 'react'
import UpperSection from './upperSection'
import MiddleSection from './middleSection'
import LowerSection from './lowerSection'

const mainSection = ({ place, data }) => {
  return (
    <div className='text-white bg-hot w-[500px] h-[600px] rounded-2xl flex flex-col justify-start items-center'>
      <UpperSection place={place} temp={Math.round(data?.main?.temp - 273)} />
      <MiddleSection lat={data?.coord?.lat} lon={data?.coord?.lon} sunrise={data?.sys?.sunrise} sunset={data?.sys?.sunset} />
      <LowerSection status={data?.weather[0]?.description} pressure={data?.main?.pressure} humidity={data?.main?.humidity} windSpeed={data?.wind?.speed} />
    </div>
  )
}

export default mainSection  