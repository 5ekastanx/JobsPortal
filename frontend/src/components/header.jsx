import React from 'react';
import logo from '../Accests/image.png'
import './style/header.css'

const Header = () => {
  
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  return (
    <div className='navbar-he'>
      
    <div className='header'>
      <div className="container">

        <div className="navbar">

            <a href='/' className="nav_left">
                <div className='logo'><img src={logo}></img></div>
                <div className="logo_text">2GIS</div>
            </a>

            <div className="nav_right">
                <a href='/' className='nav_text'>Главная</a>
                <a href='/about' className='nav_text'>О компании</a>
                <a href='/jobs' className='nav_text'>Вакансии</a>
                <button className='nav_btn'><a href="/jobs">НАЧАТЬ КАРЬЕРУ</a></button>
            </div>

        </div>

      </div>
    </div>
    </div>
  )
}

export default Header
