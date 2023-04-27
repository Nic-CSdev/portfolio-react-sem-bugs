import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { HiOutlineMail } from "react-icons/hi";
import Logo from '../assets/Logo.png';
import {Link} from 'react-scroll'
import Dropdown from './Dropdown';


const NavBar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)


    return (
       <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0b1014] text-gray-300 z-10 border-b-2 border-purple-700'>
            <div>
                <img src={Logo} alt="Logo image" style={{width:'170px', filter:'invert(1)'}} />
            </div>
         
                <ul className="hidden lg:flex header">
                    <Link to="home" duration={500} >
                        <li className="item-header">
                            Início    
                        </li>
                    </Link>
                    <Link to="about" duration={500} >
                        <li className="item-header">
                            Sobre
                        </li>
                    </Link>
                    <Link to="skills" duration={500} >
                        <li className="item-header">
                            Habilidades
                        </li>
                    </Link>
                    <Link to="work" duration={500} >
                        <li className="item-header">
                            Projetos
                        </li>
                    </Link>
                    <Link to="contact" duration={500} >
                        <li className="item-header">
                            Contato
                        </li>
                    </Link>
                </ul>
        

            <div onClick={handleClick} className='md:  z-10'>
                {!nav ? <Dropdown /> : <Dropdown />}
            </div>

            {/* Social Icons */}
            <aside class="menu-lateral">
                <ul>
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
                        <a className="flex justify-between items-center w-full text-gray-300">
                            <HiOutlineMail className="icone rounded-lg " size={30}/>
                        </a>
                    </li>
                </ul>
            </aside>
        </div>
       
    )
}

export default NavBar