import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Alert from '@material-ui/lab/Alert';

const styles = theme => ({
    menu: {
        width: 200
    }
});
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


const useStyles1 = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

class TextFields extends React.Component {
    state = {
        name: "",
        currency: ""
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };

    submit = event => {
        event.preventDefault();
        console.log("Enviar", event);
    };

    render() {
        const { classes } = this.props;

        return (
            <form
                onSubmit={this.submit.bind(this)}
                autoComplete="on"
            >
                <TextField
                    id="name"
                    label="Name"
                    required
                    margin="dense"
                    type="name"
                    style={{ margin: 8 }}
                    fullWidth
                    InputLabelProps={{
                        shrink: true
                    }}
                />
                <TextField
                    required
                    margin="dense"
                    id="email"
                    label="Correo"
                    type="email"
                    fullWidth
                    style={{ margin: 8 }}
                    InputLabelProps={{
                        shrink: true
                    }}
                />
                <TextField
                    required
                    id="date"
                    label="Fecha de nacimiento"
                    type="date"
                    fullWidth
                    style={{ margin: 8 }}
                    margin="dense"
                    InputLabelProps={{
                        shrink: true
                    }}
                />
                <TextField
                    required
                    margin="dense"
                    id="Fono"
                    label="Numero de contacto"
                    type="number"
                    fullWidth
                    style={{ margin: 8 }}
                    InputLabelProps={{
                        shrink: true
                    }}
                />
                <Alert severity="info">En caso de ser menor de edad, por favor llenar con los datos de su tutor legal!</Alert>
                <TextField
                    margin="dense"
                    id="name01"
                    label="Nombre Completo del tutor"
                    type="name"
                    style={{ margin: 8 }}
                    fullWidth
                    InputLabelProps={{
                        shrink: true
                    }}
                />
                <TextField
                    margin="dense"
                    id="Fono01"
                    label="Numero de contacto del tutor"
                    type="number"
                    fullWidth
                    style={{ margin: 8 }}
                    InputLabelProps={{
                        shrink: true
                    }}
                />
                <TextField
                    margin="dense"
                    id="email01"
                    label="Correo del tutor"
                    type="email"
                    fullWidth
                    style={{ margin: 8 }}
                    InputLabelProps={{
                        shrink: true
                    }}
                />
                <Button type="submit" variant="outlined" style={{ backgroundColor: "#f99f31" }}>
                    <text style={{ color: '#FFF' }}>Enviar</text>

                </Button>
            </form>
        );
    }
}

TextFields.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TextFields);
