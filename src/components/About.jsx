import React from 'react'

const About = () => {
  return (
    <div name='about'id='about' className='w-full h-screen bg-[#030507] text-gray-300 about-content'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-purple-700'>
                        Sobre
                    </p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-4 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Olá! Eu sou Nicolas, é um prazer tê-lo aqui. Por favor, dê uma olhada ao redor da página.</p>
                </div>
                <div>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, architecto facere id error expedita debitis a. Sint eaque a nisi corporis doloribus. Repellendus magnam veniam eius dolores quam corporis nulla.
                    </p>
                </div>

                <button className='text-white group px-6 py-3 my-2 flex items-center hover:bg-[#800080] hover:border-[#e94de9] ver-curriculo'> <i></i><span>
                    <a href="cv" target='_blank'>
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