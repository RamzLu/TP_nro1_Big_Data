export const getLatestDataByProvince = (data) => {
  const latest = {};
  data.forEach((item) => {
    if (
      !latest[item.provincia] ||
      new Date(item.fecha) > new Date(latest[item.provincia].fecha)
    ) {
      latest[item.provincia] = item;
    }
  });
  return latest;
};

// Nueva función: extrae la evolución temporal a nivel Nacional
export const getNationalTrend = (data) => {
  return data
    .filter((item) => item.provincia === "Nacional")
    .sort((a, b) => new Date(a.fecha) - new Date(b.fecha))
    .map((item) => ({
      fecha: new Date(item.fecha).toLocaleDateString("es-AR", {
        month: "short",
        year: "numeric",
      }),
      tasa: parseFloat((item.tasa_desocupacion * 100).toFixed(1)),
    }));
};
