import React from 'react'
import Cv from '../assets/cv.png'

const CV = () => {
  return (
    <div id='cv' className='flex justify-center bg-[#030507]'>
        <img src={Cv} alt="curriculo" />
    </div>
  )
}

export default CV