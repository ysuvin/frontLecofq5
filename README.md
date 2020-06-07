## Repositorio principal de la React Web App para GPI
### Líderes crear sus propios Fork para compartir con sus grupos y Branches para consolidar su progreso
Se espera que se utilice este repositorio como la base de todos los módulos que componen el sistema que se debe desarrollar para el proyecto.

### Detalles importantes:
El proyecto tiene implementada una estructura MVC (Model, View, Component):
1. Model: En esta carpeta (src/Model/) tienen que ir todos los recursos no programáticos de la aplicación (imagenes, datos específicos, etc) que se utilicen.
2. View: En esta carpeta (src/View/) van todas las vistas del sistema, en el código hay ejemplos de cómo utilizarlas, se utiliza el redireccionamiento mediante history.
3. Component: (src/Component/)Cualquier componente individual que utilice el módulo en el que estén trabajando debiese
ir en esta carpeta.

Se espera que cada grupo separe sus componentes, vistas y modelos por carpeta, por ejemplo, para el grupo 1, si desease generar un nuevo componente, lo haría en la ruta ./Component/Grupo1/[Componente]
y similarmente para las otras carpetas, para mantener cierto orden.

### Como descargar con GIT, instalar y ejecutar con NPM

Corran los siguientes 3 comandos en la carpeta que más les convenga:

`git clone https://github.com/svillegasduni/proyectogpi.git`

`npm install`

`npm start`

Y con eso ya debiesen tener todo funcional.

Eso.
