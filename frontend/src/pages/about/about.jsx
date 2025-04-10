import React from 'react';
import './about.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import slide1 from '../../Accests/slide1.jpeg'
import slide2 from '../../Accests/slide2.jpeg'
import slide3 from '../../Accests/slide3.jpeg'


const About = () => {
  return (
    <div className='about_container'>
      <div className="about_section_1 fade-in">
        <div className="container">
          <div className="about_header">
            <h1>Мы создаем</h1>
            <h1><p className='header_text'>технологии будущего</p></h1>
            <p className='text_p'>2ГИС — IT-компания, выпускающая одноименные цифровые справочники с картами городов</p>
          </div>
        </div>
      </div>

      <div className="section_2 ">
        <div className="container">
          <div className="carts fade-in">
            <div className="cart1">
              <div className="cart">
                <h2 className='cart_title'>25+</h2>
                <p>лет на рынке</p>
              </div>
            </div>
            <div className="cart1">
              <div className="cart">
                <h2 className='cart_title'>1400+</h2>
                <p>городов в 19 странах мира</p>
              </div>
            </div>
            <div className="cart1">
              <div className="cart">
                <h2 className='cart_title'>77М+</h2>
                <p>пользователей</p>
              </div>
            </div>
            <div className="cart1">
              <div className="cart">
                <h2 className='cart_title'>4500+</h2>
                <p>сотрудников</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about_section_3 ">
        <div className="title">
          <h1>Корпоративная жизнь</h1>
        </div>
        <div className="slider fade-in">
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100 border-radius-10px" src={slide1} alt="Первый слайд" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 border-radius-10px" src={slide2} alt="Второй слайд" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 border-radius-10px" src={slide3} alt="Третий слайд" />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>


      <div className="about_section_4 ">

        <div className="title">
          <h1>Наши ценности</h1>
        </div>

        <div className="slider_carts fade-in">
              
              <div className="con_card">
                <div className="card">
                    <div className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-lightbulb" viewBox="0 0 16 16">
                        <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1"/>
                      </svg>
                    </div>
                    <span>Работа вашей мечты ждет вас</span>
                    <p>Мы предлагаем множество вакансий </p> <p>различных уровней и направлений.</p>
                </div>
              </div>
                
              <div className="con_card">
                <div className="card">
                  <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
                      <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
                    </svg>
                  </div>
                  <span>Развивайтесь с нами</span>
                  <p>Присоединяйтесь к команде </p><p>профессионалов и получайте ценные</p> <p>навыки.</p>
                </div>
              </div>
                
              <div className="con_card">
                <div className="card">
                  <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-lightning" viewBox="0 0 16 16">
                      <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1z"/>
                    </svg>
                  </div>
                  <span>Работайте в лучших условиях</span>
                  <p>Мы предлагаем конкурентные условия</p> <p>работы и отличные возможности для</p> <p>карьерного роста.</p>
                </div>
              </div>
  
        </div>
      </div>


      <div className="about_section_5">
        <div className="title">
          <h1>Наш офис</h1>
        </div>
        <div className="about_video fade-in">
          <iframe
            width="1200"
            height="600"
            src="https://www.youtube.com/embed/n2wVQ7OJwXI" // исправленный URL
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

    </div>
  );
};

export default About;
