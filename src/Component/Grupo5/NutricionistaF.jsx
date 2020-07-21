import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    }



}));

export default function NutricionistaF() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Antecedentes Personales
                </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <TextField required id="rutPaci" label="Rut del Paciente" fullWidth autoComplete="rut-paci" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        disabled
                        id="paciName"
                        label="Nombre del Paciente"
                        fullWidth
                        autoComplete="paci-number"
                    />
                </Grid>

                <Grid item xs={15} md={6}>
                    <form className={classes.container} noValidate>
                        <TextField
                            disabled
                            id="date"
                            label="Fecha de Nacimiento"
                            type="date"
                            defaultValue="none"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </form>
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField
                        disabled
                        id="estC"
                        label="Estadi Civil"
                        fullWidth
                        autoComplete="est-civil"
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField
                        id="actL"
                        label="Actividad Laboral"
                        fullWidth
                        autoComplete="act-lab"
                    />
                </Grid>

                <Grid item xs={6} md={6}>
                    <TextField
                        id="actF"
                        label="Actividad Fisica"
                        fullWidth
                        autoComplete="act-fis"
                    />
                </Grid>

                <Grid item xs={6} md={6}>
                    <TextField
                        type="number"
                        id="hSem"
                        label="Hrs Por Semanas"
                        fullWidth
                        autoComplete="h-sem"
                    />
                </Grid>
                <Grid item xs={6} md={6}>
                    <TextField
                        id="conAl"
                        label="Consumo de Alcohol"
                        fullWidth
                        autoComplete="con-Al"
                    />
                </Grid>
                <Grid item xs={6} md={6}>
                    <TextField
                        type="number"
                        id="cantSem1"
                        label="Cantidad por Semana"
                        fullWidth
                        autoComplete="cant-sem1"
                    />
                </Grid>
                <Grid item xs={6} md={6}>
                    <TextField
                        id="habTaba"
                        label="Hábito tabáquico"
                        fullWidth
                        autoComplete="hab-taba"
                    />
                </Grid>
                <Grid item xs={6} md={6}>
                    <TextField
                        type="number"
                        id="cantSem2"
                        label="Cantidad por Semana"
                        fullWidth
                        autoComplete="cant-sem2"
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>
                        Antecedentes Mórbidos
                    </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="checkPatologia"
                                color="primary"
                            />
                        }
                        label="Patologia"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="checkDiabetes"
                                color="primary"
                            />
                        }
                        label="Diabetes"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="checkObesidad"
                                color="primary"
                            />
                        }
                        label="Obesidad"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="checkDislipidemia"
                                color="primary"
                            />
                        }
                        label="Dislipidemia"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="checkCancer"
                                color="primary"
                            />
                        }
                        label="Cancer"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="checkHTA"
                                color="primary"
                            />
                        }
                        label="HTA"
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField
                        id="otrasPat"
                        label="Otras Patologias"
                        fullWidth
                        multiline
                        rows={3}
                        defaultValue=""
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>
                        Antropometría
                    </Typography>
                </Grid>
                <Grid container justify="space-around" spacing={1}>
                    <Grid item xs={3} md={6}>
                        <TextField
                            type="number"
                            id="peso"
                            label="Peso (Kg)"
                            fullWidth
                            autoComplete="peso-kg"
                        />
                    </Grid>
                    <Grid item xs={3} md={6}>
                        <TextField
                            type="number"
                            id="talla"
                            label="Talla (cm)"
                            fullWidth
                            autoComplete="talla-cm"
                        />
                    </Grid>
                    <Grid item xs={3} md={6}>
                        <TextField
                            type="number"
                            id="imc"
                            label="IMC"
                            fullWidth
                            autoComplete="imc"
                        />
                    </Grid>
                </Grid>

                <Grid container justify="space-around" spacing={1}>
                    <Grid item xs={3} md={6}>
                        <TextField
                            type="number"
                            id="cCint"
                            label="C. cintura"
                            fullWidth
                            autoComplete="c-cint"
                        />
                    </Grid>
                    <Grid item xs={3} md={6}>
                        <TextField
                            type="number"
                            id="cCad"
                            label="C. Cadera"
                            fullWidth
                            autoComplete="c-cad"
                        />
                    </Grid>
                    <Grid item xs={3} md={6}>
                        <TextField
                            type="number"
                            id="icc"
                            label="I.C.C."
                            fullWidth
                            autoComplete="icc"
                        />
                    </Grid>
                </Grid>
                <Grid container justify="space-around" spacing={1}>
                    <Grid item xs={2} md={6}>
                        <TextField
                            type="number"
                            id="pitri"
                            label="PITRI"
                            fullWidth
                            autoComplete="pitri"
                        />
                    </Grid>
                    <Grid item xs={2} md={6}>
                        <TextField
                            type="number"
                            id="pibi"
                            label="PIBI"
                            fullWidth
                            autoComplete="pibi"
                        />
                    </Grid>
                    <Grid item xs={2} md={6}>
                        <TextField
                            type="number"
                            id="pisb"
                            label="PISB"
                            fullWidth
                            autoComplete="pisb"
                        />
                    </Grid>
                    <Grid item xs={2} md={6}>
                        <TextField
                            type="number"
                            id="pisc"
                            label="PISC"
                            fullWidth
                            autoComplete="pisc"
                        />
                    </Grid>
                </Grid>
                <Grid container justify="space-around" spacing={1}>
                    <Grid item xs={3} md={6}>
                        <TextField
                            type="number"
                            id="porcentG"
                            label="% Grasa"
                            fullWidth
                            autoComplete="porcent-g"
                        />
                    </Grid>
                    <Grid item xs={3} md={6}>
                        <TextField
                            type="number"
                            id="gmb"
                            label="G.M.B."
                            fullWidth
                            autoComplete="gmb"
                        />
                    </Grid>
                    <Grid item xs={3} md={6}>
                        <TextField
                            type="number"
                            id="pesoIdeal"
                            label="Peso Ideal"
                            fullWidth
                            autoComplete="peso-ideal"
                        />
                    </Grid>  
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>
                        Anamnesis alimentaria: Recordatorio 24 Hrs
                    </Typography>
                </Grid>
                <Grid container justify="space-around" spacing={1}>
                    <Grid item xs={3} md={6}>
                        <TextField
                            id="tiemCom"
                            label="Tiempos de Comida"
                            fullWidth
                            multiline
                            rows={30}
                            defaultValue=""
                        />
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <TextField
                            id="aliPorc"
                            label="Alimentos y Porciones"
                            fullWidth
                            multiline
                            rows={30}
                            defaultValue=""
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6} alignContent="flex-end" className={classes.root}>
                    <Button variant="outlined" color="primary" href="#contained-buttons" startIcon={<CheckIcon />} onClick={handleClick} >
                        Finalizar
                </Button>
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success">
                            La ficha se ha creado con exito!
                        </Alert>
                    </Snackbar>
                </Grid>

            </Grid>


        </React.Fragment>
    );
}
