import React from 'react'
import curriculo from '../assets/curriculo.pdf'

const About = () => {
  return (
    <div name='about'id='about' className='w-full h-screen bg-[#030507] text-gray-300 about-content'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-left pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-purple-700'>
                        Sobre
                    </p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full pl-6'>
                <div className='sm:text-left text-4xl font-bold'>
                    <p className='text-about'>Olá! Eu sou Nicolas, é um prazer tê-lo aqui. Por favor, sinta-se livre para dar uma boa olhada na página.</p>
                </div>
            
                <button className='text-white group px-6 py-3 my-2 flex items-center hover:bg-[#800080] hover:border-[#e94de9] ver-curriculo'> <i></i><span>
                    <a href={curriculo} download="curriculo">
                        Ver Currículo
                    </a>
                </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default About