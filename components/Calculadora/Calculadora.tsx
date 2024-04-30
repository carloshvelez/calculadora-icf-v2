'use client'
import {  Checkbox, Button, Group, Box, NumberInput, Flex } from '@mantine/core';
import { useForm } from '@mantine/form';
import React, {useState} from 'react';

import GraficoBarras from '../GraficoBarras/GraficoBarras';
import TarjetaResultados from '../TarjetaResultados/TarjetaResultados';
import classes from './Calculadora.module.css'


// Calcular EED:

function calcularDiferenciaConfiable(desviacion:number, confiabilidad:number):number{
    let complementariaConfiabilidad = 1-confiabilidad;         
        let eem = desviacion * Math.sqrt(complementariaConfiabilidad);
        let eed = eem * Math.sqrt(2);        
        return eed     
    }




    
    //RENDERIZADO DEL COMPONENTE

export default function Calculadora() {
  
  //Configuración del formulario
    const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      desvest: null,
      confiabilidad: null,
      pretest: null,
      postest: null,
    },
    //Validadores del formulario
    validate: {
      desvest: (value) => (value ?? 0 >= 0 ? null : 'La desviación estándar debe ser un número positivo'),      
      confiabilidad: (value) => ((value ?? 0 )> 0 && (value ?? 0 < 1) ? null : 'La confiabilidad debe ser un número entre 0 y 1'), 
      
    },
  });

  //Declarar interface para data del gráfico
  interface GraficoData{
    desvest: number,
    confiabilidad: number,
    pretest: number,
    postest: number,  
  }


  // Declaración de useStates
  const [eed,  setEed] = useState(0)
  const [quiereICF, setQuiereIcf] = useState(false)
  const [icf, setIcf] = useState<number | null>(null)
  const [dataGrafico, setDataGrafico] = useState <GraficoData>({
    desvest: 0,
    confiabilidad: 0,
    pretest: 0,
    postest: 0,   
  })

  
  //Manejar evento submit
  function handleSubmit (values:any):any{
    
    let eed:number = calcularDiferenciaConfiable(values.desvest, values.confiabilidad)         
    setEed(eed)
    if (values.postest !== "" && values.pretest !== "") {
        setIcf((values.postest - values.pretest)/eed) 
        setDataGrafico(values)
        console.log(dataGrafico)
      }
    else {
        setIcf(null)
    }       
  }

  return (
    <Flex gap="sm"  justify="space-around" className={classes.aplicacion}>    
    <Box maw={280} mx={25} className={classes.formulario}>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <NumberInput
        label="Desviación estándar"
        description="Ingrese desviación estándar en muestra normativa"
        placeholder='Desviación estándar'
        key={form.key('desvest')}
        {...form.getInputProps('desvest')}
        />

        <NumberInput
        label="Confiabilidad"
        description="Ingrese confiabilidad del instrumento"
        placeholder='Confiabilidad del instrumento'
        key={form.key('confiabilidad')}
        {...form.getInputProps('confiabilidad')}
        />

        <Checkbox 
            mt="15"
            label="Calcular ICF y Graficar"
            onChange={(event) => setQuiereIcf(event.currentTarget.checked)}></Checkbox>

        {quiereICF ? 
        <>
        <NumberInput
        label="Medida previa"
        description="Ingrese el puntaje en la medición previa"
        placeholder='Medida previa'
        key={form.key('pretest')}
        {...form.getInputProps('pretest')}
        />
        <NumberInput
        
        label="Medida posterior"
        description="Ingrese el puntaje en la medida posterior"
        placeholder='Medida posterior'
        key={form.key('postest')}
        {...form.getInputProps('postest')}
        /> 
        </>: 
        null
        }  
        <Group justify="flex-start" mt="md">
          <Button type="submit">Calcular</Button>
        </Group>
      </form>
    </Box>

    <Box mx="20" >
    <Flex gap="lg"  justify="center" className={classes.tarjetas}>
      {eed ? <>        
        <TarjetaResultados dato={Math.round(eed * 100) / 100} titulo="EED" descripcion="Error estandar de la diferencia"/>         
        <TarjetaResultados dato={Math.round((eed * 1.96) * 100) / 100} titulo="Punto de corte" descripcion="Debe obtenerse al menos esta diferencia"/>         
        </>: null}
      {quiereICF && eed && icf? 
      <>            
          <TarjetaResultados dato={Math.round((dataGrafico.postest  - dataGrafico.pretest) * 100)/100} titulo="Diferencia actual" descripcion="Diferencia entre postest y pretest"/> 
          <TarjetaResultados dato={Math.round(icf * 100)/100} titulo="Indice de cambio fiable" descripcion={Math.abs(icf) >= 1.96 ? "Diferencia fiable" : "Diferencia NO fiable"}/>      
      </>
         :null}     
    </Flex>
      
    {quiereICF && eed && icf?
      <Flex>
      <Box mt="35" mx="auto">
          <GraficoBarras pretest={dataGrafico.pretest} postest={dataGrafico.postest} diferenciaFiable={Math.round(eed*1.96 * 100) / 100} icf={icf}/>
      </Box>
      </Flex>
          :null} 
    
    </Box>
    </Flex>
  );
}