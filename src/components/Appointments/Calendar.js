import React, { useState } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { es } from "date-fns/locale";
// import es from "react-date-picker-correct-locale";

export default function Calendar() {
  const [selected, setSelected] = useState(new Date());

  let footer = <p>Elige un día.</p>;
  if (selected) {
    footer = <p>Día elegido: {format(selected, "PP")}.</p>;
  }
  return (
    <DayPicker
      className="calendar"
      mode="single"
      locale={es}
      selected={selected}
      onSelect={setSelected}
      footer={footer}
    />
  );
}
