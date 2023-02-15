import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button, Typography, Card, CardContent, CardMedia, CardActionArea } from '@material-ui/core';
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

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
const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        position: 'absolute',
        width: 450,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));
export default function ModalCodigoPaciente() {
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
            <Button variant="contained" color="primary" onClick={handleOpen}>
                Finalizar
            </Button>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}> 
                    <Card sx={{ maxWidth: 300, display:'flex', justifyContent:'center' }}>
                        <CardActionArea>
                        <CardMedia
                            component="img"
                            height="auto"
                            image="/assets/videos/exito3_2foto.png"
                            alt="exito"
                            />
                            <CardContent>
                            <Typography variant="h6" align="center" color="text.secondary">
                            301974968
                            </Typography>
                            <Typography gutterBottom variant="h5" align="center" component="div">
                                Código de paciente creado para: Juan Pérez
                            </Typography>
                            <div class="row">
                                <div className="">
                                <Link to="/Tablas"><Button onClick={handleClose} className="col-lg-12 mb-3" variant="contained">Guardar</Button></Link>
                                </div>
                                <div className="">
                                    <Link to="/Admision"><Button className="col-lg-12" variant="contained">Guardar y generar admisión</Button></Link>  
                                </div>
                            </div>
                            
                                                                                  
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            </Modal>
        </div>
    );
}