import React from "react";
import { Dropdown } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import Popover from "rsuite/Popover";
import Whisper from "rsuite/Whisper";
import IconButton from "rsuite/IconButton";
  
// Icons
import PageIcon from "@rsuite/icons/Page";
//import FolderFillIcon from "@rsuite/icons/FolderFill";
import DetailIcon from "@rsuite/icons/Detail";
import OperatePeopleIcon from '@rsuite/icons/OperatePeople';
import PlusIcon from '@rsuite/icons/Plus';
import PublicOpinionIcon from '@rsuite/icons/PublicOpinion';
import UserInfoIcon from '@rsuite/icons/UserInfo';
import BranchIcon from '@rsuite/icons/Branch';
import MoreIcon from '@rsuite/icons/More';
import ReviewIcon from '@rsuite/icons/Review';
import EditIcon from '@rsuite/icons/Edit';

import { Link } from "react-router-dom";
  
const MyPopover = React.forwardRef(({ onSelect, ...rest }, ref) => (
  <Popover ref={ref} {...rest} full>
    <Dropdown.Menu onSelect={onSelect}>
    <Link to={"/Perfil"}><Dropdown.Item eventKey={1} icon={<UserInfoIcon />}>
        Perfil
      </Dropdown.Item></Link>
      <Link to={"/Admisiones"}><Dropdown.Item eventKey={2} icon={<PlusIcon />}>
        Admisión
      </Dropdown.Item></Link>
      <Link to={"/Enfermeria"}><Dropdown.Item eventKey={3} icon={<PublicOpinionIcon />}>
        Ordenes Médicas
      </Dropdown.Item></Link>
      <Link to={"/Medico"}><Dropdown.Item eventKey={4} icon={<OperatePeopleIcon />}>
        Notas de Evolución
      </Dropdown.Item></Link>
      <Dropdown.Item eventKey={5} icon={<PageIcon />}>
        Laboratorio
      </Dropdown.Item>
      <Dropdown.Item eventKey={6} icon={<DetailIcon />}>
        Diagnostico
      </Dropdown.Item>
      <Dropdown.Item eventKey={6} icon={<ReviewIcon />}>
        SOP
      </Dropdown.Item>
      <Dropdown.Item eventKey={6} icon={<BranchIcon />}>
        Encamamiento
      </Dropdown.Item>
    </Dropdown.Menu>
  </Popover>
));
  
export default function PopoverMenu() {
  return (
    <div style={{ padding: 10 }}>
      <Whisper
        placement="rightStart"
        controlId="control-id-with-dropdown"
        trigger="click"
        speaker={<MyPopover />}
      >
          <IconButton
            icon={<MoreIcon />}
            appearance="primary"
            color="orange"
          >
            Opciones
          </IconButton>
      </Whisper>
    </div>
  );
}