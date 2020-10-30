import axios from 'axios';


export async function GetPacientes(){

    const fetchData = async () => {
      const result = await axios(
        'http://localhost:8080/paciente/',
      );
      return result;
    };
    const data = await fetchData();
    return data.data.data;
    
  }    

