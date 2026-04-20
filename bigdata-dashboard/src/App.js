import React, { useEffect, useState } from "react";
import "./App.css";
import Questions from "./components/Questions/Questions";
import ArgentinaMap from "./components/Map/ArgentinaMap";
import UnemploymentChart from "./components/Charts/UnemploymentChart";
import TrendChart from "./components/Charts/TrendChart";
import Conclusions from "./components/Conclusions/Conclusions";
import { getLatestDataByProvince, getNationalTrend } from "./utils/dataHelpers";

function App() {
  const [latestData, setLatestData] = useState({});
  const [nationalTrend, setNationalTrend] = useState([]);
  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    Promise.all([
      fetch("/datos_limpios.json").then((res) => res.json()),
      fetch("/argentina.json").then((res) => res.json()),
    ]).then(([statsData, geoJsonData]) => {
      setLatestData(getLatestDataByProvince(statsData));
      setNationalTrend(getNationalTrend(statsData));
      setGeoData(geoJsonData);
    });
  }, []);

  return (
    <div className="app-container">
      <div className="header-title animate-entrance">
        <h1>Dashboard EPH: Desocupación en Jefas de Hogar</h1>
        <p style={{ fontSize: "1.2rem", color: "#ad1457" }}>
          Análisis interactivo de brechas laborales e informalidad en Argentina
        </p>
      </div>

      <Conclusions latestData={latestData} nationalTrend={nationalTrend} />

      <Questions />

      <h2
        className="animate-entrance delay-1"
        style={{
          marginTop: "50px",
          color: "#880e4f",
          borderBottom: "2px solid rgba(233, 30, 99, 0.2)",
          paddingBottom: "10px",
        }}
      >
        Exploración Gráfica Interactiva
      </h2>

      {/* Gráfico de tendencia histórica ocupando todo el ancho */}
      <div style={{ marginBottom: "30px" }}>
        {nationalTrend.length > 0 && <TrendChart data={nationalTrend} />}
      </div>

      {/* Grillas en dos columnas para el mapa y las barras */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "30px",
          alignItems: "start",
        }}
      >
        {Object.keys(latestData).length > 0 && (
          <div className="animate-entrance delay-2">
            <UnemploymentChart data={latestData} />
          </div>
        )}
        {geoData && Object.keys(latestData).length > 0 && (
          <div className="animate-entrance delay-3" style={{ height: "100%" }}>
            <ArgentinaMap geoData={geoData} data={latestData} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
