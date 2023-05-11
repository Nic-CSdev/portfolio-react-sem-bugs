import React from 'react'
import script from '../script';

const Dropdown = () => {
  return (
    <><div className='dropdown-btn'>
          <div className='dropdown'> 
              <span className='left-icon'></span>
              <span className='right-icon'></span>
              <div className='items'>
                <a href="#home" style={{'--i':'1'}}><span></span>Início</a>
                <a href="#about" style={{'--i':'2'}}><span></span>Sobre</a>
                <a href="#skills" style={{'--i':'3'}}><span></span>Habilidades</a>
                <a href="#work" style={{'--i':'4'}}><span></span>Projetos</a>
                <a href="#contact" style={{'--i':'5'}}><span></span>Contato</a>
              </div>
              
          </div>
      </div>
      <script src={script}></script></>
  )
}

export default Dropdown