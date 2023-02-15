import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button , Card, CardContent , CardActionArea } from '@material-ui/core';
import { Link } from "react-router-dom";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

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
export default function ModalDir() {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    
    const options = ['Guatemala', 'Escuintla','Alta Verapaz', 'Baja Verapaz', ];
    const zonas = ['z1', 'z2', 'z3', 'z4', 'z5', 'z6', 'z7', 'z8', 'z9', 'z10', 'z11', 'z12', 'z13', 'z14', 'z15', 'z16', 'z17', 'z18', 'z19', 'z20', 'z21'];
    const lugarpob = ['Xiche', 'Quetzaltenango','Cobán'];

    const [value, setValue] = React.useState(options[0]);
    const [valuezonas, setValuezonas] = React.useState(zonas[0]);
    const [valuelug, setValuelug] = React.useState(options[0])

    const [inputValue, setInputValue] = React.useState('');
    const [inputValuezona, setInputValuezona] = React.useState('');
    const [inputValuelug, setInputValuelug] = React.useState('');

    return (
        <div>
            <Button variant="contained" color="warning" onClick={handleOpen}>
                Agregar detalles
            </Button>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}> 
                    <Card sx={{ maxWidth: 340, display:'flex', justifyContent:'center' }}>
                        <CardActionArea>
                            <CardContent>
                            <h2 className="fw-monoscpase fw-500">Dirección</h2>
                            <div class="row">
                                    <div class="col-lg-12 mb-3">
                                        <div class="form-gorup">
                                            <label class="mont-font fw-600 font-xssss">Dirección:</label>
                                            <input type="text" name="comment-name" class="form-control" />
                                        </div>        
                                    </div>
                                </div>
            
                                <div class="row">
                                    <div class="col-lg-3 mb-3">
                                        <div class="form-gorup">
                                            <Autocomplete
                                                value={valuezonas}
                                                onChange={(event, newValuezonas) => {
                                                setValuezonas(newValuezonas);
                                                }}
                                                inputValuezona={inputValuezona}
                                                onInputChange={(event, newInputValuezona) => {
                                                    setInputValuezona(newInputValuezona);
                                                }}                                        
                                                id="controllable-states-demo"
                                                options={zonas}
                                                sx={{ width: 300 }}
                                                renderInput={(params) => <TextField {...params} label="Zona" />}
                                            />
                                        </div>        
                                    </div>
                                </div>
                                <div class="row"> 

                                    <div class="col-lg-12 mb-3">
                                        <div class="form-gorup">
                                        <Autocomplete
                                                value={value}
                                                onChange={(event, newValue) => {
                                                setValue(newValue);
                                                }}
                                                inputValue={inputValue}
                                                onInputChange={(event, newInputValue) => {
                                                setInputValue(newInputValue);
                                                }}
                                                id="controllable-states-demo"
                                                options={options}
                                                sx={{ width: 300 }}
                                                renderInput={(params) => <TextField {...params} label="País" />}
                                            />
                                        </div>        
                                    </div>

                                    <div class="col-lg-12 mb-3">
                                        <div class="form-gorup">
                                        <Autocomplete
                                                value={value}
                                                onChange={(event, newValue) => {
                                                setValue(newValue);
                                                }}
                                                inputValue={inputValue}
                                                onInputChange={(event, newInputValue) => {
                                                setInputValue(newInputValue);
                                                }}
                                                id="controllable-states-demo"
                                                options={options}
                                                sx={{ width: 300 }}
                                                renderInput={(params) => <TextField {...params} label="Departamento" />}
                                            />
                                        </div>        
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-12 mb-3">
                                        <div class="form-gorup">
                                        <Autocomplete
                                                value={value}
                                                onChange={(event, newValue) => {
                                                setValue(newValue);
                                                }}
                                                inputValue={inputValue}
                                                onInputChange={(event, newInputValue) => {
                                                setInputValue(newInputValue);
                                                }}
                                                id="controllable-states-demo"
                                                options={options}
                                                sx={{ width: 300 }}
                                                renderInput={(params) => <TextField {...params} label="Municipio" />}
                                            />
                                        </div>        
                                    </div>

                                    <div class="col-lg-12 mb-3">
                                        <div class="form-gorup">
                                        <Autocomplete
                                                value={valuelug}
                                                onChange={(event, newValuelug) => {
                                                setValuelug(newValuelug);
                                                }}
                                                inputValuelug={inputValuelug}
                                                onInputChange={(event, newInputValuelug) => {
                                                setInputValuelug(newInputValuelug);
                                                }}
                                                id="controllable-states-demo"
                                                options={lugarpob}
                                                sx={{ width: 300 }}
                                                renderInput={(params) => <TextField {...params} label="Lugar poblado" />}
                                            />
                                        </div>        
                                    </div>
                                </div>
                                    

                            <Link to="/Admisiones"><Button variant="contained">Finalizar</Button></Link>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            </Modal>
        </div>
    );
}