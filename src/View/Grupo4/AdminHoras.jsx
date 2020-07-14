import React from "react";
import MaterialTable from 'material-table';
import { forwardRef } from 'react';
import { AddBox, ArrowDownward } from "@material-ui/icons";
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import Container from '@material-ui/core/Container';

import { useHistory } from 'react-router';


import HorasMedicas from '../../Model/Grupo4/HorasMedicas';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

export default function AdminHoras() {
    const history = useHistory();
    const [state, setState] = React.useState({
        columns: [
            { title: 'RUN', field: 'run' },
            { title: 'Apellido', field: 'apellido' },
            { title: 'Nombre', field: 'nombre' },
            { title: 'Especialidad', field: 'especialidad' },
            { title: 'Medico', field: 'medico' },
            { title: 'Fecha', field: 'date', type: 'datetime' },
            {
                title: 'Locacion',
                field: 'lugar',
                lookup: { 1: 'Centro 1', 2: 'Centro 2', 3: 'Centro 3', 4: 'Centro 4' },
            },
            {
                title: 'Confirmada',
                field: 'confirmada',
                type: 'bool',
                lookup: { true: 'Si', false: 'No' },
            },
        ],
        data:
            HorasMedicas,
    });

    let TableStyle = {
        maxWidth: "100%",
        width: '112rem',
        marginTop: '5%'
    };

    return (
        <Container >
            <MaterialTable
            //se modifica la accion agregar horas 
                actions={[
                    (() => ({
                        position: "toolbar",
                        icon: AddBox,
                        tooltip: "Agendar Hora",
                        onClick: () => {
                            history.push('/Grupo4/secretario/horas');
                        }
                    }))({ position: 'toolbar' })
                ]}
                localization={{
                    toolbar: { searchPlaceholder: 'Buscar', searchTooltip: "Buscar" },
                    body: {
                        //addTooltip: "Agendar Hora",
                        deleteTooltip: "Borrar",
                        editTooltip: "Editar",
                        editRow: {
                            saveTooltip: "Aceptar",
                            cancelTooltip: "Cancelar",
                            deleteText: "Esta seguro de que desea eliminar este registro? ",
                        },
                    },
                    header: { actions: "Acciones" },
                    pagination: {
                        labelDisplayedRows: "{from}-{to} de {count}",
                        labelRowsSelect: "Filas",
                        firstTooltip: "Primera Pagina",
                        previousTooltip: "Pagina Anterior",
                        nextTooltip: "Pagina Siguiente",
                        lastTooltip: "Ultima Pagina",
                    }
                }} // TRADUCCION AL ESPAniol
                style={TableStyle}
                icons={tableIcons}
                title="Horas Medicas"
                columns={state.columns}
                data={state.data}
                options={{ actionsColumnIndex: -1, pageSizeOptions: [5, 10, 25, 50, 100] }} // Acciones a la derecha
                editable={{
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                if (oldData) {
                                    setState((prevState) => {
                                        const data = [...prevState.data];
                                        data[data.indexOf(oldData)] = newData;
                                        return { ...prevState, data };
                                    });
                                }
                                //Funcion post para hacer update en la base de datos
                                alert("Registro actualizado!");
                            }, 600);
                        }),
                    onRowDelete: (oldData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                setState((prevState) => {
                                    const data = [...prevState.data];
                                    data.splice(data.indexOf(oldData), 1);
                                    return { ...prevState, data };
                                });
                                //Funcion delete/hide para hacer en la BD
                                alert("Registro eliminado!");
                            }, 600);
                        }),
                }}
            />


        </Container>
    );
}
