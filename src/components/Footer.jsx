import React from 'react'
import Logo from '../assets/Logo.png';
import {Link} from 'react-scroll'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='w-full h-full flex justify-center items-center flex-col px-4 pb-12 bg-[#0b1014] text-white border-t-2 pl-16 z-10'>
        <div>
            <img src={Logo} alt="Logo image" style={{width:'170px', filter:'invert(1)'}} />
        </div>

        <div>
            <nav className='navegacao'>
                <p className='text-center max-sm: pl-20 pr-20 text-base '>
                    Obrigado por visitar o meu portfólio, sinta-se convidado a voltar sempre!
                </p><br />
                <ul className='flex justify-center max-sm: gap-x-1.5 pr-10 pt-4'>
                    <a href="#home">
                        <li className='pr-0 cursor-pointer'>Início</li>
                    </a>
                    <a href="#about">
                        <li className='pr-0 pl-2'>Sobre</li>
                    </a>
                    <a href="#skills">
                        <li className='pr-0 pl-2'>Habilidades</li>
                    </a>
                    <a href="#work">
                        <li className='pr-0 pl-2'>Projetos</li>
                    </a>
                    <a href="#contact">
                        <li className='pl-2'>Contato</li>
                    </a>
                </ul>
                <ul className='flex justify-center pt-12 icones-redes-sociais'>
                    <li>
                        <a className="flex justify-between items-center w-full text-gray-300">
                            <FaLinkedin className="icone" size={30}/>
                        </a>
                    </li>
                    <li >
                        <a href="https://github.com/Nic-CSdev" target="_blank" className="flex justify-between items-center w-full text-gray-300">
                             <FaGithub className="icone rounded-2xl" size={30}/>
                        </a>
                    </li>
                    <li >
                        <a href="https://instagram.com/nic.cs_" target="_blank" className="flex justify-between items-center w-full text-gray-300">
                            <FaInstagram className="icone rounded-lg " size={30}/>
                        </a>
                    </li>
                </ul>


                <p className='text-center pt-10 pl-2'>© Todos os direitos reservados</p>
            </nav>
        </div>

    </footer>
  )
}

export default Footer