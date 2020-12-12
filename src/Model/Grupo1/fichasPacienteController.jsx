import axios from 'axios';


export async function GetFichasPaciente(){

    const fetchData = async () => {
      const result = await axios(
        'http://localhost:8080/fichaPaciente/',
      );
      return result;
    };
    const data = await fetchData();
    return data.data.data;
    
  }    

