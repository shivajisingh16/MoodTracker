import React, { FC, memo } from 'react'
import { useSelector } from 'react-redux'
import { happyCountSelector } from '../selectors'

const HappyTracker:FC=()=> {
  const happyMoments = useSelector(happyCountSelector);
  console.log(happyMoments)
  return happyMoments?.length>0 && (
    <>
    <h3 className=' font-bold text-xl self-center'>Happy Moments Tracker</h3>
    <div className='bg-white p-2 flex flex-col gap-2 rounded-md max-h-40 overflow-y-scroll'>
      {happyMoments.map((moment,idx)=>((<h3 key={idx} className='p-2 bg-green-500 text-white rounded-md font-semibold'>You were happy with intenstiy={moment.intensity} on {moment.when.toLocaleDateString()} at {moment.when.toLocaleTimeString()}</h3>)))}
    </div>
    </>
  )
}

export default memo(HappyTracker)