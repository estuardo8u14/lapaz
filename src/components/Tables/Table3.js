import './Table1.css';
import fakeData from '../../assets/data/Data.json';
import * as React from 'react';
import { useTable } from 'react-table';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import PopoverMenu from '../PopoverMenu/PopoverMenu';
import Modal from 'react-bootstrap/Modal';

export default function Table1() {
	const [searchTerm, setSearchTerm] = React.useState('');
	const [showModal, setShowModal] = React.useState(false);
	const [searchResults, setSearchResults] = React.useState([]);

	const renderTooltip = (props) => (
		<Tooltip
			id='button-tooltip'
			{...props}>
			Información General: <br></br> Última visita: 17/02/1998 <br></br> Código
			del paciente: 3019749690101<br></br> Seguro: Salud Siempre
		</Tooltip>
	);

	const data = React.useMemo(() => fakeData, []);

	const columns = React.useMemo(
		() => [
			{
				Header: 'ID',
				accessor: 'id',
			},
			{
				Header: 'Nombre',
				accessor: 'first_name',
			},
			{
				Header: 'Apellido',
				accessor: 'last_name',
			},
			{
				Header: 'Email',
				accessor: 'email',
			},
			{
				Header: 'Tipo',
				accessor: 'gender',
			},
			{
				Header: 'Estudios',
				accessor: 'university',
			},
		],
		[],
	);

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		useTable({ columns, data });

	const handleSearchInputChange = (event) => {
		setSearchTerm(event.target.value);
	};

	const handleSearch = () => {
		const results = fakeData.filter((item) => {
			return item.first_name.toLowerCase().includes(searchTerm.toLowerCase());
		});
		setSearchResults(results);
		setShowModal(true);
	};

	return (
		<div className='containerr'>
			<div className='search-container'>
				<input
					type='text'
					placeholder='Search by name'
					value={searchTerm}
					onChange={handleSearchInputChange}
					onKeyPress={(event) => {
						if (event.key === 'Enter') handleSearch();
					}}
				/>
				<button onClick={handleSearch}>Search</button>
			</div>
			<table {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th {...column.getHeaderProps()}>{column.render('Header')}</th>
							))}
							<th></th>
						</tr>
					))}
				</thead>

				<tbody {...getTableBodyProps()}>
					{rows.map((row) => {
						prepareRow(row);
						return (
							<OverlayTrigger
								placement='auto-start'
								delay={{ show: 200, hide: 400 }}
								overlay={renderTooltip}>
								<tr
									class='table-row'
									{...row.getRowProps()}>
									{row.cells.map((cell) => (
										<td {...cell.getCellProps()}> {cell.render('Cell')} </td>
									))}
									<td>
										<PopoverMenu />
									</td>
								</tr>
							</OverlayTrigger>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
