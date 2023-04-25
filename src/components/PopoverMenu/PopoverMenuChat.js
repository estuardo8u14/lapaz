import React from 'react';
import { Dropdown } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import Popover from 'rsuite/Popover';
import Whisper from 'rsuite/Whisper';
import IconButton from 'rsuite/IconButton';

import {
	Button,
	ButtonGroup,
	TextField,
	List,
	ListItem,
	ListItemText,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
//import EditIcon from '@rsuite/icons/Edit';

import { Link } from 'react-router-dom';

const ChatPopover = React.forwardRef(({ onSelect, ...rest }, ref) => (
	<Popover
		ref={ref}
		{...rest}
		full>
		<Dropdown.Menu onSelect={onSelect}>
			<Dropdown.Item
				eventKey={1}
				icon={<UserInfoIcon />}>
				Orden
			</Dropdown.Item>

			{/* <Link to={'/NewAdmission'}>
				<Dropdown.Item
					eventKey={2}
					icon={<PlusIcon />}>
					Admisión
				</Dropdown.Item>
			</Link> */}

			<Dropdown.Item
				eventKey={2}
				icon={<PublicOpinionIcon />}>
				Evolución
			</Dropdown.Item>
			<Dropdown.Item
				eventKey={3}
				icon={<DetailIcon />}>
				Medicamento
			</Dropdown.Item>

			<Dropdown.Item
				eventKey={5}
				icon={<PageIcon />}>
				Imagenes Dx
			</Dropdown.Item>

			{/* <Dropdown.Item
				eventKey={6}
				icon={<ReviewIcon />}>
				SOP
			</Dropdown.Item> */}

			<Dropdown.Item
				eventKey={4}
				icon={<BranchIcon />}>
				Laboratorio
			</Dropdown.Item>
		</Dropdown.Menu>
	</Popover>
));

export default function PopoverMenuChat() {
	return (
		<div style={{ padding: 10 }}>
			<Whisper
				placement='leftStart'
				controlId='control-id-with-dropdown'
				trigger='click'
				speaker={<ChatPopover />}>
				<IconButton
					icon={<MoreIcon />}
					appearance='primary'
					color='orange'></IconButton>
			</Whisper>
		</div>
	);
}
