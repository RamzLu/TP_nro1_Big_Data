import React from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";

const ArgentinaMap = ({ geoData, data }) => {
  // Paleta de colores en tonos rosados/magenta secuenciales
  const getPinkColor = (d) => {
    return d > 0.09
      ? "#880e4f" // muy alto
      : d > 0.07
        ? "#c2185b"
        : d > 0.05
          ? "#e91e63"
          : d > 0.03
            ? "#f06292"
            : d > 0.01
              ? "#f8bbd0"
              : "#fce4ec"; // muy bajo
  };

  const styleGeoJson = (feature) => {
    const provData = data[feature.properties.nombre];
    const tasa = provData ? provData.tasa_desocupacion : 0;

    return {
      fillColor: getPinkColor(tasa),
      weight: 1.5,
      opacity: 1,
      color: "#ffffff",
      fillOpacity: 0.85,
    };
  };

  const onEachFeature = (feature, layer) => {
    const provinceName = feature.properties.nombre;
    const provData = data[provinceName];
    const tasa = provData
      ? (provData.tasa_desocupacion * 100).toFixed(1)
      : "S/D";

    layer.bindTooltip(
      `<div style="font-family: sans-serif; color: #880e4f;">
        <strong>${provinceName}</strong><br/>Desocupación: ${tasa}%
      </div>`,
      { sticky: true },
    );
  };

  return (
    <div className="glass-panel map-wrapper">
      <h3 style={{ color: "#880e4f", marginTop: 0 }}>
        Mapa de Desocupación Provincial
      </h3>
      <div className="map-container">
        <MapContainer
          center={[-38.4161, -63.6167]}
          zoom={4}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%", background: "transparent" }}
        >
          <GeoJSON
            data={geoData}
            style={styleGeoJson}
            onEachFeature={onEachFeature}
          />
        </MapContainer>
      </div>
    </div>
  );
};

export default ArgentinaMap;
