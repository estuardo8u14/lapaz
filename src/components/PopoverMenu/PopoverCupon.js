import React from 'react';
import { Dropdown } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import Popover from 'rsuite/Popover';
import Whisper from 'rsuite/Whisper';
import IconButton from 'rsuite/IconButton';
import TrashIcon from '@rsuite/icons/Trash';

// Icons
import PageIcon from '@rsuite/icons/Page';
//import FolderFillIcon from "@rsuite/icons/FolderFill";
import DetailIcon from '@rsuite/icons/Detail';
import OperatePeopleIcon from '@rsuite/icons/OperatePeople';
import PlusIcon from '@rsuite/icons/Plus';
import PublicOpinionIcon from '@rsuite/icons/PublicOpinion';
import UserInfoIcon from '@rsuite/icons/UserInfo';
import BranchIcon from '@rsuite/icons/Branch';
import MoreIcon from '@rsuite/icons/More';
import ReviewIcon from '@rsuite/icons/Review';
import ConversionIcon from '@rsuite/icons/Conversion';
//import EditIcon from '@rsuite/icons/Edit';

import { Link } from 'react-router-dom';
import ModalEditCuponCoex from '../Modals/ModalEditCuponCoex';

const MyCuponPopover = React.forwardRef(({ onSelect, ...rest }, ref) => (
	<Popover
		ref={ref}
		{...rest}
		full>
		<Dropdown.Menu onSelect={onSelect}>
			{/* <Link to={'/Edit'}>
				<Dropdown.Item
					eventKey={1}
					icon={<UserInfoIcon />}>
					Registro Consulta
				</Dropdown.Item>
			</Link> */}
			<Link to='/Anamnesis'>
				<Dropdown.Item
					eventKey={2}
					icon={<PlusIcon />}>
					Registro Consulta
				</Dropdown.Item>
			</Link>

			<Link to={'/EditCupon'}>
				<Dropdown.Item
					eventKey={6}
					icon={<ReviewIcon />}>
					Editar Cupón
				</Dropdown.Item>{' '}
			</Link>
			<Link to={'/EditCupon'}>
				<Dropdown.Item
					eventKey={6}
					icon={<TrashIcon />}>
					Eliminar
				</Dropdown.Item>{' '}
			</Link>
			<Link to={'/EditCupon'}>
				<Dropdown.Item
					eventKey={6}
					icon={<ConversionIcon />}>
					Re-agendar
				</Dropdown.Item>{' '}
			</Link>
			<Dropdown.Item eventKey={4}>
				<ModalEditCuponCoex />
			</Dropdown.Item>
			{/* <Dropdown.Item
				eventKey={5}
				icon={<PageIcon />}>
				Laboratorio
			</Dropdown.Item>
			<Dropdown.Item
				eventKey={6}
				icon={<DetailIcon />}>
				Diagnosticos
			</Dropdown.Item>
			<Dropdown.Item
				eventKey={6}
				icon={<ReviewIcon />}>
				SOP
			</Dropdown.Item> */}
		</Dropdown.Menu>
	</Popover>
));

export default function PopoverCupon() {
	return (
		<div style={{ padding: 10 }}>
			<Whisper
				placement='rightStart'
				controlId='control-id-with-dropdown'
				trigger='click'
				speaker={<MyCuponPopover />}>
				<IconButton
					icon={<MoreIcon />}
					appearance='primary'
					color='blue'></IconButton>
			</Whisper>
		</div>
	);
}
