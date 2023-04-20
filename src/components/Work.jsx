import React from 'react'
import WorkImg from '../assets/projeto-ob.png'
import Projeto from '../assets/workImg.jpeg'

const Work = () => {
  return (
    <div name='work' id='work' className='w-full md:h-screen text-gray-300 bg-[#030507] work-content'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-purple-700'>
                    Projetos
                </p>
                <p className='py-6'>// Dê uma olhada em alguns dos meus projetos mais recentes</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div style={{backgroundImage: `url(${WorkImg})`}} className='shadow-lg shadow-[#641e75] group container rounded-md flex justify-center items-center mx-auto content-div'>


                    <div className='opacity-0 group-hover:opacity-100 content-div2'>
                        <div className='pt-8 text-center'>
                             <a href="https://nic-csdev.github.io/projeto-szpc/" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg btn-demo'>
                                    Ver projeto
                                </button>
                             </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${Projeto})`}} className='shadow-lg shadow-[#641e75] group container rounded-md flex justify-center items-center mx-auto content-div'>


                    <div className='opacity-0 group-hover:opacity-100 content-div2'>
                        <div className='pt-8 text-center'>
                             <a href="#work" target=''>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg btn-demo'>
                                    Em Breve
                                </button>
                             </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Projeto})`}} className='shadow-lg shadow-[#641e75] group container rounded-md flex justify-center items-center mx-auto content-div'>


                    <div className='opacity-0 group-hover:opacity-100 content-div2'>
                        <div className='pt-8 text-center'>
                             <a href="#work" target=''>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg btn-demo'>
                                    Em Breve
                                </button>
                             </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Projeto})`}} className='shadow-lg shadow-[#641e75] group container rounded-md flex justify-center items-center mx-auto content-div'>


                    <div className='opacity-0 group-hover:opacity-100 content-div2'>
                        <div className='pt-8 text-center'>
                             <a href="#work" target=''>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg btn-demo'>
                                    Em Breve
                                </button>
                             </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Projeto})`}} className='shadow-lg shadow-[#641e75] group container rounded-md flex justify-center items-center mx-auto content-div'>


                    <div className='opacity-0 group-hover:opacity-100 content-div2'>
                        <div className='pt-8 text-center'>
                             <a href="#work" target=''>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg btn-demo'>
                                    Em Breve
                                </button>
                             </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Projeto})`}} className='shadow-lg shadow-[#641e75] group container rounded-md flex justify-center items-center mx-auto content-div'>


                    <div className='opacity-0 group-hover:opacity-100 content-div2'>
                        <div className='pt-8 text-center'>
                             <a href="#work" target=''>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg btn-demo'>
                                    Em Breve
                                </button>
                             </a>
                        </div>
                    </div>
                </div>
            </div>
            


        </div>
    </div>
  )
}

export default Work