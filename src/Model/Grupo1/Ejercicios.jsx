const Ejercicios = {
    nombres: ['uno','dos','tres'],

    columns: [
        { 
            title: 'Nombre del ejercicio',
            field: 'nombre' 
        },
        { 
            title: 'Descripción del ejercicio', 
            field: 'desc' },
        {   
            title: 'Link video de Youtube', 
            field: 'vidlink' 
        },
    ],
    data: [
        {   nombre: 'Abdominales', 
            desc:'Este ejercicio abdominal comienza con la cara boca arriba descansando en el suelo con las rodillas dobladas. El movimiento comienza moviendo los hombros hacia la pelvis. Las manos pueden estar detrás o al lado del cuello o cruzadas sobre el pecho. La lesión puede ser causada por empujar la cabeza o el cuello con las manos', 
            vidlink:'https://www.youtube.com/watch?v=2tXQbi16EdI' 
        },
        {   nombre: 'Sentadillas', 
            desc:'El movimiento básico se inicia siempre en posición erguida. El movimiento se realiza flexionando rodillas y cadera para hacer bajar el cuerpo hacia el suelo sin perder la verticalidad, volviendo luego a la posición erguida.', 
            vidlink:'https://www.youtube.com/watch?v=9ow1Hb1jWHc' 
        },
        {   nombre: 'Trote', 
            desc:'Postura del cuerpo: se recomienda dirigir la vista al frente mientras se trota, a través de lo cual se estira automáticamente el tronco. Dolor de costado: es un indicio de una respiración inadecuada, es importante alargar la fase de espiración con respecto a la fase de inspiración y levantar el brazo del costado donde se siente el dolor. Superficie: Para cuidar las articulaciones, se debiera preferir una superficie elástica y blanda, lo ideal son los caminos de bosques y prados. También la elección de las zapatillas juega un rol determinante. “Idealmente la práctica debe realizarse en superficies blandas o similares como el pasto, tierra, arena, evitando los lugares irregulares ya que se podrían producir lesiones del pie. Evitar el cemento o concreto ya que no permite amortiguación, si lo hacen en superficies duras deben hacerlo en tiempo progresivo para que el cuerpo y las zonas sensibles puedan adaptarse al impacto”, dijo Venegas.', 
            vidlink:'https://www.youtube.com/watch?v=908_TON1JlI' 
        },
        {   nombre: 'Caminata', 
            desc:'La caminata es un ejercicio aeróbico que ayuda a controlar el peso, quema grasa, aumenta la masa muscular, condiciona el corazón y el sistema respiratorio, favorece el sistema inmune, reduce el estrés, combate la depresión, aumenta el flujo de oxígeno a través del cuerpo y promueve una sensación de fortaleza y bienestar general.', 
            vidlink:'https://www.youtube.com/watch?v=39Sn10y7HMM' 
        },
      ],
        
    };

export default Ejercicios;