import React from "react";
import "../Charts/Charts.css";

const Conclusions = ({ latestData, nationalTrend }) => {
  if (
    !latestData ||
    Object.keys(latestData).length === 0 ||
    nationalTrend.length === 0
  )
    return null;

  const provincesOnly = Object.values(latestData).filter(
    (d) => d.provincia !== "Nacional",
  );
  const highest = provincesOnly.reduce(
    (max, p) => (p.tasa_desocupacion > max.tasa_desocupacion ? p : max),
    provincesOnly[0],
  );
  const currentNational = latestData["Nacional"].tasa_desocupacion * 100;

  const firstRecord = nationalTrend[0].tasa;
  const lastRecord = nationalTrend[nationalTrend.length - 1].tasa;
  const trendDiff = (lastRecord - firstRecord).toFixed(1);

  return (
    <div className="kpi-container animate-entrance delay-1">
      <div className="glass-panel interactive-panel kpi-card">
        <h4>Promedio Nacional Actual</h4>
        <div className="kpi-value">{currentNational.toFixed(1)}%</div>
        <p>Jefas de hogar desocupadas a nivel país.</p>
      </div>
      <div
        className="glass-panel interactive-panel kpi-card"
        style={{ animationDelay: "1s" }}
      >
        <h4>Provincia más Crítica</h4>
        <div className="kpi-value">{highest.provincia}</div>
        <p>
          Lidera con un {(highest.tasa_desocupacion * 100).toFixed(1)}% de
          desocupación.
        </p>
      </div>
      <div
        className="glass-panel interactive-panel kpi-card"
        style={{ animationDelay: "2s" }}
      >
        <h4>Evolución Histórica</h4>
        <div className="kpi-value">
          {trendDiff > 0 ? `+${trendDiff}%` : `${trendDiff}%`}
        </div>
        <p>
          Variación desde {nationalTrend[0].fecha} a{" "}
          {nationalTrend[nationalTrend.length - 1].fecha}.
        </p>
      </div>
    </div>
  );
};

export default Conclusions;
