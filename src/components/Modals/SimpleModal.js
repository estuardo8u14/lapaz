import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button, Typography, Card, CardContent, CardMedia, CardActionArea } from '@material-ui/core';
import { Link } from "react-router-dom";

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
export default function SimpleModal() {
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
                Guardar
            </Button>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}> 
                    <Card sx={{ maxWidth: 340 }}>
                        <CardActionArea>
                            <CardMedia
                            component="video"
                            height="130"
                            image="/assets/videos/finger.mp4"
                            alt="fingerprint"
                            autoPlay
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Para finalizar y guardar:
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Ingresa tu huella
                            </Typography>
                            <Link to="/Perfil"><Button variant="contained">Finalizar</Button></Link>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            </Modal>
        </div>
    );
}