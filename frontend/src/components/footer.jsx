import React from 'react'
import './style/footer.css'
import logo from '../Accests/image.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">

        <div className="footer_content">
          <div className="content_1">
            <div className="footer_logo">
                <div className='logo'><img src={logo}></img></div>
                <div className="logo_text">2GIS</div>
            </div>
            <p>Создаем технологии для жизни в городе</p>
            <div className="icons">

            </div>
          </div>

        <div className="content_right">

          <div className="content">
            <p className='h2'>Компания</p>
            <p>О нас</p>
            <p>Вакансии</p>
            <p>Контакты</p>
          </div>

          <div className="content">
            <p className='h2'>Контакты</p>
            <p> +7-707-770-51-02 (HR-отдел)</p>
            <p>+7-727-399-10-10 (Контакт-центр)</p>
            <p>hr@almaty.2gis.kz</p>
          </div>

          <div className="content">
            <p className='h2'>Адрес</p>
            <p>
                <p>Казахстан, г. Алматы</p>
                <p>Проспект Жибек Жолы, 135</p>
                <p>БЦ "Zhibek Zholy", Блок 2, этаж 7</p>
            </p>
          </div>
          
        </div>

        </div>

        <div className="div"></div>

        <div className="footer_finish">
          <p>© 2024 2ГИС. Все права защищены.</p>
        </div>

      </div>
    </div>
  )
}

export default Footer
