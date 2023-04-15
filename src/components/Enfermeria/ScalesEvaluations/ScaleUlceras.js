import { Button } from '@material-ui/core';
import React, { Fragment, useState } from 'react';

export default function ScaleUlceras() {
	const [age, setAge] = useState('');
	const [mobility, setMobility] = useState('');
	const [activity, setActivity] = useState('');
	const [mental, setMental] = useState('');
	const [nutrition, setNutrition] = useState('');
	const [result, setResult] = useState('');

	function calculateScore(age, mobility, activity, mental, nutrition) {
		let score = 0;

		if (age >= 65) {
			score += 1;
		}

		switch (parseInt(mobility)) {
			case 0:
				score += 3;
				break;
			case 1:
				score += 2;
				break;
			case 2:
				score += 1;
				break;
			case 3:
				score += 0;
				break;
			default:
				break;
		}

		switch (parseInt(activity)) {
			case 0:
				score += 4;
				break;
			case 1:
				score += 3;
				break;
			case 2:
				score += 2;
				break;
			default:
				break;
		}

		switch (parseInt(mental)) {
			case 0:
				score += 4;
				break;
			case 1:
				score += 3;
				break;
			case 2:
				score += 2;
				break;
			default:
				break;
		}

		switch (parseInt(nutrition)) {
			case 0:
				score += 4;
				break;
			case 1:
				score += 3;
				break;
			case 2:
				score += 2;
				break;
			case 3:
				score += 1;
				break;
			default:
				break;
		}

		if (score <= 9) {
			return 'Riesgo muy alto';
		} else if (score <= 12) {
			return 'Riesgo alto';
		} else if (score <= 14) {
			return 'Riesgo moderado';
		} else {
			return 'Riesgo bajo';
		}
	}

	function handleSubmit(event) {
		event.preventDefault();
		const score = calculateScore(age, mobility, activity, mental, nutrition);
		// Aquí hacer algo con la puntuación, como navegar a una página nueva o mostrarla en un componente de resultados
		setResult(score);
	}

	return (
		<>
			<h2 class='mont-font fw-900 font-md mb-lg-2 mb-0'>
				Escala Norton Modificada
			</h2>
			<form onSubmit={handleSubmit}>
				<label className='col'>
					Edad:
					<input
						type='number'
						value={age}
						onChange={(e) => setAge(e.target.value)}
					/>
				</label>
				<br />
				<label>
					Mobilidad:
					<select
						value={mobility}
						onChange={(e) => setMobility(e.target.value)}>
						<option value='0'>Postrado en cama</option>
						<option value='1'>En silla</option>
						<option value='2'>Camina ocasionalmente</option>
						<option value='3'>Camina con frecuencia</option>
					</select>
				</label>
				<br />
				<label>
					Actividad:
					<select
						value={activity}
						onChange={(e) => setActivity(e.target.value)}>
						<option value='0'>Comatoso</option>
						<option value='1'>confundido</option>
						<option value='2'>Alerta</option>
					</select>
				</label>
				<br />
				<label>
					Estado mental:
					<select
						value={mental}
						onChange={(e) => setMental(e.target.value)}>
						<option value='0'>Depresión severa</option>
						<option value='1'>Depresión ligera</option>
						<option value='2'>Normal</option>
					</select>
				</label>
				<br />
				<label>
					Nutrición:
					<select
						value={nutrition}
						onChange={(e) => setNutrition(e.target.value)}>
						<option value='0'>Muy pobre</option>
						<option value='1'>Probablemente inadecuada</option>
						<option value='2'>Adecuada</option>
						<option value='3'>Excelente</option>
					</select>
				</label>
				<br />
				<Button
					variant='contained'
					type='submit'>
					Calcular
				</Button>
			</form>
			<div>{result && <p>Resultado: {result}</p>}</div>
		</>
	);
}
