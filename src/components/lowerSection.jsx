import React from 'react'

const lowerSection = () => {
  return (
    <div className='w-[380px] mt-3 flex flex-col justify-center items-center'>
      {/* weather status */}
      <div className="w-[380px] text-[30px] border-2 text-center rounded-xl">
        {/* weather status value  */}
        BROKEN CLOUDS
      </div>
      {/* pressure, humidiy and wind speed  */}
      <div className="w-[380px] pb-2 mt-3 bg-white rounded-xl text-black flex justify-center items-center">
        {/* pressure  */}
        <div className="flex flex-col justify-center items-center">
          {/* pressure value  */}
          <div className="text-[30px]">
            1011
          </div>
          {/* pressure title  */}
          <div className="text-[15px] mt-[-15px]">
            Pressure
          </div>
        </div>
        {/* humidity  */}
        <div className="mx-6 flex flex-col justify-center items-center">
          {/* humidity value  */}
          <div className="text-[30px]">
            59%
          </div>
          {/* humidity title  */}
          <div className="text-[15px] mt-[-15px]">
            Humidity
          </div>
        </div>
        {/* wind speed  */}
        <div className="flex flex-col justify-center items-center">
          {/* wind speed value  */}
          <div className="text-[30px]">
            3.09km/h
          </div>
          {/* wind speed title  */}
          <div className="text-[15px] mt-[-15px]">
            Wind Speed
          </div>
        </div>
      </div>
    </div>
  )
}

export default lowerSection