
const Pacientes = [
    { nombre: 'Michael', apellido: 'Jackson', edad: 56, peso: 90, estatura: 189, run: "12734567-8" },
    { nombre: 'Hernando', apellido: 'Hernandez', edad: 26, peso: 70, estatura: 177, run: "13298567-1" },
    { nombre: 'Sebastian', apellido: 'Latorre', edad: 23, peso: 65, estatura: 154, run: "17921832-3" },
    { nombre: 'Fernando', apellido: 'Cerda', edad: 43, peso: 88, estatura: 180, run: "10985667-1" },
    { nombre: 'Marcelo', apellido: 'Aravena', edad: 52, peso: 92, estatura: 165, run: "12968567-1" },
    { nombre: 'Mauricio', apellido: 'Sanchez', edad: 77, peso: 67, estatura: 179, run: "12968567-1" },]

const HorasMedicas = [
    {run: Pacientes[0].run, nombre: Pacientes[0].nombre, apellido: Pacientes[0].apellido, especialidad: "Nutricion", medico: "Arturo Vidal", date: "26 Mar 2020, 10:30am", lugar: 3, confirmada: true},
    {run: Pacientes[1].run, nombre: Pacientes[1].nombre, apellido: Pacientes[1].apellido,especialidad: "Kine", medico: "Alexis Sanchez", date: "27 Mar 2020, 12:15pm" , lugar: 1, confirmada: false},
    {run: Pacientes[2].run, nombre: Pacientes[2].nombre, apellido: Pacientes[2].apellido,especialidad: "Kine", medico: "Arturo Vidal", date: "13 Jun 2020, 02:15pm" , lugar: 4, confirmada: false},
    {run: Pacientes[3].run, nombre: Pacientes[3].nombre, apellido: Pacientes[3].apellido,especialidad: "Nutricion", medico: "Reinaldo Rueda", date: "27 Mar 2020, 12:15pm" , lugar: 3, confirmada: true},
    {run: Pacientes[4].run, nombre: Pacientes[4].nombre, apellido: Pacientes[4].apellido,especialidad: "Kine", medico: "Alexis Sanchez", date: "27 Mar 2020, 12:15pm" , lugar: 2, confirmada: false},
    {run: Pacientes[5].run, nombre: Pacientes[5].nombre, apellido: Pacientes[5].apellido,especialidad: "Nutricion", medico: "Claudi Bravo", date: "27 Mar 2020, 12:15pm" , lugar: 1, confirmada: false},
];

export default HorasMedicas;
