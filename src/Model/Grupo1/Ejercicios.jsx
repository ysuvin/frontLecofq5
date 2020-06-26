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
            desc:'Ejercicio de abdomen', 
            vidlink:'https://www.youtube.com/watch?v=dQw4w9WgXcQ' 
        },
        {   nombre: 'Sentadillas', 
            desc:'Ejercicio piernas', 
            vidlink:'https://www.youtube.com/watch?v=XCiDuy4mrWU' 
        },
        {   nombre: 'Trote', 
            desc:'Ejercicio cardiavascular', 
            vidlink:'https://www.youtube.com/watch?v=fTFxE32onKs' 
        },
      ],
        
    };

export default Ejercicios;