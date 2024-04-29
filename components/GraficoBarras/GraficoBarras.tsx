import { BarChart} from '@mantine/charts';
import { LabelPosition } from 'recharts/types/component/Label';


interface GraficoProps {
  pretest: number,
  postest: number,
  icf: number,
  diferenciaFiable: number
}

export default function GraficoBarras({pretest, postest, icf, diferenciaFiable} : GraficoProps) {
  

  let etiquetaLinea:string, valorLinea:number, posicionEtiqueta:LabelPosition;

  if (icf < 1.96 && icf >=0){
    etiquetaLinea = "El aumento NO es fiable"
    valorLinea = pretest + diferenciaFiable;
    posicionEtiqueta = 'insideBottomLeft'
  }  else if (icf >= 1.96 ){
    etiquetaLinea = "El aumento es fiable"
    valorLinea = pretest + diferenciaFiable;
    posicionEtiqueta = 'insideBottomLeft'
  } else if (icf > -1.96 && icf < 0){
    etiquetaLinea = "La reducción NO es fiable"
    valorLinea = pretest - diferenciaFiable;
    posicionEtiqueta = 'insideTopRight'
  } else {
    etiquetaLinea = "La reducción es fiable";
    valorLinea = pretest - diferenciaFiable;
    posicionEtiqueta = 'insideBottomRight'
  }
 
 const data = [
    { medicion: "Pretest", Resultado: pretest},
    { medicion: "Postest", Resultado: postest},    
  ];

 
  
  return (
    
    <BarChart
      h={300}
      w={350}
      data={data}      
      dataKey="medicion"
      gridColor='#dedede'
      
      yAxisProps={{domain: [0, pretest > postest ? Math.floor(pretest *1.2) : Math.floor(postest *1.2)] }}
      referenceLines={[
        {
          y: valorLinea,
          color: 'black',
          label: etiquetaLinea,          
          labelPosition: posicionEtiqueta,
        },
        
      ]}
      series={[
        { name: 'Resultado', color: 'blue.7' },
        
        
        
      ]}
    />
    
  );
}