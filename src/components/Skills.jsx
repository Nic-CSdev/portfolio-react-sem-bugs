import React from 'react'
import './experience.css'
const Skills = () => {
  return (
    <section name='skills' id='skills' className='experience-section bg-[#030507] text-gray-300 skills-content' >
        <div className=' container max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full pt-28'>
            <div className='section_title text-center'>
                
                <p className='text-gray-300 border-purple-700 text-4xl font-bold inline border-b-4'>Habilidades</p>
                <h2 className='text-purple-800'>Minha área de experiência</h2>
            </div>
            <div className='experience-items'>

                <div className='experience-item'>
                    <div className="experience-info">
                        <p>HTML</p>
                        <p>90%</p>
                    </div>
                    <div className='progress-line' data-percent='90%'>
                        <span style={{width: '90%'}}></span>
                    </div>
                </div>

                <div className='experience-item'>
                    <div className="experience-info">
                        <p>CSS</p>
                        <p>90%</p>
                    </div>
                    <div className='progress-line' data-percent='90%'>
                        <span style={{width: '90%'}}></span>
                    </div>
                </div>

                <div className='experience-item'>
                    <div className="experience-info">
                        <p>JS</p>
                        <p>60%</p>
                    </div>
                    <div className='progress-line' data-percent='60%'>
                        <span style={{width: '60%'}}></span>
                    </div>
                </div>

                <div className='experience-item'>
                    <div className="experience-info">
                        <p>SQL</p>
                        <p>50%</p>
                    </div>
                    <div className='progress-line' data-percent='50%'>
                        <span style={{width: '50%'}}></span>
                    </div>
                </div>

                <div className='experience-item'>
                    <div className="experience-info">
                        <p>React</p>
                        <p>40%</p>
                    </div>
                    <div className='progress-line' data-percent='40%'>
                        <span style={{width: '40%'}}></span>
                    </div>
                </div>

                <div className='experience-item'>
                    <div className="experience-info">
                        <p>Node</p>
                        <p>20%</p>
                    </div>
                    <div className='progress-line' data-percent='20%'>
                        <span style={{width: '20%'}}></span>
                    </div>
                </div>

                <div className='experience-item'>
                    <div className="experience-info">
                        <p>C#</p>
                        <p>30%</p>
                    </div>
                    <div className='progress-line' data-percent='30%'>
                        <span style={{width: '30%'}}></span>
                    </div>
                </div>

                <div className='experience-item'>
                    <div className="experience-info">
                        <p>Java</p>
                        <p>30%</p>
                    </div>
                    <div className='progress-line' data-percent='30%'>
                        <span style={{width: '30%'}}></span>
                    </div>
                </div>

                <div className='experience-item'>
                    <div className="experience-info">
                        <p>PHP</p>
                        <p>40%</p>
                    </div>
                    <div className='progress-line' data-percent='40%'>
                        <span style={{width: '40%'}}></span>
                    </div>
                </div>

                <div className='experience-item'>
                    <div className="experience-info">
                        <p>Python</p>
                        <p>30%</p>
                    </div>
                    <div className='progress-line' data-percent='30%'>
                        <span style={{width: '30%'}}></span>
                    </div>
                </div>

            </div>

        </div>
    </section>
  )
}

export default Skills