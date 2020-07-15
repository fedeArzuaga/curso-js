/* Que son los modulos */

/* \

Un modulo en programacion nos va a permitir agrupar funcionalidad relacionada en un solo archivo.

Ventajas de usar modulos:
    - Podemos utilizarlos solamente cuando y donde lo requerimos.
    - Podemos reutilizar dicho modulo en otro proyecto.
    - Nos permiten dividir el codigo en pequeños archivos y nos organizan mejor el codigo
    - Evitan el conflicto con el nombre de las variables

Que es una dependencia?

Si un modulo, para su correcto funcionamiento, requiere de una pieza de otro modulo, se le llama "dependencia": ya que el primero depende de que el segundo se encuentre disponible. En resumen, una dependencia es parte fundamental de otro modulo que depende de la misma.

Ej => Bootstrap requiere jQuery = jQuery es una dependencia de Bootstrap

Desventajas de usar varios archivos js:
    - Cada script es una peticion HTTP que ralentiza el sitio
    - Cada script detiene la ejecucion del sitio mientras se descarga
    -El manejo de las dependencias es manual: Si el archivo b utiliza una funcion que recien está declarada en el archivo c, nos va a lanzar un error.

Otras formas de utilizar modulos en js:

Existen herramientas que hoy poy hoy nos ayudan con la creación de módulos en js: llámese Webpack, Bundlers, etc...

Sin embargo, aunque muchas de estas son muy utilizadas y en realidad están bastante bien en cuanto a la performance, ninguna funciona de forma nativa, como vamos a ver a continuación.

*/


// Sintaxis de importacion de modulo
/* 
Palabra        Señalamos las variables    palabra    
reservada      a importar                 reservada  Ruta del archivo que
import                                      from     exporta la data.
*/
import { nombreCliente, ahorro, mostrarInfo, mostrarNombre } from './cliente.js';

console.log(ahorro, nombreCliente);

const info = mostrarInfo(nombreCliente, ahorro);

const mostrarNombreCliente = mostrarNombre(nombreCliente)

console.log(mostrarNombreCliente);