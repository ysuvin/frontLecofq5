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

export default function KsAsigTabla() {

  
  const [state, setState] = React.useState({
    columns: [
      { title: 'Fecha', field: 'fecha', type:'date',
      },
    ],
    data: [
      { fecha: '2014-08-18T21:11:54'},
    ],
  });

  return (
    <MaterialTable
      title="Editable Example"
      icons={tableIcons}
      columns={state.columns}
      data={state.data}
      actions={[
        {
          icon: () => <AddBox/>,
          tooltip: 'Añadir ejercicios',
          onClick: (event, rowData) => {
            // Do save operation
          }
        }
      ]}
      localization={{
        body: {
          emptyDataSourceMessage: 'No hay datos',
          addTooltip: 'Hinzufügen',
          deleteTooltip: 'Löschen',
          editTooltip: 'Bearbeiten',
          filterRow: {
            filterTooltip: 'Filter'
          },
          editRow: {
            deleteText: 'Diese Zeile wirklich löschen?',
            cancelTooltip: 'Abbrechen',
            saveTooltip: 'Speichern'
          }
        },
        grouping: {
          placeholder: 'Spalten ziehen ...',
          groupedBy: 'Gruppiert nach:'
        },
        header: {
          actions: 'Aktionen'
        },
        pagination: {
          labelDisplayedRows: '{from}-{to} von {count}',
          labelRowsSelect: 'Zeilen',
          labelRowsPerPage: 'Zeilen pro Seite:',
          firstAriaLabel: 'Erste Seite',
          firstTooltip: 'Erste Seite',
          previousAriaLabel: 'Vorherige Seite',
          previousTooltip: 'Vorherige Seite',
          nextAriaLabel: 'Nächste Seite',
          nextTooltip: 'Nächste Seite',
          lastAriaLabel: 'Letzte Seite',
          lastTooltip: 'Letzte Seite'
        },
        toolbar: {
          addRemoveColumns: 'Spalten hinzufügen oder löschen',
          nRowsSelected: '{0} Zeile(n) ausgewählt',
          showColumnsTitle: 'Zeige Spalten',
          showColumnsAriaLabel: 'Zeige Spalten',
          exportTitle: 'Export',
          exportAriaLabel: 'Export',
          exportName: 'Export als CSV',
          searchTooltip: 'Suche',
          searchPlaceholder: 'Suche'
        }
      }}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
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
            }, 600);
          }),
      }}
    />
  );
}