import React, { useState } from 'react';
import { Container, Row, Col, Dropdown, Table } from 'react-bootstrap';

function MedicationSearch() {
	const [searchTerm, setSearchTerm] = useState('');
	const [searchResults, setSearchResults] = useState([]);

	const handleSearchChange = async (event) => {
		const term = event.target.value;
		setSearchTerm(term);
		if (term.trim() === '') {
			setSearchResults([]);
			return;
		}
		const response = await fetch(
			`https://api.fda.gov/drug/event.json?search=patient.drug.openfda.generic_name=${term}&limit=5`,
		);
		const data = await response.json();
		console.log(data);
		setSearchResults(data.results);
	};

	return (
		<Container>
			<Row>
				<Col>
					<input
						type='text'
						value={searchTerm}
						onChange={handleSearchChange}
						placeholder='Busca Medicamento'
						className='form-control'
					/>
					{/* TODO: Render prediction box */}
					{/* <Dropdown>
						<Dropdown.Toggle
							variant='secondary'
							id='dropdown-basic'>
							Predicciones
						</Dropdown.Toggle>
						<Dropdown.Menu>
							{searchResults.length > 0 &&
								searchResults
									.slice(0, 5)
									.map((result) => (
										<Dropdown.Item key={result.term}>
											{result.term}
										</Dropdown.Item>
									))}
						</Dropdown.Menu>
					</Dropdown> */}
				</Col>
				<Col>
					<Table
						striped
						bordered
						hover>
						<thead>
							<tr>
								<th className='text-center'>Nombre</th>
								<th className='text-center'>Ruta</th>
								<th className='text-center'>Principio Activo</th>
								{/* <th className='text-center'>Stock</th> */}
							</tr>
						</thead>

						{searchResults.length > 0 && (
							<tbody>
								{searchResults.map((result) => (
									<tr key={result.term}>
										<td>{result.patient.drug[0].medicinalproduct}</td>
										<td>{result.patient.drug[0].openfda.route}</td>
										<td>{result.patient.drug[0].openfda.substance_name}</td>
									</tr>
								))}
							</tbody>
						)}
					</Table>
				</Col>
			</Row>
		</Container>
	);
}

export default MedicationSearch;

// import React, { useState } from 'react';
// import axios from 'axios';
// import Autosuggest from 'react-autosuggest';

// const MedicationSearch = () => {
// 	const [value, setValue] = useState('');
// 	const [suggestions, setSuggestions] = useState([]);

// 	const getSuggestions = async (value) => {
// 		const response = await axios.get(
// 			`https://api.fda.gov/drug/label.json?search=${value}&limit=10`,
// 		);
// 		const data = response.data.results.map(
// 			(result) => result.openfda.brand_name[0],
// 		);
// 		setSuggestions(data);
// 	};

// 	const renderSuggestion = (suggestion) => {
// 		return <div>{suggestion}</div>;
// 	};

// 	const onChange = (event, { newValue }) => {
// 		setValue(newValue);
// 	};

// 	const onSuggestionSelected = (event, { suggestion }) => {
// 		console.log(suggestion);
// 	};

// 	return (
// 		<Autosuggest
// 			suggestions={suggestions}
// 			onSuggestionsFetchRequested={({ value }) => getSuggestions(value)}
// 			onSuggestionsClearRequested={() => setSuggestions([])}
// 			getSuggestionValue={(suggestion) => suggestion}
// 			renderSuggestion={renderSuggestion}
// 			inputProps={{
// 				placeholder: 'Search for a medication',
// 				value,
// 				onChange,
// 			}}
// 			onSuggestionSelected={onSuggestionSelected}
// 		/>
// 	);
// };

// export default MedicationSearch;
