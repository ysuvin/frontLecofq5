import React, {useState} from 'react';
import DateLabel from '../../../Component/Grupo4/InscripcionHoras/DateLabel';
import TimeLine from '../../../Component/Grupo4/InscripcionHoras/TimeLine';
import Grid from '@material-ui/core/Grid';
import { dateToDateString} from '../../../Component/Grupo4/InscripcionHoras/modules/dateConverter';


export default function Scheduling(props){

    const [selectedDate, setSelectedDate] = useState(null);
    const [activeHour, setActiveHour] = useState(null);


    console.log(props.selectedSpecialty);
    

    return (
        <div>
            <DateLabel setDate={setSelectedDate} date={selectedDate} setHour={setActiveHour} hour={activeHour}/>

            <Grid container spacing={3} justify='space-evenly'>

            {props.selectedHour ?
                <Grid item key={props.selectedHour.id}>
                    <TimeLine 
                        key={props.selectedHour.id} 
                        hour={props.selectedHour}
                        setSelectedHour={props.changeHour} 
                        selectedHour={props.selectedHour}
                    />
                </Grid>
                :

                selectedDate || activeHour?
                    // nose.filter(hora => (hora.date.getHours() == selectedDate.getHours() && dateToDateString(hora.date) === dateToDateString(selectedDate) &&  hora.speciality === props.selectedSpecialty)).map(tamp => (
                    //     <Grid item key={tamp.id}>
                    //         <TimeLine 
                    //             key={tamp.id} 
                    //             hour={tamp}
                    //             setSelectedHour={props.changeHour} 
                    //             selectedHour={props.selectedHour}
                    //         />
                    //     </Grid>
                    // ))
                    nose.filter(hora => (selectedDate === null || dateToDateString(hora.date) === dateToDateString(selectedDate)) && hora.speciality === props.selectedSpecialty).filter(hora2 => activeHour === null || activeHour.getHours() === hora2.date.getHours() ).map( data => (
                        <Grid item key={data.id}>
                            <TimeLine 
                                key={data.id} 
                                hour={data}
                                setSelectedHour={props.changeHour} 
                                selectedHour={props.selectedHour}
                            />
                        </Grid>                    
                    ))
                :
                    nose.filter(hora => hora.speciality === props.selectedSpecialty).map(tamp => (
                        <Grid item key={tamp.id}>
                            <TimeLine 
                                key={tamp.id} 
                                hour={tamp}
                                setSelectedHour={props.changeHour} 
                                selectedHour={props.selectedHour}
                            />
                        </Grid>
                    ))
        }


            </Grid>

        </div>
    )
}


