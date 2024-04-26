import { Text } from '@mantine/core';
import classes from './TarjetaResultados.module.css';

interface TarjetaProps {
  titulo: string,
  dato: number,
  descripcion: string,
}
 

export default function TarjetaResultados({titulo, dato, descripcion} : TarjetaProps) {
  console.log(dato)
    return(
     <div className={classes.root}>
     <div key={titulo} className={classes.stat}>
      <Text className={classes.count}>{dato}</Text>
      <Text className={classes.title}>{titulo}</Text>
      <Text className={classes.description}>{descripcion}</Text>
    </div>
    </div>
    )
  
  ;  
}