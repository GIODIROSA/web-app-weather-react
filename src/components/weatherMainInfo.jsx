export default function WeatherMainInfo({ weather }) {
  return (
    <div>
      <div>{weather?.location.name}</div>
      <div>{weather?.location.country}</div>
      <div>
        <div>
          <img
            src={`http:${weather?.current.condition.icon}`}
            alt={weather?.location.name}
            width="128"
          />
        </div>
        <div>
          <div>{weather?.current.condition.text}</div>
          <div>{weather?.current.temp_c}°</div>
        </div>
      </div>
    
      <iframe
        title="mapa"
        src={`https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d5038979.753732225!2d${weather?.location.lon}12792629638075!3d${weather?.location.lat}668102245483!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2scl!4v1659921875534!5m2!1ses-419!2scl`}
        width="600"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
      ></iframe>
    </div>
  );
}


