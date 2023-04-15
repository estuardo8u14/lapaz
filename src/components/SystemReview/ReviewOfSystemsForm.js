import React, { useState } from 'react';

const SystemReviewForm = () => {
	const [comment, setComment] = useState('');
	const [fever, setFever] = useState(false);
	const [feverDetails, setFeverDetails] = useState('');
	const [pain, setPain] = useState(false);
	const [painDetails, setPainDetails] = useState('');
	const [fatigue, setFatigue] = useState(false);
	const [fatigueDetails, setFatigueDetails] = useState('');
	const [extra, setExtra] = useState(false);
	const [extraDetails, setExtraDetails] = useState('');

	const [chills, setChills] = useState(false);
	const [chillDetails, setChillDetails] = useState('');
	const [nausea, setNausea] = useState(false);
	const [nauseaDetails, setNauseaDetails] = useState('');
	const [vomiting, setVomiting] = useState(false);
	const [vomitingDetails, setVomitingDetails] = useState('');
	const [dizziness, setDizziness] = useState(false);
	const [dizzinessDetails, setDizzinessDetails] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(`
      Comment: ${comment},
      Fever: ${fever},
      Fever Details: ${feverDetails},
      Pain: ${pain},
      Pain Details: ${painDetails},
      Fatigue: ${fatigue},
      Fatigue Details: ${fatigueDetails}
    `);
		// Here you can add code to submit the form data to your backend or API
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className='pt-3'>
				<input
					type='checkbox'
					class='formcontrol'
					id='fever'
					checked={fever}
					onChange={(event) => setFever(event.target.checked)}
				/>
				<label
					className='pe-3'
					htmlFor='fever'>
					Fiebre
				</label>
				{fever && (
					<input
						type='text'
						id='fever-details'
						value={feverDetails}
						onChange={(event) => setFeverDetails(event.target.value)}
						required
					/>
				)}
			</div>
			<div>
				<input
					type='checkbox'
					id='pain'
					checked={pain}
					onChange={(event) => setPain(event.target.checked)}
				/>
				<label
					className='pe-4 pt-3'
					htmlFor='pain'>
					Dolor
				</label>
				{pain && (
					<input
						type='text'
						id='pain-details'
						value={painDetails}
						onChange={(event) => setPainDetails(event.target.value)}
						required
					/>
				)}
			</div>
			<div>
				<input
					type='checkbox'
					id='fatigue'
					checked={fatigue}
					onChange={(event) => setFatigue(event.target.checked)}
				/>
				<label
					className='pe-4 pt-3'
					htmlFor='fatigue'>
					Fatiga
				</label>
				{fatigue && (
					<input
						type='text'
						id='fatigue-details'
						value={fatigueDetails}
						onChange={(event) => setFatigueDetails(event.target.value)}
						required
					/>
				)}
			</div>
			<div>
				<input
					type='checkbox'
					id='chills'
					checked={chills}
					onChange={(event) => setChills(event.target.checked)}
				/>
				<label
					className='pe-4 pt-3'
					htmlFor='chills'>
					Escalofrios
				</label>
				{chills && (
					<input
						type='text'
						id='extra-details'
						value={chillDetails}
						onChange={(event) => setChillDetails(event.target.value)}
						required
					/>
				)}
			</div>
			<div>
				<input
					type='checkbox'
					id='nausea'
					checked={nausea}
					onChange={(event) => setNausea(event.target.checked)}
				/>
				<label
					className='pe-5 pt-3'
					htmlFor='nausea'>
					Nausea
				</label>
				{nausea && (
					<input
						type='text'
						id='nausea-details'
						value={nauseaDetails}
						onChange={(event) => setNauseaDetails(event.target.value)}
						required
					/>
				)}
			</div>
			<div>
				<input
					type='checkbox'
					id='vomiting'
					checked={vomiting}
					onChange={(event) => setVomiting(event.target.checked)}
				/>
				<label
					className='pe-5 pt-3'
					htmlFor='vomiting'>
					Vomitos
				</label>
				{vomiting && (
					<input
						type='text'
						id='vomiting-details'
						value={vomitingDetails}
						onChange={(event) => setVomitingDetails(event.target.value)}
						required
					/>
				)}
			</div>
			<div>
				<input
					type='checkbox'
					id='dizziness'
					checked={dizziness}
					onChange={(event) => setDizziness(event.target.checked)}
				/>
				<label
					className='pe-5 pt-3'
					htmlFor='dizziness'>
					Mareos
				</label>
				{dizziness && (
					<input
						type='text'
						id='dizziness-details'
						value={dizzinessDetails}
						onChange={(event) => setDizzinessDetails(event.target.value)}
						required
					/>
				)}
			</div>
			<div>
				<input
					type='checkbox'
					id='extra'
					checked={extra}
					onChange={(event) => setExtra(event.target.checked)}
				/>
				<label
					className='pe-4 pt-3'
					htmlFor='extra'>
					Extra
				</label>
				{extra && (
					<input
						type='text'
						id='extra-details'
						value={extraDetails}
						onChange={(event) => setExtraDetails(event.target.value)}
						required
					/>
				)}
			</div>
		</form>
	);
};

export default SystemReviewForm;
