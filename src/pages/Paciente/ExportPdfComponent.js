import { Button } from '@material-ui/core';
import React from 'react';
import ReactToPrint from 'react-to-print';
import PrintingComponent from './PrintingComponent';
import logo from '../../assets/img/logomid.png';

class ExportPdfComponent extends React.Component {
	print() {
		window.print();
	}
	render() {
		return (
			<div>
				<img
					src={logo}
					alt='logomid'
					// className='logo'
				/>
				<h1>Consulta Médica</h1>

				<PrintingComponent ref={(response) => (this.componentRef = response)} />

				<ReactToPrint
					content={() => this.componentRef}
					trigger={() => <a></a>}
				/>
				<button
					onClick={this.print}
					className='btn btn-primary'>
					Imprimir PDF
				</button>
			</div>
		);
	}
}

export default ExportPdfComponent;
