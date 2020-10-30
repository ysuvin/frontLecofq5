import axios from 'axios';


export async function GetEjercicios(){

    const fetchData = async () => {
      const result = await axios(
        'http://localhost:8080/ejercicio/',
      );
      return result;
    };
    const data = await fetchData();
    return data.data.data;
    
  }      

export async function PostEjercicio(model){

  const sendData = async () => {
    const response = await axios.post('http://localhost:8080/ejercicio/',model)
    return response;
  }
  const data = await sendData();
  return data.data.data;
}

export async function UpdateEjercicio(id,model){

  const sendData = async () => {
    const response = await axios.put('http://localhost:8080/ejercicio/'+id,model)
    return response;
  }
  const data = await sendData();
  return data.data.data;
}

export async function DeleteEjercicio(id){

  const sendQuery = async () => {
    const response = await axios.delete('http://localhost:8080/ejercicio/'+id)
    return response;
  }
  const data = await sendQuery();
  return data;
}

  


