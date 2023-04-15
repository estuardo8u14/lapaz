import React, { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import { Button } from '@material-ui/core';

const PdfForm = () => {
	const [formData, setFormData] = useState({
		habitacion: '',
		cama: '',
		paciente: '',
		tratamiento: '',
		horas: '',
		dia: '',
		mes: '',
		año: '',
		enfermera: '',
		medico: '',
	});
	const [pdfDataUri, setPdfDataUri] = useState(null);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const pdfBytes = await fetch(
			'../../assets/data/CartasColorRellenable.pdf',
		).then((res) => res.arrayBuffer());

		const pdfDoc = await PDFDocument.load(pdfBytes);

		const form = pdfDoc.getForm();
		console.log(form);
		form.getTextField('habitacion').setText(formData.habitacion);
		form.getTextField('cama').setText(formData.cama);

		form.getTextField('paciente').setText(formData.paciente);
		form.getTextField('tratamiento').setText(formData.tratamiento);

		form.getTextField('horas').setText(formData.horas);
		form.getTextField('dia').setText(formData.dia);
		form.getTextField('mes').setText(formData.mes);
		form.getTextField('año').setText(formData.año);
		form.getTextField('enfermera').setText(formData.enfermera);
		form.getTextField('medico').setText(formData.medico);

		const pdfBytesWithFormData = await pdfDoc.save();

		const pdfDataUri = URL.createObjectURL(
			new Blob([pdfBytesWithFormData], { type: 'application/pdf' }),
		);
		setPdfDataUri(pdfDataUri);
		return pdfDataUri;
	};

	return (
		<div class='col-lg-12 mt-4 mb-3'>
			<h2 class='mont-font fw-900 font-md mb-lg-2 mb-0'>
				Generador de cartas de colores
			</h2>
			<form
				class='input-group'
				onSubmit={handleSubmit}>
				<div className='me-5'>
					<label>
						Habitación:
						<input
							class='form-control'
							type='text'
							name='habitacion'
							value={formData.habitacion}
							onChange={handleChange}
						/>
					</label>
				</div>
				<br />
				<div className='me-5'>
					<label>
						Cama:
						<input
							class='form-control'
							type='text'
							name='cama'
							value={formData.cama}
							onChange={handleChange}
						/>
					</label>
				</div>
				<br />
				<div className='me-5'>
					<label>
						Paciente:
						<input
							class='form-control'
							type='text'
							name='paciente'
							value={formData.paciente}
							onChange={handleChange}
						/>
					</label>
				</div>
				<br />
				<div className='me-5'>
					<label>
						Tratamiento:
						<input
							class='form-control'
							type='text'
							name='tratamiento'
							value={formData.tratamiento}
							onChange={handleChange}
						/>
					</label>
				</div>
				<br />
				<div className='me-5'></div>
				<label>
					Horas:
					<input
						class='form-control'
						type='text'
						name='horas'
						value={formData.horas}
						onChange={handleChange}
					/>
				</label>
				<br />
				<div className='me-5'></div>
				<label>
					Día:
					<input
						class='form-control'
						type='text'
						name='dia'
						value={formData.dia}
						onChange={handleChange}
					/>
				</label>
				<br />
				<div className='me-5'></div>
				<label>
					Mes:
					<input
						class='form-control'
						type='text'
						name='mes'
						value={formData.mes}
						onChange={handleChange}
					/>
				</label>
				<br />
				<div className='me-5'></div>
				<label>
					Año:
					<input
						class='form-control'
						type='text'
						name='año'
						value={formData.año}
						onChange={handleChange}
					/>
				</label>
				<br />
				<div className='me-5'></div>
				<label>
					Enfermera:
					<input
						class='form-control'
						type='text'
						name='enfermera'
						value={formData.enfermera}
						onChange={handleChange}
					/>
				</label>
				<br />
				<div className='me-5'></div>
				<label>
					Médico:
					<input
						class='form-control'
						type='text'
						name='medico'
						value={formData.medico}
						onChange={handleChange}
					/>
				</label>
				<br />
			</form>
			<Button
				className='mt-3'
				fullWidth
				variant='contained'
				type='submit'
				onClick={handleSubmit}>
				Submit
			</Button>
			{pdfDataUri && (
				<iframe
					className='pt-5'
					src={pdfDataUri}
					title='Filled PDF'
					style={{ width: '100%', height: '500px' }}></iframe>
			)}
		</div>
	);
};

export default PdfForm;
