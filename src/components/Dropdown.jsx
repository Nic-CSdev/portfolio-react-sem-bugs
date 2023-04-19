import React from 'react'
import script from '../script';
class Demo extends React.Component {
componentDidMount () {
    script("../script.js");
    }
}

const Dropdown = () => {
  return (
    <><div className='dropdown-btn'>
          <div className='dropdown'> 
              <span className='left-icon'></span>
              <span className='right-icon'></span>
              <div className='items'>
                <a href="#home" style={{'--i':'1'}}><span></span>Home</a>
                <a href="#about" style={{'--i':'2'}}><span></span>About</a>
                <a href="#skills" style={{'--i':'3'}}><span></span>Skills</a>
                <a href="#work" style={{'--i':'4'}}><span></span>Work</a>
                <a href="#contact" style={{'--i':'5'}}><span></span>Contact</a>
              </div>
              
          </div>
      </div>
      <script src='../script.js'></script></>
  )
}

export default Dropdown