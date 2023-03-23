import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import {
  Button,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@material-ui/core";
// import { Link } from "react-router-dom";
import ModalCodigoPaciente from "./ModalCodigoPaciente";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}
function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    position: "absolute",
    width: 450,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
export default function ModalPuntoVenta() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Pagar
      </Button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <Card
            sx={{ maxWidth: 300, display: "flex", justifyContent: "center" }}
          >
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  Punto de venta
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  Revisar NIT correcto: 907598-5
                </Typography>
                <input
                  required
                  type="text"
                  placeholder="NIT (Dejar en blanco si es correcto*)"
                  name="comment-name"
                  class="form-control mb-2"
                />

                <Typography class="pt-2 fw-700" variant="h7" component="div">
                  Monto: Q80
                  <Button variant="contained" className="ms-6">
                    Tarjeta
                  </Button>
                  <Button variant="contained" className="ms-2">
                    Efectivo
                  </Button>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </Modal>
    </div>
  );
}
