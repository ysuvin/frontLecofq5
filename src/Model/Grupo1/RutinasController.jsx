import axios from 'axios';


export async function GetRutinas(){

    const fetchData = async () => {
      const result = await axios(
        'http://localhost:8080/rutina/',
      );
      return result;
    };
    const data = await fetchData();
    return data.data.data;
    
  }      

export async function PostRutina(model){

  const sendData = async () => {
    const response = await axios.post('http://localhost:8080/rutina/',model)
    return response;
  }
  const data = await sendData();
  return data.data.data;
}

export async function UpdateRutina(id,model){

  const sendData = async () => {
    const response = await axios.put('http://localhost:8080/rutina/'+id,model)
    return response;
  }
  const data = await sendData();
  return data.data.data;
}

export async function DeleteRutina(id){

  const sendQuery = async () => {
    const response = await axios.delete('http://localhost:8080/rutina/'+id)
    return response;
  }
  const data = await sendQuery();
  return data;
}



