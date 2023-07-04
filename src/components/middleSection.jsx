import React from 'react'

const middleSection = () => {
  return (
    <div className='mt-2 pb-2 bg-white w-[380px] rounded-xl text-black flex flex-col justify-center items-center'>
      {/* lat and long */}
      <div className="flex justify-center items-center">
        {/* lat main div */}
        <div className="flex flex-col justify-center items-center">
          {/* lat value */}
          <div className="text-[40px]">
          51.5085
          </div>
          {/* lat title  */}
          <div className="text-[15px] mt-[-15px]">
            Latitude
          </div>
        </div>
        {/* lon main div  */}
        <div className="ml-[35px] flex flex-col justify-center items-center">
          {/* lon value */}
          <div className="text-[40px]">
          -0.1257
          </div>
          {/* lon title  */}
          <div className="text-[15px] mt-[-15px]">
            Longitude
          </div>
        </div>
      </div>
      {/* sunrise and sunset */}
      <div className="flex justify-center items-center">
        {/* sunries main div */}
        <div className="flex flex-col justify-center items-center">
          {/* sunrise value */}
          <div className="text-[40px]">
          9:19 AM
          </div>
          {/* sunrise title  */}
          <div className="text-[15px] mt-[-15px]">
            Sunrise
          </div>
        </div>
        {/* sunset main div  */}
        <div className="ml-[35px] flex flex-col justify-center items-center">
          {/* sunset value */}
          <div className="text-[40px]">
          1:49 AM
          </div>
          {/* sunset title  */}
          <div className="text-[15px] mt-[-15px]">
            Sunset
          </div>
        </div>
      </div>
    </div>
  )
}

export default middleSection