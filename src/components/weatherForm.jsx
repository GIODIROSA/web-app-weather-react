import { useState } from "react";

export default function WeatherForm({ OnChangeCity }) {
  const [city, setCity] = useState("");

  function onChange(e) {
    const value = e.target.value;

    if (value !== "") {
      setCity(value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    OnChangeCity(city);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={onChange} />
    </form>
  );
}
