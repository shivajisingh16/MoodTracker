import React, { FC, memo } from 'react'
import { useSelector } from 'react-redux'
import { sadCountSelector } from '../selectors'

const SadTrcker:FC=() =>{
  const sadMoments= useSelector(sadCountSelector);
  return sadMoments?.length>0 && (
    <>
    <h3 className=' font-bold text-xl self-center'>Sad Moments Tracker</h3>
    <div className='bg-white p-2 flex flex-col gap-2 rounded-md max-h-40 overflow-y-scroll'>
      {sadMoments.map((moment,idx)=>((<h3 key={idx} className='p-2 bg-red-500 text-white rounded-md font-semibold'>You were sad with intensity={moment.intensity} on {moment.when.toLocaleDateString()} at {moment.when.toLocaleTimeString()}</h3>)))}
    </div>
    </>
  )
}

export default memo(SadTrcker)