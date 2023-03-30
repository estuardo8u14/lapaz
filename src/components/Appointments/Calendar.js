import React, { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import { es } from 'date-fns/locale';
import 'react-day-picker/dist/style.css';
// import es from "react-date-picker-correct-locale";

export default function Calendar() {
	const [selected, setSelected] = useState(new Date());
	const css = `
  .my-selected:not([disabled]) { 
    font-weight: bold; 
    border: 2px solid blue;
  }
  .my-selected:hover:not([disabled]) { 
    border-color: blue;
    color: blue;
  }
  .my-today { 
    font-weight: bold;
    font-size: 140%; 
    color: black;
  }
  .my-table: {
	width: "300px",
  },
`;

	let footer = <p>Elige un día.</p>;
	if (selected) {
		footer = <p>Día elegido: {format(selected, 'PP')}.</p>;
	}

	return (
		<>
			<style>{css}</style>
			<DayPicker
				className='calendar'
				mode='single'
				locale={es}
				selected={selected}
				onSelect={setSelected}
				footer={footer}
				modifiersClassNames={{
					selected: 'my-selected',
					today: 'my-today',
					table: 'my-table',
				}}
				modifiersStyles={{
					disabled: { fontSize: '75%' },
				}}
			/>
		</>
	);
}
