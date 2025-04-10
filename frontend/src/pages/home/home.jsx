import React from 'react'
import header from '../../Accests/header.jpg'
import img_2 from '../../Accests/img_2.jpg'
import './home.css'

const Home = () => {
  return (
    <div className='pt-[5px]'>
      <div className="section">


        <div className="section_1">
          <div className="section_header">
            <h1>Помогаем жить в городе, <p className='header_text'>а бизнесу ― развиваться!</p> </h1>
            <p className='text_p'>Присоединяйся к амбициозной и прогрессивной команде 2ГИС Казахстан</p>
            <form>
              <input type="text" placeholder='     Поиск по вакансиям...'/>
              <button type='submit' className='btn btn-primary btn-lg'>НАЙТИ</button>
            </form>
          </div>

          <div className="header_img">
            <img src={header} alt="" />
          </div>
        </div>



        <div className="section_2">
          <div className="container">
            <div className="content">
              
            <div className="con_card">
              <div className="card">
                  <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                    </svg>
                  </div>
                  <span>Работа вашей мечты ждет вас</span>
                  <p>Мы предлагаем множество вакансий </p> <p>различных уровней и направлений.</p>
              </div>
            </div>
              
            <div className="con_card">
              <div className="card">
                <div className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-graph-up" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M0 0h1v15h15v1H0zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07"/>
                  </svg>
                </div>
                <span>Развивайтесь с нами</span>
                <p>Присоединяйтесь к команде </p><p>профессионалов и получайте ценные</p> <p>навыки.</p>
              </div>
            </div>
              
            <div className="con_card">
              <div className="card">
                <div className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                  </svg>
                </div>
                <span>Работайте в лучших условиях</span>
                <p>Мы предлагаем конкурентные условия</p> <p>работы и отличные возможности для</p> <p>карьерного роста.</p>
              </div>
            </div>

            </div>

            <div className="img_2">
              <img src={img_2} alt="" />
            </div>
          </div>
        </div>



        <div className="section_3">
          <div className="content">
            <h1>Готовы начать карьеру с нами?</h1>
            <button>Откликнуться на вакансию</button>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Home
