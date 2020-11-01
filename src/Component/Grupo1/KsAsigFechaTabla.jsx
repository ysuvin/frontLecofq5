import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
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
import history from '../../history.jsx';
import {GetRutinas, PostRutina, UpdateRutina, DeleteRutina} from '../../Model/Grupo1/RutinasController';
import { PacienteContext } from '../../Model/Grupo1/PacienteContext';
import { RutinaContext } from '../../Model/Grupo1/RutinaContext';
import { KsViewContext } from '../../Model/Grupo1/KsViewContext';
import Button from '@material-ui/core/Button';



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

export default function KsAsigFechaTabla(rutinas) {

  const redirectKsAsEj = () =>
  {
    setKsViewC(2);
  }
    
  //Query que recupera las fechas
  const [state, setState] = React.useState(null);
  const [isLoading,setIsLoading] = React.useState(true);
  const [pacienteC, setPacienteC] = React.useContext(PacienteContext);
  const [rutinaC, setRutinaC] = React.useContext(RutinaContext);
  const [ksViewC, setKsViewC] = React.useContext(KsViewContext);

  const fetchData = async () => {
      const query = await GetRutinas().then((res) => {
        var response = []
        for(var i = 0; i < res.length; i++)
        {

          if(res[i].idPaciente == pacienteC._id)
          {
            response.push(res[i]);
          }
        }
      return response;
      });
      return query;

  }

  const postData = async (rutina) => {
      return await PostRutina(rutina);
  }

  const updateData = async (id,rutina) => {
      return await UpdateRutina(id,rutina);
  }

  const deleteData = async (id) => {
      return await DeleteRutina(id);
  }

  useEffect(() => {
    fetchData().then((query) =>{
      setState(query);
      console.log(query);
      setIsLoading(false);
    }
    );
  }, []);


 /* { title: 'Link de Google Meet', field: 'Link', type:'string',
      },*/
  const columns = [
      { title: 'Fecha', field: 'fecha', type:'date',
      },
      
  ]; 

  return (
    <div>
    {isLoading ? 
      (
        <div>Cargando...</div>
      ) : 
      (
        <MaterialTable
        title="Asignar Rutinas"
        icons={tableIcons}
        columns={columns}
        data={state}
        actions={[
          {
            icon: () => <AddBox/>,
            tooltip: 'Añadir ejercicios',
            onClick: (event, rowData) =>{
              setRutinaC({_id: rowData._id,});
              redirectKsAsEj();
            }
          }
        ]}
        localization={{
          body: {
            emptyDataSourceMessage: 'No hay datos',
            addTooltip: 'Añadir rutinas',
            deleteTooltip: 'Borrar',
            editTooltip: 'Editar',
            filterRow: {
              filterTooltip: 'Filtrar'
            },
            editRow: {
              deleteText: '¿Seguro que quieres eliminar esta rutina de ejericios?',
              cancelTooltip: 'No',
              saveTooltip: 'Sí'
            }
          },
          grouping: {
            placeholder: 'Arrastrar columnas...',
            groupedBy: 'Agrupar por:'
          },
          header: {
            actions: 'Acciones'
          },
          pagination: {
            labelDisplayedRows: '{from}-{to} de {count}',
            labelRowsSelect: 'Rutinas',
            labelRowsPerPage: 'Rutinas por página:',
            firstAriaLabel: 'Primera página',
            firstTooltip: 'Primera página',
            previousAriaLabel: 'Página anterior',
            previousTooltip: 'Página anterior',
            nextAriaLabel: 'Siguente página',
            nextTooltip: 'Siguente página',
            lastAriaLabel: 'Última página',
            lastTooltip: 'Última página'
          },
          toolbar: {
            addRemoveColumns: 'Agregar o eliminar columnas',
            nRowsSelected: '{0} línea (s) seleccionada (s)',
            showColumnsTitle: 'Mostrar columnas',
            showColumnsAriaLabel: 'Mostrar columnas',
            exportTitle: 'Exportar',
            exportAriaLabel: 'Exportar',
            exportName: 'Exportar a CSV',
            searchTooltip: 'Buscar',
            searchPlaceholder: 'Buscar'
          }
        }}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                console.log(newData.fecha);
                console.log(pacienteC._id);
                postData({idPaciente: pacienteC._id, fecha: newData.fecha,}).then((response) => {
                  const datito = [...state];
                  datito.push(response);
                  setState(datito);
                })  
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  //Este código indecente hace que esta sección no sea flexible
                  var nextData = state;
                  updateData(newData._id,{idPaciente: newData.idPaciente, fecha: newData.fecha});
                  nextData[nextData.indexOf(oldData)].fecha = newData.fecha;
                  setState(nextData);
                }
              }, 600);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                setState((prevState) => {
                  const data = [...prevState];
                  data.splice(data.indexOf(oldData), 1);
                  deleteData(oldData._id);
                  return data;
                });
              }, 600);
            }),
        }}
      />
      )}
      <p></p>
      <Button variant="contained" color="secondary" onClick={() => { setKsViewC(0);}}>Volver</Button>
      </div>
      
  );
}