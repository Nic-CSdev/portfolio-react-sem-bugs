import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JS from '../assets/javascript.png'
import Node from '../assets/node.png'
import REACT from '../assets/react.png'
const Skills = () => {
  return (
    <div name='skills' id='skills' className='bg-[#030507] text-gray-300 skills-content' >
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-purple-700'>Habilidades</p>
                <p className='py-4'>// Algumas tecnologias com as quais eu trabalhei</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-purple-500 hover:scale-110 duration-300 pt-4'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-purple-500 hover:scale-110 duration-300 pt-4'>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-purple-500 hover:scale-110 duration-300 pt-4'>
                    <img className='w-20 mx-auto' src={JS} alt="JavaScript icon" />
                    <p className='my-4'>JS</p>
                </div>
                <div className='shadow-md shadow-purple-500 hover:scale-110 duration-300 pt-4'>
                    <img className='w-20 mx-auto' src={REACT} alt="React icon" />
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-purple-500 hover:scale-110 duration-300 pt-4' >
                    <img className='w-20 mx-auto' src={Node} alt="Node.js icon" />
                    <p className='my-4'>Node</p>
                </div>
            
            </div>
        </div>
    </div>
  )
}

export default Skills