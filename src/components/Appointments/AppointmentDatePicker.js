import { Button } from '@material-ui/core';
import React, { ReactDOM } from 'react';
import { Link } from 'react-router-dom';

import { Accordion, Icon } from 'semantic-ui-react';
import Overview from './Overview';
import OverviewSmall from './OverviewSmall';

let d = [
	{
		key: 'Home',
		title: 'Centro Hospitalario: La Paz Zona 1',
		content: [
			{
				key: 'Menu',
				title: 'Clínica: Cardiología',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
			{
				key: 'Menu',
				title: 'Clínica: Cirugía General',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
			{
				key: 'Menu',
				title: 'Clínica: Flebología',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
			{
				key: 'Menu',
				title: 'Clínica: Ginecología',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
			{
				key: 'Menu',
				title: 'Clínica: Medicina Interna',
				content: [
					{
						key: 'SettingsOne',
						title: 'Médico',
						content: [
							{
								key: 'Home',
								title: 'María Gomez',
								content: [],
							},

							{
								key: 'Questwealth portfolios',
								title: 'Julio Ruiz',
								content: [],
							},
							{
								key: 'Account request',
								title: 'Tomas Álvarez',
								content: [],
							},
						],
					},
				],
			},
			{
				key: 'Menu',
				title: 'Clínica: Nutrición',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
			{
				key: 'Menu',
				title: 'Clínica: Otorrinolaringología',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
			{
				key: 'Menu',
				title: 'Clínica: Pediatría',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
			{
				key: 'Menu',
				title: 'Clínica: Traumatología',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
		],
	},
	{
		key: 'Home',
		title: 'Centro Hospitalario: La Paz Zona 10',
		content: [
			{
				key: 'Menu',
				title: 'Clínica: Cardiología',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
			{
				key: 'Menu',
				title: 'Clínica: Cirugía General',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
			{
				key: 'Menu',
				title: 'Clínica: Flebología',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
			{
				key: 'Menu',
				title: 'Clínica: Ginecología',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
			{
				key: 'Menu',
				title: 'Clínica: Medicina Interna',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
			{
				key: 'Menu',
				title: 'Clínica: Nutrición',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
			{
				key: 'Menu',
				title: 'Clínica: Otorrinolaringología',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
			{
				key: 'Menu',
				title: 'Clínica: Pediatría',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
			{
				key: 'Menu',
				title: 'Clínica: Traumatología',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
		],
	},
	{
		key: 'Home',
		title: 'Centro Hospitalario: La Paz Zona 11',
		content: [
			{
				key: 'Menu',
				title: 'Clínica: Cardiología',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
			{
				key: 'Menu',
				title: 'Clínica: Cirugía General',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
			{
				key: 'Menu',
				title: 'Clínica: Flebología',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
			{
				key: 'Menu',
				title: 'Clínica: Ginecología',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
			{
				key: 'Menu',
				title: 'Clínica: Medicina Interna',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
			{
				key: 'Menu',
				title: 'Clínica: Nutrición',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
			{
				key: 'Menu',
				title: 'Clínica: Otorrinolaringología',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
			{
				key: 'Menu',
				title: 'Clínica: Pediatría',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
			{
				key: 'Menu',
				title: 'Clínica: Traumatología',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
		],
	},
	{
		key: 'Home',
		title: 'Centro Hospitalario: La Paz Zona 14',
		content: [
			{
				key: 'Menu',
				title: 'Clínica: Cardiología',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
			{
				key: 'Menu',
				title: 'Clínica: Cirugía General',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
			{
				key: 'Menu',
				title: 'Clínica: Flebología',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
			{
				key: 'Menu',
				title: 'Clínica: Ginecología',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
			{
				key: 'Menu',
				title: 'Clínica: Medicina Interna',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
			{
				key: 'Menu',
				title: 'Clínica: Nutrición',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
			{
				key: 'Menu',
				title: 'Clínica: Otorrinolaringología',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
			{
				key: 'Menu',
				title: 'Clínica: Pediatría',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
			{
				key: 'Menu',
				title: 'Clínica: Traumatología',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
		],
	},
	{
		key: 'Home',
		title: 'Centro Hospitalario: La Paz Eskala',
		content: [
			{
				key: 'Menu',
				title: 'Clínica: Cardiología',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
			{
				key: 'Menu',
				title: 'Clínica: Cirugía General',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
			{
				key: 'Menu',
				title: 'Clínica: Flebología',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
			{
				key: 'Menu',
				title: 'Clínica: Ginecología',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
			{
				key: 'Menu',
				title: 'Clínica: Medicina Interna',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
			{
				key: 'Menu',
				title: 'Clínica: Nutrición',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
			{
				key: 'Menu',
				title: 'Clínica: Otorrinolaringología',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
			{
				key: 'Menu',
				title: 'Clínica: Pediatría',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
			{
				key: 'Menu',
				title: 'Clínica: Traumatología',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
		],
	},
	{
		key: 'Home',
		title: 'SERMESA: Los Altos',
		content: [
			{
				key: 'Menu',
				title: 'Clínica: Cardiología',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
			{
				key: 'Menu',
				title: 'Clínica: Cirugía General',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
			{
				key: 'Menu',
				title: 'Clínica: Flebología',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
			{
				key: 'Menu',
				title: 'Clínica: Ginecología',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
			{
				key: 'Menu',
				title: 'Clínica: Medicina Interna',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
			{
				key: 'Menu',
				title: 'Clínica: Nutrición',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
			{
				key: 'Menu',
				title: 'Clínica: Otorrinolaringología',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
			{
				key: 'Menu',
				title: 'Clínica: Pediatría',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
			{
				key: 'Menu',
				title: 'Clínica: Traumatología',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
		],
	},
	{
		key: 'Home',
		title: 'SERMESA: Carretera a El Salvador',
		content: [
			{
				key: 'Menu',
				title: 'Clínica: Cardiología',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
			{
				key: 'Menu',
				title: 'Clínica: Cirugía General',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
			{
				key: 'Menu',
				title: 'Clínica: Flebología',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
			{
				key: 'Menu',
				title: 'Clínica: Ginecología',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
			{
				key: 'Menu',
				title: 'Clínica: Medicina Interna',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
			{
				key: 'Menu',
				title: 'Clínica: Nutrición',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
			{
				key: 'Menu',
				title: 'Clínica: Otorrinolaringología',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
			{
				key: 'Menu',
				title: 'Clínica: Pediatría',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
			{
				key: 'Menu',
				title: 'Clínica: Traumatología',
				content: [
					{
						key: 'Home',
						title: 'María Gomez',
						content: [],
					},

					{
						key: 'Questwealth portfolios',
						title: 'Julio Ruiz',
						content: [],
					},
					{
						key: 'Account request',
						title: 'Tomas Álvarez',
						content: [],
					},
				],
			},
		],
	},
];

function recurr(d, num) {
	if (d.length === 0) {
		return;
	} else {
		for (let i = 0; i < d.length; i++) {
			recurr(d[i]['content'], num + 1);

			if (d[i]['content'].length !== 0) {
				d[i]['content'] = {
					content: (
						<div>
							<Accordion.Accordion panels={d[i]['content']} />
						</div>
					),
				};
			} else {
				d[i]['content'] = {
					content: (
						<div>
							<OverviewSmall />
							{/* <Overview /> */}
							<Link
								to='/Overview'
								target='_blank'
								rel='noopener noreferrer'>
								<Button
									className='mt-3'
									variant='contained'>
									Calendario Completo
								</Button>
							</Link>
							{/* <Accordion.Title
								icon={Icon.Group}
								content='Crear Cita'
								as={'button'}
								onClick={(event) => {
									console.log(event.target.textContent);
								}}
							/> */}
						</div>
					),
				};
			}
		}
	}
}

var t0 = performance.now();
recurr(d, 0);
var t1 = performance.now();
console.log('Llamada se tardo ' + (t1 - t0) + ' millisegundos.');

const AppointmentDatePicker = () => (
	<Accordion
		defaultActiveIndex={0}
		panels={d}
		styled
		fluid
	/>
);

export default AppointmentDatePicker;
