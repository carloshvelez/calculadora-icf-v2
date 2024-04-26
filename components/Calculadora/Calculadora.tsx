'use client'
import {  Checkbox, Button, Group, Box, NumberInput, Flex } from '@mantine/core';
import { useForm } from '@mantine/form';
import React, {useState} from 'react';

import GraficoBarras from '../GraficoBarras/GraficoBarras';
import TarjetaResultados from '../TarjetaResultados/TarjetaResultados';
import classes from './Calculadora.module.css'

function calcularDiferenciaConfiable(desviacion:number, confiabilidad:number):string{
    let complementariaConfiabilidad = 1-confiabilidad;         
        let eem = desviacion * Math.sqrt(complementariaConfiabilidad);
        let eed = eem * Math.sqrt(2);        
        return eed.toFixed(2)     
        

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

    validate: {
      desvest: (value) => (value >= 0 ? null : 'La desviación estándar debe ser un número positivo'),      
      confiabilidad: (value) => (value > 0 && value < 1 ? null : 'La confiabilidad debe ser un número entre 0 y 1'), 
      
    },
  });


  // Declaración de useStates
  const [eed,  setEed] = useState(0)
  const [quiereICF, setQuiereIcf] = useState(0)
  const [icf, setIcf] = useState<number | null>(null)
  const [dataGrafico, setDataGrafico] = useState([{}])

  

  function handleSubmit (values:any):any{
    
    let eed:number = calcularDiferenciaConfiable(values.desvest, values.confiabilidad)         
    setEed(eed)
    if (values.postest !== "" && values.pretest !== "") {
        setIcf((values.postest - values.pretest)/eed) 
        setDataGrafico(values)
        console.log(dataGrafico.pretest)
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
        <TarjetaResultados dato={eed} titulo="EED" descripcion="Error estandar de la diferencia"/>         
        <TarjetaResultados dato={(eed*1.96).toFixed(2)} titulo="Punto de corte" descripcion="Debe obtenerse al menos esta diferencia"/>         
        </>: null}
      {quiereICF && eed && icf? 
      <>            
          <TarjetaResultados dato={dataGrafico.postest - dataGrafico.pretest} titulo="Diferencia actual" descripcion="Diferencia entre postest y pretest"/> 
          <TarjetaResultados dato={icf.toFixed(2)} titulo="Indice de cambio fiable" descripcion={Math.abs(icf) >= 1.96 ? "Diferencia fiable" : "Diferencia NO fiable"}/>      
      </>
         :null}     
    </Flex>
      
    {quiereICF && eed && icf?
      <Flex>
      <Box mt="35" mx="auto">
          <GraficoBarras pretest={dataGrafico.pretest} postest={dataGrafico.postest} diferenciaFiable={(eed*1.96).toFixed(2)} icf={icf}/>
      </Box>
      </Flex>
          :null} 
    
    </Box>
    </Flex>
  );
}