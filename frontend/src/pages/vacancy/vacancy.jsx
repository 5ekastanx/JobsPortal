import React, { useState } from "react";
import './vacancy.css';

const levels = ["Все уровни", "Junior", "Middle", "Senior"];
const cities = ["Все города", "Бишкек", "Ош", "Баткен", "Ысык-Кол", "Нарын", "Талас", "Жала-Абад"];

const Vacancy = ({ onFilter, filteredJobs }) => {
  
  const [selectedLevel, setSelectedLevel] = useState("Все уровни");
  const [selectedlocation, setSelectedlocation] = useState("Все города");
  const [salary, setSalary] = useState("");

  const handleFilter = () => {
    // Применяем фильтры
    onFilter({ level: selectedLevel, location: selectedlocation, salary });
  };

  const resetFilters = () => {
    setSelectedLevel("Все уровни");
    setSelectedlocation("Все города");
    setSalary("");
    onFilter({ level: "Все уровни", location: "Все города", salary: "" });
  };

  return (
    <div>
      <div className="header_vacancy">
        <div className="header_content">
          <h1>Найди работу своей мечты</h1>
          <form>
            <input type="text" placeholder='     Поиск вакансий...'/>
            <button type='submit' className='btn btn-primary btn-lg'>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
              </svg>
            </button>
          </form>
        </div>
      </div>

      <div className="section_jobs">
        <div className="container">
          <div className="root_vacancy">
            <div className="root_left_v">
              <div className="filter-container slide-in">
                <h2 className="filter-title">Фильтры</h2>
                <label className="filter-label">Уровень</label>
                <select className="filter-select" value={selectedLevel} onChange={(e) => setSelectedLevel(e.target.value)}>
                  {levels.map((level) => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>

                <label className="filter-label">Локация</label>
                <select className="filter-select" value={selectedlocation} onChange={(e) => setSelectedlocation(e.target.value)}>
                  {cities.map((location) => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>

                <label className="filter-label">Зарплата от</label>
                <div className="salary-input-container">
                  <input
                    type="number"
                    className="filter-input"
                    placeholder="Минимальная зп"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                  />
                  <span className="salary-icon">₸</span>
                </div>

                <button className="filter-button apply-button" onClick={handleFilter}>Применить</button>
                <button className="filter-button reset-button" onClick={resetFilters}>Сбросить фильтры</button>
              </div>
            </div>

            <div className="root_right_v slide-up">
                {filteredJobs.length > 0 ? (
                  filteredJobs.map((job) => (
                    <div key={job.id} className="cart_job">
                      <div className="job_container">
                        <div className="cart_content">
                          <a href={`/jobs/${job.id}`}><h3>{job.title}</h3></a>
                          <div className="mini_con">
                            <div className="city"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                            </svg><span>{job.location}</span></div>
                            <p className="salary">{job.salary ? `${job.salary} ` : "Зарплата не указана"} </p>
                          </div>
                        </div>
                        <div className="level">{job.level}</div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="xcontent slide-up">
                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                    </svg>
                    <span className="no_vacancy">Вакансий пока нет</span>
                  </div>
                )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Vacancy;
