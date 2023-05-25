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
                    <p className='py-4'>// Algumas tecnologias com as quais eu trabalhei</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='card'>
                        <div className="card-inner">
                            <div className="card-front">
                                <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                                <p className='my-4'>HTML</p>
                            </div>
                            <div className="card-back">
                                <p>Experiência em HTML5 desde os conceitos básicos até alguns mais avançados</p>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className="card-inner">
                            <div className="card-front">
                                <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                                <p className='my-4'>CSS</p>
                            </div>
                            <div className="card-back">
                                <p>Experiência em CSS3 desde os conceitos básicos até alguns mais avançados</p>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className="card-inner">
                            <div className="card-front">
                                <img className='w-20 mx-auto' src={JS} alt="JavaScript icon" />
                                <p className='my-4'>JS</p>
                            </div>
                            <div className="card-back">
                                <p>Experiência baseada apenas em conceitos básicos sobre Javascript</p>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className="card-inner">
                            <div className="card-front">
                                <img className='w-20 mx-auto' src={REACT} alt="React icon" />
                                <p className='my-4'>React</p>
                            </div>
                            <div className="card-back">
                                <p>Experiência baseada no conhecimento sobre conceitos desde básicos à intermediários sobre ReactJS</p>
                            </div>
                        </div>
                    </div>
                    <div className='card' >
                        <div className="card-inner">
                            <div className="card-front">
                                <img className='w-20 mx-auto' src={Node} alt="Node.js icon" />
                                <p className='my-4'>Node</p>
                            </div>
                            <div className="card-back">
                                <p>Experiência baseada apenas em conceitos básicos sobre NodeJS</p>
                            </div>
                        </div>
                    </div>
                    <div className='card' >
                        <div className="card-inner">
                            <div className="card-front">
                                <img className='w-20 mx-auto' src={Tailwind} alt="Node.js icon" />
                                <p className='my-4'>Tailwind</p>
                            </div>
                            <div className="card-back">
                                <p>Experiência baseada no conhecimento sobre conceitos desde básicos à intermediários sobre o framework Tailwind</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Skills