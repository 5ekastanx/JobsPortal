import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import './style/card.css'

const JobCard = ({ jobs }) => {
  const { id } = useParams();
  const [job, setJob] = useState(null); 
  const [isOpen, setIsOpen] = useState(false);
  const fileInputRef = useRef(null);
  const [form, setForm] = useState({
    last_name: '',
    phone: '',
    message: '',
  });
  
  const getCSRFToken = () => {
    return Cookies.get('csrftoken'); // assuming 'csrftoken' is the cookie name
  };

  useEffect(() => {
    const selectedJob = jobs.find(job => job.id === parseInt(id)); 
    setJob(selectedJob);
  }, [id, jobs]);

  if (!job) return <p>Вакансия не найдена</p>;


  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('last_name', form.last_name);
    formData.append('phone', form.phone);
    formData.append('message', form.message);
    formData.append('resume_file', fileInputRef.current.files[0]);
    formData.append('vacancy_id', job.id);
  
    try {
      const csrfToken = getCSRFToken();
      const response = await fetch('http://172.30.96.1:8055/api/v1/resume-application/', {
        method: 'POST',
        body: formData,
        headers: {
          'X-CSRFToken': csrfToken, // добавляем CSRF токен в заголовок
        },
      });
  
      if (response.ok) {
        alert('Успешно отправлено!');
        setForm({
          last_name: '',
          phone: '',
          message: '',
        });
        fileInputRef.current.value = ''; // очищаем файл
        setIsOpen(false); // закрываем модалку
      } else {
        const errorData = await response.json();
        alert(`Ошибка при отправке: ${errorData.message || 'Неизвестная ошибка'}`);
      }
    } catch (error) {
      console.error('Ошибка:', error);
      alert(`Произошла ошибка при отправке: ${error.message}`);
    }
  };
  
  

  return (
    <div className="container">
      <div className="card_container">
        <div className="card_header">
          <div className="card_header_content">
            <div className="card_level"><span>{job.level}</span></div>
            <div className="title"><h1>{job.title}</h1></div>
            <div className="card_nav">

              <div className="card_company"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" id="xicon" class="bi bi-building" viewBox="0 0 16 16">
                <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
                <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3z"/>
              </svg><span>
              ТОО 2ГИС - Справочник Двух Столиц</span></div>

              <div className="card_city"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" id="xicon" class="bi bi-geo-alt" viewBox="0 0 16 16">
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
              </svg><span>{job.location}</span></div>

              <div className="card_date"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" id="xicon" class="bi bi-calendar" viewBox="0 0 16 16">
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
              </svg><span>{job.published_date}</span></div>

              
            </div>
            <div className="card_salary badge fs-5"><span>{job.salary ? `${job.salary} ` : "Зарплата не указана"}</span></div>
          </div>
        </div>

        <div className="card_section">
  <div className="card_root_left">
    <div className="left_container">
      <h2>Описание вакансии</h2>
      <div className="div"></div>

      {job.description && (
        <div className="card_description">
          <p>{job.description}</p>
        </div>
      )}

      {job.responsibilities && (
        <>
          <h3>Обязанности: </h3>
          <div className="card_description">
            <p>{job.responsibilities}</p>
          </div>
        </>
      )}

      {job.requirements && (
        <>
          <h3>Требования: </h3>
          <div className="card_description">
            <p>{job.requirements}</p>
          </div>
        </>
      )}

      {job.benefits && (
        <>
          <h3>Условия: </h3>
          <div className="card_description">
            <p>{job.benefits}</p>
          </div>
        </>
      )}

      {job.qualities && (
        <>
          <h3>Качества: </h3>
          <div className="card_description">
            <p>{job.qualities}</p>
          </div>
        </>
      )}
    </div>
  </div>


          <div className="card_root_right">
            <div className="quick_info">
              <div className="info_content">
              <button className="applybutton" onClick={() => setIsOpen(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
                  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
                </svg>
                <span>Откликнуться</span>
              </button>

              {isOpen && (
  <div className="modal-overlay" onClick={handleOverlayClick}>
    <div className={`modal ${isOpen ? 'show' : ''}`} onClick={(e) => e.stopPropagation()}>
      <h2>Отклик на вакансию</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Фамилия:
          <input type="text" name="last_name" value={form.last_name} onChange={handleChange} required />
        </label>

        <label>
          Телефон:
          <input type="text" name="phone" value={form.phone} onChange={handleChange} required />
        </label>

        <label>
          Сообщение:
          <textarea name="message" value={form.message} onChange={handleChange} required />
        </label>

        <label className="file-label">
          Резюме (PDF, DOCX)
          <input type="file" accept=".pdf,.doc,.docx" ref={fileInputRef} required />
        </label>

        <button type="submit">Отправить</button>
      </form>
    </div>
  </div>
)}


                  <div className="info_item n1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                      <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                    </svg>
                    <span>Быстрый отклик</span>
                  </div>
                  <div className="info_item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-shield-check" viewBox="0 0 16 16">
                      <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56"/>
                      <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
                    </svg>      
                    <span>Безопасно</span>
                  </div>
              </div>
            </div>

            <div className="quick_info2">
              <div className="info_content">
                <span className="quik">Поделиться вакансией</span>
                <div className="nav_icons">
                  <div className="iconx">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/>
                    </svg>
                  </div>
                  <div className="iconx xs">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                    </svg>
                  </div>
                  <div className="iconx xs">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
                      <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
                      <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>


      </div>
    </div>
  );
};

export default JobCard;
