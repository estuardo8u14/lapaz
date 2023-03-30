import React, { useState } from 'react';
import { addDays, format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import { es } from 'date-fns/locale';
import 'react-day-picker/dist/style.css';
// import es from "react-date-picker-correct-locale";

export default function CalendarMedico() {
	let pastMonth = new Date();

	const defaultSelected = {
		from: pastMonth,
		to: addDays(pastMonth, 4),
	};
	const [range, setRange] = useState(defaultSelected);
	let footer = <p>Favor escoger un rango de días.</p>;
	if (range?.from) {
		if (!range.to) {
			footer = <p>{format(range.from, 'PPP')}</p>;
		} else if (range.to) {
			footer = (
				<p>
					{format(range.from, 'PPP')}–{format(range.to, 'PPP')}
				</p>
			);
		}
	}
	const css = `
  .my-selected:not([disabled]) { 
    font-weight: bold; 
    border: 2px dotted red;
  }
  .my-selected:hover:not([disabled]) { 
    border-color: red;
    color: red;
  }
  .my-today { 
    font-weight: bold;
    font-size: 140%; 
    color: red;
  }
`;
	const [selectedDay, setSelectedDay] = useState(new Date());

	return (
		<>
			<style>{css}</style>
			<DayPicker
				mode='range'
				locale={es}
				selected={selectedDay}
				max={pastMonth}
				onSelect={setSelectedDay}
				modifiersClassNames={{
					selected: 'my-selected',
					today: 'my-today',
				}}
				modifiersStyles={{
					disabled: { fontSize: '75%' },
				}}
			/>
		</>
	);
}
