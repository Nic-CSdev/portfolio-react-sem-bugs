import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JS from '../assets/javascript.png';
import Node from '../assets/node.png';
import REACT from '../assets/react.png';
import Tailwind from '../assets/Tailwind.png';
const Skills = () => {
    return (
        <div name='skills' id='skills' className='bg-[#030507] text-gray-300 skills-content' >
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full pt-28'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-purple-700'>Habilidades</p>
                    <p className='py-4'>Algumas tecnologias com as quais eu trabalhei</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='card pb-7'>
                        <div className="card-inner">
                            <i class="fa-brands fa-html5 text-7xl text-purple-600 cursor-pointer"></i>
                        </div>
                    </div>
                    <div className='card'>
                        <div className="card-inner">
                            <i class="fa-brands fa-css3-alt text-7xl text-purple-600 cursor-pointer"></i>
                        </div>
                    </div>
                    <div className='card'>
                        <div className="card-inner">
                            <i class="fa-brands fa-js text-7xl text-purple-600 cursor-pointer"></i>
                        </div>
                    </div>
                    <div className='card'>
                        <div className="card-inner">
                            <i class="fa-brands fa-react text-7xl text-purple-600 cursor-pointer"></i>
                        </div>
                    </div>
                    <div className='card'>
                        <div className="card-inner">
                            <i class="fa-brands fa-node-js text-7xl text-purple-600 cursor-pointer"></i>
                        </div>
                    </div>
                    <div className='card' >
                        <div className="card-inner">
                            <i class="fa-brands fa-bootstrap text-7xl text-purple-600 cursor-pointer"></i>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Skills