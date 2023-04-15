import React, { useState } from 'react';
import PesoTallaTable from './PesoTallaTable';
import GlucoTable from './GucloTable';

function SignsEditableTable() {
	const [data, setData] = useState([
		{
			hour: 6,
			header1: '',
			header2: '',
			header3: '',
			header4: '',
			header5: '',
			header6: '',
			header7: '',
			header8: '',
			header9: '',
			header10: '',
			header11: '',
			header12: '',
		},
		{
			hour: 7,
			header1: '',
			header2: '',
			header3: '',
			header4: '',
			header5: '',
			header6: '',
			header7: '',
			header8: '',
			header9: '',
			header10: '',
			header11: '',
			header12: '',
		},
		{
			hour: 8,
			header1: '',
			header2: '',
			header3: '',
			header4: '',
			header5: '',
			header6: '',
			header7: '',
			header8: '',
			header9: '',
			header10: '',
			header11: '',
			header12: '',
		},
		{
			hour: 9,
			header1: '',
			header2: '',
			header3: '',
			header4: '',
			header5: '',
			header6: '',
			header7: '',
			header8: '',
			header9: '',
			header10: '',
			header11: '',
			header12: '',
		},
		{
			hour: 5,
			header1: '',
			header2: '',
			header3: '',
			header4: '',
			header5: '',
			header6: '',
			header7: '',
			header8: '',
			header9: '',
			header10: '',
			header11: '',
			header12: '',
		},
		{
			hour: 10,
			header1: '',
			header2: '',
			header3: '',
			header4: '',
			header5: '',
			header6: '',
			header7: '',
			header8: '',
			header9: '',
			header10: '',
			header11: '',
			header12: '',
		},
		{
			hour: 11,
			header1: '',
			header2: '',
			header3: '',
			header4: '',
			header5: '',
			header6: '',
			header7: '',
			header8: '',
			header9: '',
			header10: '',
			header11: '',
			header12: '',
		},
		{
			hour: 12,
			header1: '',
			header2: '',
			header3: '',
			header4: '',
			header5: '',
			header6: '',
			header7: '',
			header8: '',
			header9: '',
			header10: '',
			header11: '',
			header12: '',
		},
	]);

	const [dataAfternoon, setDataAfternoon] = useState([
		{
			hour: 1,
			header1: '',
			header2: '',
			header3: '',
			header4: '',
			header5: '',
			header6: '',
			header7: '',
			header8: '',
			header9: '',
			header10: '',
			header11: '',
			header12: '',
		},
		{
			hour: 2,
			header1: '',
			header2: '',
			header3: '',
			header4: '',
			header5: '',
			header6: '',
			header7: '',
			header8: '',
			header9: '',
			header10: '',
			header11: '',
			header12: '',
		},
		{
			hour: 3,
			header1: '',
			header2: '',
			header3: '',
			header4: '',
			header5: '',
			header6: '',
			header7: '',
			header8: '',
			header9: '',
			header10: '',
			header11: '',
			header12: '',
		},
		{
			hour: 4,
			header1: '',
			header2: '',
			header3: '',
			header4: '',
			header5: '',
			header6: '',
			header7: '',
			header8: '',
			header9: '',
			header10: '',
			header11: '',
			header12: '',
		},
		{
			hour: 5,
			header1: '',
			header2: '',
			header3: '',
			header4: '',
			header5: '',
			header6: '',
			header7: '',
			header8: '',
			header9: '',
			header10: '',
			header11: '',
			header12: '',
		},
		{
			hour: 6,
			header1: '',
			header2: '',
			header3: '',
			header4: '',
			header5: '',
			header6: '',
			header7: '',
			header8: '',
			header9: '',
			header10: '',
			header11: '',
			header12: '',
		},
		{
			hour: 7,
			header1: '',
			header2: '',
			header3: '',
			header4: '',
			header5: '',
			header6: '',
			header7: '',
			header8: '',
			header9: '',
			header10: '',
			header11: '',
			header12: '',
		},
		{
			hour: 8,
			header1: '',
			header2: '',
			header3: '',
			header4: '',
			header5: '',
			header6: '',
			header7: '',
			header8: '',
			header9: '',
			header10: '',
			header11: '',
			header12: '',
		},
	]);

	const handleInputChange = (e, hour, field) => {
		const newData = data.map((item) => {
			if (item.hour === hour) {
				return { ...item, [field]: e.target.value };
			}
			return item;
		});
		setData(newData);
	};

	const handleInputChangeAfternoon = (e, hour, field) => {
		const newDataAfternoon = dataAfternoon.map((item) => {
			if (item.hour === hour) {
				return { ...item, [field]: e.target.value };
			}
			return item;
		});
		setDataAfternoon(newDataAfternoon);
	};

	return (
		<>
			<PesoTallaTable />
			<GlucoTable />
			<table className='form-control-signos1'>
				<thead class='fw-100 font-xsssss'>
					<tr>
						<th
							style={{ borderRight: '1px grey solid' }}
							colSpan='6'>
							Mañana
						</th>
						<th
							style={{ borderRight: '1px grey solid' }}
							colSpan='3'>
							Ingesta
						</th>
						<th colSpan='4'>Excreta</th>
					</tr>
					<tr>
						<th rowSpan='3'>Hora</th>
						<th>P/A</th>
						<th>Fc</th>
						<th>Fr</th>
						<th>Temp</th>
						<th>PVC</th>
						<th style={{ borderRight: '1px grey solid' }}>Sat. O2</th>
						<th>Gant</th>
						<th>IV</th>
						<th style={{ borderRight: '1px grey solid' }}>Or4</th>
						<th>Obos</th>
						<th>Orina</th>
						<th>Heces</th>
					</tr>
				</thead>
				<tbody>
					{data.map((item) => (
						<tr key={item.hour}>
							<td>{item.hour}</td>
							<td>
								<input
									class='form-control-signos1'
									type='text'
									value={item.header1}
									onChange={(e) => handleInputChange(e, item.hour, 'header1')}
								/>
							</td>
							<td>
								<input
									class='form-control-signos1'
									type='text'
									value={item.header2}
									onChange={(e) => handleInputChange(e, item.hour, 'header2')}
								/>
							</td>
							<td>
								<input
									class='form-control-signos1'
									type='text'
									value={item.header3}
									onChange={(e) => handleInputChange(e, item.hour, 'header3')}
								/>
							</td>
							<td>
								<input
									class='form-control-signos1'
									type='text'
									value={item.header4}
									onChange={(e) => handleInputChange(e, item.hour, 'header4')}
								/>
							</td>
							<td style={{ borderRight: '1px grey solid' }}>
								<input
									class='form-control-signos1'
									type='text'
									value={item.header5}
									onChange={(e) => handleInputChange(e, item.hour, 'header5')}
								/>
							</td>
							<td>
								<input
									class='form-control-signos1'
									type='text'
									value={item.header6}
									onChange={(e) => handleInputChange(e, item.hour, 'header6')}
								/>
							</td>

							<td>
								<input
									class='form-control-signos1'
									type='text'
									value={item.header7}
									onChange={(e) => handleInputChange(e, item.hour, 'header7')}
								/>
							</td>
							<td style={{ borderRight: '1px grey solid' }}>
								<input
									class='form-control-signos1'
									type='text'
									value={item.header8}
									onChange={(e) => handleInputChange(e, item.hour, 'header8')}
								/>
							</td>
							<td>
								<input
									class='form-control-signos1'
									type='text'
									value={item.header9}
									onChange={(e) => handleInputChange(e, item.hour, 'header9')}
								/>
							</td>
							<td>
								<input
									class='form-control-signos1'
									type='text'
									value={item.header10}
									onChange={(e) => handleInputChange(e, item.hour, 'header10')}
								/>
							</td>
							<td>
								<input
									class='form-control-signos1'
									type='text'
									value={item.header11}
									onChange={(e) => handleInputChange(e, item.hour, 'header11')}
								/>
							</td>
							<td>
								<input
									class='form-control-signos1'
									type='text'
									value={item.header12}
									onChange={(e) => handleInputChange(e, item.hour, 'header12')}
								/>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<table className='form-control-signos1'>
				<thead class='fw-100 font-xsssss'>
					<tr>
						<th
							style={{ borderRight: '1px grey solid' }}
							colSpan='6'>
							Tarde
						</th>
						<th
							style={{ borderRight: '1px grey solid' }}
							colSpan='3'>
							Ingesta
						</th>
						<th colSpan='4'>Excreta</th>
					</tr>
					<tr>
						<th rowSpan='3'>Hora</th>
						<th>P/A</th>
						<th>Fc</th>
						<th>Fr</th>
						<th>Temp</th>
						<th>PVC</th>
						<th style={{ borderRight: '1px grey solid' }}>Sat. O2</th>
						<th>Gant</th>
						<th>IV</th>
						<th style={{ borderRight: '1px grey solid' }}>Or4</th>
						<th>Obos</th>
						<th>Orina</th>
						<th>Heces</th>
					</tr>
				</thead>
				<tbody>
					{dataAfternoon.map((item) => (
						<tr key={item.hour}>
							<td>{item.hour}</td>
							<td>
								<input
									class='form-control-signos1'
									type='text'
									value={item.header1}
									onChange={(e) =>
										handleInputChangeAfternoon(e, item.hour, 'header1')
									}
								/>
							</td>
							<td>
								<input
									class='form-control-signos1'
									type='text'
									value={item.header2}
									onChange={(e) =>
										handleInputChangeAfternoon(e, item.hour, 'header2')
									}
								/>
							</td>
							<td>
								<input
									class='form-control-signos1'
									type='text'
									value={item.header3}
									onChange={(e) =>
										handleInputChangeAfternoon(e, item.hour, 'header3')
									}
								/>
							</td>
							<td>
								<input
									class='form-control-signos1'
									type='text'
									value={item.header4}
									onChange={(e) =>
										handleInputChangeAfternoon(e, item.hour, 'header4')
									}
								/>
							</td>
							<td style={{ borderRight: '1px grey solid' }}>
								<input
									class='form-control-signos1'
									type='text'
									value={item.header5}
									onChange={(e) =>
										handleInputChangeAfternoon(e, item.hour, 'header5')
									}
								/>
							</td>
							<td>
								<input
									class='form-control-signos1'
									type='text'
									value={item.header6}
									onChange={(e) =>
										handleInputChangeAfternoon(e, item.hour, 'header6')
									}
								/>
							</td>

							<td>
								<input
									class='form-control-signos1'
									type='text'
									value={item.header7}
									onChange={(e) =>
										handleInputChangeAfternoon(e, item.hour, 'header7')
									}
								/>
							</td>
							<td style={{ borderRight: '1px grey solid' }}>
								<input
									class='form-control-signos1'
									type='text'
									value={item.header8}
									onChange={(e) =>
										handleInputChangeAfternoon(e, item.hour, 'header8')
									}
								/>
							</td>
							<td>
								<input
									class='form-control-signos1'
									type='text'
									value={item.header9}
									onChange={(e) =>
										handleInputChangeAfternoon(e, item.hour, 'header9')
									}
								/>
							</td>
							<td>
								<input
									class='form-control-signos1'
									type='text'
									value={item.header10}
									onChange={(e) =>
										handleInputChangeAfternoon(e, item.hour, 'header10')
									}
								/>
							</td>
							<td>
								<input
									class='form-control-signos1'
									type='text'
									value={item.header11}
									onChange={(e) =>
										handleInputChangeAfternoon(e, item.hour, 'header11')
									}
								/>
							</td>
							<td>
								<input
									class='form-control-signos1'
									type='text'
									value={item.header12}
									onChange={(e) =>
										handleInputChangeAfternoon(e, item.hour, 'header12')
									}
								/>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}

export default SignsEditableTable;
