import React from 'react';
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
import Fechas from '../../../Model/Grupo1/Fechas';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import history from '../../../history.jsx';



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

export default function PacVerFechasTabla() {

  const redirectPacVerEjercicios = () =>
  {
    history.push('/Grupo1/PacVerFechas/PacVerEjercicios');
  }

  
  const state = Fechas;

  return (
    <MaterialTable
      title=""
      icons={tableIcons}
      columns={state.columns}
      data={state.data}
      actions={[
        {
          icon: () => <NavigateNextIcon/>,
          tooltip: 'Ver ejercicios asignados',
          onClick: (event, rowData) => {
            redirectPacVerEjercicios()
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
            deleteText: '¿Seguro que quieres eliminar esta ejercicio de ejericios?',
            cancelTooltip: 'No',
            saveTooltip: 'Sí'
          }
        },
        grouping: {
          placeholder: 'Arrastrar columnas...',
          groupedBy: 'Agrupar por:'
        },
        header: {
          actions: 'Ver'
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
      options={{
        actionsColumnIndex: -1
      }}

    />
  );
}