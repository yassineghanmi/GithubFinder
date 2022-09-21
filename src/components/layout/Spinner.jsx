import React from 'react'
import spinner from './assets/spinner.gif'
function Spinner() {
  return (
    <div className='w-100 mt-15'><img width={80} className='text-center mx-auto' src={spinner} alt="spinner"/></div>
  )
}

export default Spinner