const nose = [
    {name:'Bastian Peso', id:'12', speciality:'Especialidad 1', date: new Date('June 25, 2020 08:30:00')},
    {name:'Deiby Cabrera', id:'123',speciality:'Especialidad 1', date: new Date('June 25, 2020 09:30:00')},
    {name:'Manuel Martinez', id:'124',speciality:'Especialidad 1', date: new Date('June 25, 2020 10:00:00')},
    {name:'Vicky Latorre', id:'125',speciality:'Especialidad 2', date: new Date('June 25, 2020 13:30:00')},
    {name:'Pedro Luis', id:'126',speciality:'Especialidad 3', date: new Date('June 25, 2020 08:30:00')},
    {name:'Janito Alcachofa', id:'1308',speciality:'Especialidad 3', date: new Date('June 25, 2020 10:00:00')},
    {name:'Luisa Palma', id:'127',speciality:'Especialidad 3', date: new Date('June 25, 2020 15:00:00')},
    {name:'Deiby Cabrera', id:'1208',speciality:'Especialidad 2', date: new Date('June 25, 2020 15:24:00')},
    {name:'Deiby Cabrera', id:'129',speciality:'Especialidad 2', date: new Date('June 25, 2020 08:24:00')},
    {name:'Deiby Cabrera', id:'137',speciality:'Especialidad 2', date: new Date('June 25, 2020 09:00:00')},
    {name:'Deiby Cabrera', id:'131',speciality:'Especialidad 2', date: new Date('June 25, 2020 12:30:00')},

    {name:'ANTONIO AYUSO', id:'64783933', speciality:'Especialidad 5', date: new Date('June 26, 2020 08:30:00')},
    {name:'JUAN LUIS', id:'79862771', speciality:'Especialidad 5', date: new Date('June 26, 2020 08:30:00')},
    {name:'RAUL BAYON', id:'45322323', speciality:'Especialidad 5', date: new Date('June 26, 2020 08:30:00')},
    {name:'JOAN SAIZ', id:'89657880', speciality:'Especialidad 5', date: new Date('June 26, 2020 10:30:00')},
    {name:'JORDI INFANTE', id:'38013548', speciality:'Especialidad 5', date: new Date('June 26, 2020 10:30:00')},
    {name:'ANTONIO GUTI', id:'54146273', speciality:'Especialidad 5', date: new Date('June 26, 2020 10:30:00')},
    {name:'Deiby Cabrera', id:'60197016', speciality:'Especialidad 5', date: new Date('June 26, 2020 12:30:00')},
    {name:'David Aguilar', id:'47054589', speciality:'Especialidad 5', date: new Date('June 26, 2020 12:30:00')},
    {name:'Vicky Latorre', id:'29926392', speciality:'Especialidad 5', date: new Date('June 26, 2020 12:30:00')},

    {name:'CARLOS TEIX', id:'82416526', speciality:'Especialidad 4', date: new Date('June 26, 2020 08:30:00')},
    {name:'MANUEL QUEVEDO', id:'21899631', speciality:'Especialidad 4', date: new Date('June 26, 2020 08:30:00')},
    {name:'FELIPE VILLAESCUSA', id:'9165006', speciality:'Especialidad 4', date: new Date('June 26, 2020 08:30:00')},
    {name:'JOSE MARIA', id:'49352573', speciality:'Especialidad 4', date: new Date('June 26, 2020 10:30:00')},
    {name:'JOSE IGNACIO', id:'9926335', speciality:'Especialidad 4', date: new Date('June 26, 2020 10:30:00')},
    {name:'FRANCISCO', id:'40301754', speciality:'Especialidad 4', date: new Date('June 26, 2020 10:30:00')},
    {name:'OSCAR BARROSO', id:'90669003', speciality:'Especialidad 4', date: new Date('June 26, 2020 12:30:00')},
    {name:'JOSE ANTONIO', id:'14325441', speciality:'Especialidad 4', date: new Date('June 26, 2020 12:30:00')},
    {name:'PEDRO BASTIDA', id:'48627936', speciality:'Especialidad 4', date: new Date('June 26, 2020 12:30:00')},

    {name:'ESTHER CALERO', id:'39524113', speciality:'Especialidad 3', date: new Date('June 26, 2020 08:30:00')},
    {name:'EMILIA DIEGUEZ', id:'75327570', speciality:'Especialidad 3', date: new Date('June 26, 2020 08:30:00')},
    {name:'Sebastian Zuniga', id:'50020240', speciality:'Especialidad 3', date: new Date('June 26, 2020 08:30:00')},
    {name:'MONTSERRAT VILLALTA', id:'21149286', speciality:'Especialidad 3', date: new Date('June 26, 2020 10:30:00')},
    {name:'PAULA ARIÑO', id:'55472317', speciality:'Especialidad 3', date: new Date('June 26, 2020 10:30:00')},
    {name:'ROSARIO BALDE', id:'70854629', speciality:'Especialidad 3', date: new Date('June 26, 2020 10:30:00')},
    {name:'GLORIA MONTAÑA', id:'64944711', speciality:'Especialidad 3', date: new Date('June 26, 2020 12:30:00')},
    {name:'MILAGROS ROMERO', id:'12804718', speciality:'Especialidad 3', date: new Date('June 26, 2020 12:30:00')},
    {name:'ANA RECUERO', id:'74551708', speciality:'Especialidad 3', date: new Date('June 26, 2020 12:30:00')},

    {name:'MILAGROS MIRO', id:'9921049', speciality:'Especialidad 1', date: new Date('June 26, 2020 08:30:00')},
    {name:'MONTSERRAT CAPILLA', id:'85638301', speciality:'Especialidad 1', date: new Date('June 26, 2020 08:30:00')},
    {name:'JOSE IGNACIO', id:'66112124', speciality:'Especialidad 1', date: new Date('June 26, 2020 08:30:00')},
    {name:'FRANCISCO JAVIER', id:'66176967', speciality:'Especialidad 1', date: new Date('June 26, 2020 10:30:00')},
    {name:'JOSE PLATA', id:'36168543', speciality:'Especialidad 1', date: new Date('June 26, 2020 10:30:00')},
    {name:'RAMON CARRERA', id:'15736226', speciality:'Especialidad 1', date: new Date('June 26, 2020 10:30:00')},
    {name:'FRANCISCO JOSE', id:'59077486', speciality:'Especialidad 1', date: new Date('June 26, 2020 12:30:00')},
    {name:'JOSE MARIA', id:'10866298', speciality:'Especialidad 1', date: new Date('June 26, 2020 12:30:00')},
    {name:'SEBASTIAN LAR', id:'34017531', speciality:'Especialidad 1', date: new Date('June 26, 2020 12:30:00')},
]