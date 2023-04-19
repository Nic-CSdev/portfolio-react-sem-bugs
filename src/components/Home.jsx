import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {TypeAnimation} from 'react-type-animation';


const Home = () => {
  return (
    <div name='home' id="home" className='w-full h-screen bg-[#030507] home-content'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-purple-700'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Nicolas Coelho</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]  '>
          I'm a 
        <TypeAnimation sequence={[
            'Web Developer',
            2000,
            'Full Stack Developer',
            2000,
            'Front End Developer',
            2000,
          ]}
          speed={50}
          className='text-purple-800 inline pl-4'
          repeat={Infinity}
          
          />
        </h2>
          
        <p className='text-[#8892b0] py-4 max-w-[700px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, nobis cupiditate! Libero laborum nostrum quidem similique, consectetur rem. Architecto sed ipsam neque dolorum asperiores voluptas libero itaque aliquid. Magnam, tempore!</p>

        <div>
          
          <button className='text-white group px-6 py-3 my-2 flex items-center hover:bg-[#800080] hover:border-[#e94de9] button-home'> <i></i><span>
            <a href="#work">
            View Work 
            </a>
          </span>
            
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3'/>
            </span>
          </button>
        </div>
      
      </div>    
    </div>
  )
}

export default Home