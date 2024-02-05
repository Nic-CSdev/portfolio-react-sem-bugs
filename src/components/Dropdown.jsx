import React from 'react'


const Dropdown = () => {
  return (
    <div className="dropdown">
      <nav>
        <input type="checkbox" id="menu-hamburguer" ></input>
          <label for="menu-hamburguer">
            <div class="menu">
              <span class="hamburguer"></span>
            </div>
          </label>
          

          <ul>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#skills">Habilidades</a></li>
            <li><a href="#work">Projetos</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
      </nav>
    </div>
  )
}

export default Dropdown