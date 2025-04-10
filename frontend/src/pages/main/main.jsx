import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Home from '../home/index.jsx';
import About from '../about/index.jsx';
import Vacancy from '../vacancy/index.jsx';
import JobCard from '../../components/card.jsx'
import { Routes, Route } from 'react-router-dom';
import { getAccessToken, refreshAccessToken, clearTokens } from "../../api/authService.js";

const API_URL = "http://172.30.96.1:8055/api/v1/jobs/";

const Main = () => {
  const [allJobs, setAllJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      let token = getAccessToken();

      if (!token) {
        console.log("Токен не найден. Пожалуйста, авторизуйтесь.");
        return;
      }

      try {
        const response = await axios.get(API_URL, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setAllJobs(response.data);
        setFilteredJobs(response.data);
      } catch (error) {
        if (error.response?.status === 401) {
          console.log("Токен истёк, обновляем...");

          const newToken = await refreshAccessToken();
          if (!newToken) {
            console.log("Ошибка обновления токена. Разлогиниваем...");
            clearTokens();
            return;
          }

          try {
            const retryResponse = await axios.get(API_URL, {
              headers: { Authorization: `Bearer ${newToken}` },
            });
            setAllJobs(retryResponse.data);
            setFilteredJobs(retryResponse.data);
          } catch (retryError) {
            console.error("Ошибка при повторном запросе:", retryError);
          }
        } else {
          console.error("Ошибка при загрузке вакансий:", error);
        }
      }
    };

    fetchJobs();
  }, []);
  
  const handleFilter = (filters) => {
    console.log("Фильтры применены:", filters);

    const filtered = allJobs.filter((job) => {
      const isLevelMatch = filters.level === "Все уровни" || job.level === filters.level;
      const isCityMatch = filters.location === "Все города" || job.location === filters.location;
      const isSalaryMatch = filters.salary ? job.salary >= filters.salary : true;

      return isLevelMatch && isCityMatch && isSalaryMatch;
    });

    setFilteredJobs(filtered);
    console.log("Отфильтрованные вакансии:", filtered);
  };

  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about/' element={<About/>} />
            <Route path="/jobs" element={<Vacancy onFilter={handleFilter} filteredJobs={filteredJobs} />} />
            <Route path="/jobs/:id" element={<JobCard jobs={allJobs} />} /> 
        </Routes>
    </div>
  )
}

export default Main








