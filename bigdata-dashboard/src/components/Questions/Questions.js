import React from "react";
import "./Questions.css";

const Questions = () => {
  return (
    <div className="questions-grid">
      <div className="glass-panel">
        <h3>2. Representación Visual</h3>
        <p>
          Se optó por gráficos de barras para evaluar asimetrías directas entre
          provincias y un mapa coroplético para representar espacialmente la
          desocupación territorial. Esta clasificación es la más apta para
          cruzar variables geográficas con porcentajes cuantitativos.
        </p>
      </div>
      <div className="glass-panel">
        <h3>3. Preparación de Datos y Problemas</h3>
        <p>
          <strong>Pasos:</strong> Depuración de microdatos (como los de la EPH),
          filtrando por género (mujer) y rol (jefa de hogar). <br />
          <strong>Problemas comunes:</strong> Valores nulos, nomenclatura
          inconsistente de las provincias y la correcta aplicación de los
          factores de ponderación poblacional.
        </p>
      </div>
      <div className="glass-panel">
        <h3>4. Herramientas de Generación</h3>
        <p>
          Se seleccionó <strong>React</strong> junto con{" "}
          <strong>Recharts</strong> (una capa limpia sobre D3.js) y{" "}
          <strong>React-Leaflet</strong>. Permiten renderizado declarativo, son
          altamente modulares e ideales para manipular el DOM virtual sin
          sacrificar rendimiento.
        </p>
      </div>
      <div className="glass-panel">
        <h3>5. Elementos del Cuadro de Mando</h3>
        <p>
          Se priorizó un diseño minimalista. Elementos clave: Tooltips
          interactivos para no saturar la pantalla con números, tarjetas
          modulares con efecto "cristal" para reducir el ruido visual, y paletas
          secuenciales para destacar zonas críticas.
        </p>
      </div>
      <div className="glass-panel" style={{ gridColumn: "1 / -1" }}>
        <h3>7. ¿Por qué son efectivas?</h3>
        <p>
          Aprovechan principios de la percepción visual (Gestalt). El mapa
          reduce drásticamente la carga cognitiva al permitir identificar
          desigualdades regionales de manera inmediata, mientras que el gráfico
          de barras aterriza esos descubrimientos en comparaciones de magnitud
          precisas.
        </p>
      </div>
    </div>
  );
};

export default Questions;
