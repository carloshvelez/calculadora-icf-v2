import { Text } from '@mantine/core';
import classes from './TarjetaResultados.module.css';

 

export default function TarjetaResultados(props) {
    return(
     <div className={classes.root}>
     <div key={props.titulo} className={classes.stat}>
      <Text className={classes.count}>{props.dato}</Text>
      <Text className={classes.title}>{props.titulo}</Text>
      <Text className={classes.description}>{props.descripcion}</Text>
    </div>
    </div>
    )
  
  ;  
}