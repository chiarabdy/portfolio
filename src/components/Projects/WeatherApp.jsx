'use client';
import React, { useState } from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  min-height: calc(100vh - 81px);
  background: linear-gradient(to bottom, #87ceeb, #f0f4f8);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #333;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #1a2a6c;
  margin-bottom: 30px;
`;

const SearchForm = styled.form`
  margin-bottom: 30px;
  display: flex;
  gap: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
`;

const SearchInput = styled.input`
  padding: 12px 18px;
  font-size: 1rem;
  border: none;
  border-radius: 25px;
  width: 300px;
  outline: none;
`;

const SearchButton = styled.button`
  padding: 12px 25px;
  font-size: 1rem;
  border: none;
  border-radius: 25px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #aaa;
    cursor: not-allowed;
  }
`;

const WeatherDisplay = styled.div`
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  padding: 30px 40px;
  border-radius: 15px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.18);
  width: 350px;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const CityName = styled.h2`
  font-size: 2rem;
  margin: 0;
  color: #1a2a6c;
`;

const Temperature = styled.h1`
  font-size: 4.5rem;
  margin: 10px 0;
  font-weight: 700;
  color: #1a2a6c;
`;

const Description = styled.p`
  font-size: 1.2rem;
  text-transform: capitalize;
  margin: 0;
  color: #555;
`;

const ErrorMessage = styled.p`
  color: #d9534f;
  font-weight: bold;
  background: rgba(255, 218, 218, 0.8);
  padding: 10px 15px;
  border-radius: 8px;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

export default function WeatherApp() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

  const fetchWeather = async (e) => {
    e.preventDefault();
    if (!city) return;
    
    setLoading(true);
    setWeatherData(null);
    setError(null);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await axios.get(url);
      setWeatherData(response.data);
    } catch (err) {
      setError('City not found. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppWrapper>
      <Title>Weather Dashboard</Title>
      <SearchForm onSubmit={fetchWeather}>
        <SearchInput 
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name..."
          disabled={loading}
        />
        <SearchButton type="submit" disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </SearchButton>
      </SearchForm>

      {loading && <p>Loading...</p>}
      {error && <ErrorMessage>{error}</ErrorMessage>}

      {weatherData && (
        <WeatherDisplay>
          <CityName>{weatherData.name}, {weatherData.sys.country}</CityName>
          <Temperature>{Math.round(weatherData.main.temp)}°C</Temperature>
          <Description>{weatherData.weather[0].description}</Description>
        </WeatherDisplay>
      )}
    </AppWrapper>
  );
}