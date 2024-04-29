'use client'
import { useState } from "react";
import { ActionIcon, Modal, Button, Tooltip, Flex, Text } from "@mantine/core";
import { IconCopy, IconExclamationMark, IconPencilSearch } from "@tabler/icons-react";


export default function ComoCitar(){
    const [opened, setOpened] = useState(false);
    const [toolTipLabel, setTooltipLabel] = useState("Copiar")
   
    let handleClose = () =>{
        setOpened(!opened)
    }

    function fechaActual(){
        const fecha = new Date();
        const mes = fecha.getMonth() + 1;
        const dia = fecha.getDate();
        const anio = fecha.getFullYear();        
        const fechaHoy = `${dia}/${mes}/${anio}`;
        
        return(fechaHoy)
    }

    
    let cita = `Vélez, C. H. (2024). Calculadora del Índice de Cambio Fiable (ICF). [en línea]. [consulta: ${fechaActual()}]. Recuperado de: https://calcularicf.vercel.app`

    function copiar(){
        navigator.clipboard.writeText(cita)
        setTooltipLabel("Elemento copiado")
        setTimeout(()=>setTooltipLabel("Copiar"), 1500)

    }

    return(
        <>       
        <Modal opened={opened} onClose={handleClose} title="¿CÓMO CITAR?">
        <Text>{cita}</Text>
        
        <Flex justify="flex-end">
        <Tooltip label={toolTipLabel}>
                            <ActionIcon 
        variant="default"
        component="button"
        onClick={copiar}><IconCopy/></ActionIcon></Tooltip></Flex>
      </Modal>
      
      <Button 
      leftSection={<IconPencilSearch/>} 
      variant="default"
      onClick={handleClose}
      
      >¿Cómo citar?</Button>
       
      </>
    )
}