import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import { Box } from '@mantine/core';
import classes from './TextoCalculo.module.css'


function fechaActual(){
    const fecha = new Date();
    const mes = fecha.getMonth() + 1;
    const dia = fecha.getDate();
    const anio = fecha.getFullYear();
    
    const fechaHoy = `${dia}/${mes}/${anio}`;
    
    return(fechaHoy)
}
    

export default function TextoCalculo(){
    return(
        <Box bg="#e1e8e5">
            <Box h={18}></Box>
            <Box bg="white" mx="17%" p="45px">
        <h1>Un paso a paso del procedimiento</h1>
    <p>El ICF responde a una pregunta: ¿Hay un cambio fiable en la variable, entre el tiempo 1 y el tiempo 2? Si el ICF es mayor que 1.96, entonces se acepta que sí hubo un cambio fiable. Si el ICF es menor que 1.96, entonces se asume que los cambios observados, si los hubiere, se deben a la variabilidad que cabe esperar debido a los errores de medida del instrumento. Para hacer este análisis, el ICF simplemente verifica si los cambios observados son esperables dada la confiabilidad del instrumento y la desviación estándar en las medidas de la variable tomadas en una muestra normativa.</p>
    <p>Para calcular el ICF seguiremos tres pasos:</p>
    <ol>
        <li>Calcular el error estándar de la medida (EEM).</li>
        <li>Calcular el error estándar de las diferencias (EED).</li>
        <li>Calcular el ICF con los dos cálculos anteriores.</li>
    </ol>
    <p>Veamos el paso a paso y su explicación, a continuación.</p>
    <h2 className={classes.titulo2}>Calculando el error estandar de la medida (EEM)</h2>
    <p>El EEM refleja cuál sería el error típico de nuestro instrumento si los aplicamos a miles de muestras elegidas al azar desde la población.</p>
    <p>Para calcular el EEM, utilizaremos la medida de error del instrumento (el coeficiente de confiabilidad), y una medida de variabilidad de la población (la desviación estándar de la muestra normativa, en la variable de interés). Nuestra primera fórmula sería esta:</p>
    <Latex>{"$$EEM = DEnorma \\times \\sqrt{1 - \\alpha\}$$"}</Latex>
    <p>Donde</p>
    <Latex> \(DEnorma = \)Desviación estándar de la población normativa</Latex>
    <Latex> \(\alpha = \)Coeficiente de confiabilidad del instrumento</Latex>
    <p>Imagina que estamos usando un instrumento con un coeficiente de confiabilidad de 0.91 y que la población en la que se validó obtuvo una desviación estándar de 12.3 para la variable de interés. En ese escenario nuestro EEM sería:</p>
    <Latex> {"$$EEM = 12.3 \\cdot \\sqrt{1 - 0.91}$$"}</Latex>
    <Latex>{"$$EEM = 12.3 \\cdot \\sqrt{0.09}$$"}</Latex>
    <Latex>{"$$EEM = 3.69$$"}</Latex>
    <h2 className={classes.titulo2}>Calculando el error estándar de las diferencias (EED)</h2>
    <p>Un principio en estadística afirma que, cuando comparamos la misma medida tomada en diferentes momentos (que es lo que hacemos con el ICF), el resultado tenderá a variar más que una única medida. El EED es una manera de tomar el EEM y hacer un cálculo para que refleje esa mayor variabilidad. La fórmula es muy sencilla:</p>
    <Latex>{"$$EDD = EEM  \sqrt{2}$$"}</Latex>
    <p>En nuestro ejemplo, el EEM resultó en 3.69, así que la fórmula quedaría así:</p>
    <Latex>{"$$EDD = 3.96  \sqrt{2}$$"}</Latex>
    <Latex>{"$$EDD = 5.60  $$"}</Latex>
    <p>Ya casi lo tienes. De hecho este es el valor que te muestra la calculadora y es el que se multiplica por 1.96 para verificar si tus diferencias son confiables. Esto nos está diciendo que, para que tus diferencias sean confiables, deben ser superiores a 1.96 veces el error estándar de la diferencia (EED).</p>
    <h2 className={classes.titulo2}>Calculando el ICF</h2>
    <p>El índice de cambio confiable es simplemente la división de las diferencias entre tus medidas y el error estándar de la diferencia (EED). La fórmula que aplicamos sería esta:</p>
    <Latex>{"$$ICF = \frac{X_{\text{post}} - X_{\text{pre}}}{EED}$$"}</Latex>
    <p>Donde:</p>
    <p><Latex>{"$X_{\\text{post}}= $Tu medida post"}</Latex></p>
    <p><Latex>{"$X_{\\text{post}}= $Tu medida pre"}</Latex></p>
    <p><Latex>{"$EED= $Error estándar de la diferencia"}</Latex></p>
    <p>Imagina que estás utilizando el instrumento que venimos tomando como ejemplo, y que se lo aplicaste a una persona en el pre, obteniendo un puntaje de 30 y en el post, obteniendo un puntaje de 20. En ese escenario, la fórmula sería así:</p>
    <p><Latex>{"$$ICF = \\frac{30 - 20}{5.60}$$"}</Latex></p>
    <p><Latex>{"$$ICF = \\frac{10}{5.60}$$"}</Latex></p>
    <p><Latex>{"$$ICF = 1.79$$"}</Latex></p>
    <p>En este ejemplo, debido a que el ICF no es mayor que 1.96, no podemos decir que el cambio sea confiable.</p>

    <h2 className={classes.titulo2}>¿Para qué existe el ICF?</h2>
    <p>La historia del ICF es interesante. Jacobson et al. (1984) estaban interesados en proponer una alternativa a la medición de la eficacia de los tratamientos. Tradicionalmente se habían usado métodos basados en pruebas de significancia para medir cambios en las medias entre grupos, y medidas del tamaño del efecto; sin embargo, dado el reconocimiento de que el uso exclusivo de esos métodos era problemático, y de poco impacto en la práctica clínica, propusieron medir la significancia clínica.</p>
    <p>A diferencia de la significancia estadística, que establece que un tratamiento es efectivo si el test estadístico usado alcanza un valor p menor o igual a un alfa especificado (típicamente 0.05); la significancia clínica propone que para establecer los efectos de un tratamiento, se deben alcanzar dos criterios:</p>
    <ol>
        <li>Suponiendo que las personas con puntajes disfuncionales, y aquellas con puntajes funcionales, hacen parte de dos poblaciones diferentes, en la medición postest el paciente debería haberse alejado de los puntajes de la población disfuncional y acercado a los puntajes de la funcional.</li>
        <li>La magnitud del cambio debe ser estadísticamente confiable. Es decir, es necesario asegurarse de que el cambio no es producto de una variación esperable dados los errores de medida del instrumento.</li>
    </ol>
    <p>Para  ilustrar lo anterior, es posible tomar como base un ejemplo que posteriormente plantearon Jacobson y Truax (1991): imagínate que un tratamiento para la obesidad tiene como resultado una pérdida de 2 libras de peso en promedio para el grupo experimental, y de 0 libras en promedio para el grupo control. Desde el punto de vista de la significancia estadística, la diferencia entre el grupo experimental y el control seguramente será significativa, y, por lo tanto, el tratamiento podría juzgarse como efectivo. Sin embargo, ¿realmente es así?.</p>
    <p>Lo que proponen Jacobson y Truax es que en el ejemplo anterior el tratamiento no necesariamente presenta una significancia clínica, pese a que demuestre significancia estadística. Para que se pueda asegurar que los cambios en las personas que recibieron el tratamiento son significativos desde un punto de vista clínico, tendríamos que verificar si las dos libras de diferencia promedio alejan a los individuos del peso de la "población disfuncional" (en este caso, con sobrepeso u obesidad) y la acercan a la "población funcional". Dada la diferencia mínima, probablemente Jacobson y Truax estaban sugiriendo que no. Además, de acuerdo con el segundo criterio arriba expuesto, es necesario verificar que esa diferencia de 2 libras no se debe a errores de medida del instrumento (por ejemplo, cierta imprecisión normal y esperable en las balanzas utilizadas).</p>
    <p className={classes.enfasis}>!El ICF refleja ese segundo criterio¡</p>
    <p>Volviendo a la historia, inicialmente Jacobson et al. (1984) propusieron que el ICF debe estar 1.96 veces por encima del error estándar de la medida (EEM; el primer cálculo que hacemos). Sin embargo, posteriormente Christensen y Mendoza (1986) envían una carta al editor de la revista Behavior Therapy y señalan que Jacobson et al. se equivocan en su planteamiento del ICF, pues es necesario tener en cuenta que cuando se comparan dos medidas hay una mayor variabilidad; y, por lo tanto, proponen el uso del Error Estándar de la Diferencia (EED; el segundo cálculo que hacemos)  para dar cuenta de tal variabilidad. En 1991 aparece el artículo de Jacobson y Truax que usualmente se cita al plantear el ICF y se integra la corrección de Christensen y Mendoza a la evaluación de la significancia clínica.</p>
    <p>Desde entonces, se han propuesto diferentes versiones del ICF, algunas de las cuales se revisan en el artículo de Castillo (2010), trabajo que, por cierto, te recomiendo si quieres profundizar en los dos criterios de cambio fiable propuesto por Jacobson y Truax. </p>

    <h2 className={classes.titulo2}>Límites en el uso de este cálculo</h2>
    <p>A la hora de usar el ICF, es importante que tengas en cuenta algunas limitaciones:</p>
    <ol>
        <li>Ten en cuenta que todo esto es un análisis que se basa en medidas usualmente psicométricas. En ese sentido su confiabilidad depende de las propiedades psicométricas de los instrumentos que usas. Además, la evaluación de cualquier cambio clínico siempre debe ser multimétodo, de manera que te recomiendo que consideres fuentes adicionales de información a la hora de medir el cambio clínico.</li>
        <li>Recuerda que este es sólo uno de los dos criterios que proponen Jacobson y Truax (1991), el cual es considerado suficiente en el planteamiento metodológico de algunas investigaciones que complementan su interpretación con otras medidas. Si quieres hacer una análisis completo de significancia clínica, debes considerar el otro criterio, mediante el cual se establece si en el postest tu usuario se alejó de la "población disfuncional" y superó el punto de corte para considerarlo más cerca de la "población funcional".</li>        
        <li>Algunos efectos estadísticos pueden afectar su confiablidad, de ahí que se hayan propuesto otras alternativas (Castillo, 2010)</li>

    </ol>
    <h2 className={classes.titulo2}>Referencias bibliográficas</h2>
    <p className={classes.cita}><span className="autor">Castillo, I. I.</span> (2010). <span className="titulo"> Evaluación de resultados clínicos (y III): Índices de Cambio Fiable (ICF) como estimadores del cambio clínicamente significativo.</span><span className={classes.revista}> Norte de Salud Mental</span><span className="volumen"> 8</span>(36), 105-122. Recuperado de: <a className="doi" href="https://dialnet.unirioja.es/descarga/articulo/4830423.pdf">https://dialnet.unirioja.es/descarga/articulo/4830423.pdf</a>.</p>

    <p className={classes.cita}><span className="autor">Christensen, L. & Mendoza, J. L.</span> (1986). <span className="titulo">A method of assessing change in a single subject: An alteration of the RC index.</span><span className={classes.revista}> Behavior Therapy</span><span className="volumen"> 17</span>(3), 305-308. <a className="doi" href="https://doi.org/10.1016/S0005-7894(86)80060-0">https://doi.org/10.1016/S0005-7894(86)80060-0</a>.</p>




    <p className={classes.cita}><span className="autor">Jacobson, N. S., Follette, W. C. & Revenstorf, D.</span> (1984). <span className="titulo">Psychotherapy outcome research: Methods for reporting variability and evaluating clinical significance.</span><span className={classes.revista}> Behavior Therapy</span><span className="volumen"> 15</span>(4), 336-352. <a className="doi" href="https://doi.org/10.1016/S0005-7894(84)80002-7">https://doi.org/10.1016/S0005-7894(84)80002-7</a>.</p>

    <p className={classes.cita}><span className="autor">Jacobson N. S & Truax, P.</span> (1991). <span className="titulo">Clinical Significance: A statistical approach to defining meaningful change in psychotherapy.</span><span className={classes.revista}> Journal of Consulting and Clinical Psychology</span><span className="volumen"> 59</span>(1), 12-19. <a className="doi" href="https://doi.org/10.1037/0022-006X.59.1.12">https://doi.org/10.1037/0022-006X.59.1.12</a>.</p>
    <h2 className={classes.titulo2}>Cómo citar:</h2>

    <p className={classes.cita}>Vélez, C. H. (2023). Calculadora del Índice de Cambio Fiable (ICF). [en línea]. [consulta: {fechaActual()}]. Recuperado de: https://carloshvelez.github.io/icf/.</p>
    </Box>
    <Box h={18}></Box>
    </Box>
    
    )
}