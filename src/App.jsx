import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  useEffect(() => {
    async function fetchWeatherData() {
      if (!debouncedSearch) return;

      try {
        setLoading(true);
        const appID = "f276c19df6cf8e6b0ff9f1cad85f1afe";
        const unit = "metric";
        const url =
          "https://api.openweathermap.org/data/2.5/weather?q=" +
          debouncedSearch +
          "&appid=" +
          appID +
          "&units=" +
          unit;

        const response = await axios.get(url);
        setWeatherData(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Error in fetching Weather API");
      }
    }

    fetchWeatherData();
  }, [debouncedSearch]);

  return (
    <>
      <Header search={search} setSearch={setSearch} />
      {!loading ? (
        <>
          <Dashboard weatherData={weatherData} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default App;
