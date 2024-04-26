import { BarChart } from '@mantine/charts';


  

export default function GraficoBarras(props) {

  let etiquetaLinea, valorLinea, posicionEtiqueta


  if (props.icf < 1.96 && props.icf >=0){
    etiquetaLinea = "El aumento NO es fiable"
    valorLinea = parseFloat(props.pretest) + parseFloat(props.diferenciaFiable);
    posicionEtiqueta = 'insideBottomLeft'
  }  else if (props.icf >= 1.96 ){
    etiquetaLinea = "El aumento es fiable"
    valorLinea = parseFloat(props.pretest) + parseFloat(props.diferenciaFiable);
    posicionEtiqueta = 'insideBottomLeft'
  } else if (props.icf > -1.96 && props.icf < 0){
    etiquetaLinea = "La reducción NO es fiable"
    valorLinea = parseFloat(props.pretest) - parseFloat(props.diferenciaFiable);
    posicionEtiqueta = 'insideTopRight'
  } else {
    etiquetaLinea = "La reducción es fiable";
    valorLinea = parseFloat(props.pretest) - parseFloat(props.diferenciaFiable);
    posicionEtiqueta = 'insideBottomRight'
  }
 
 const data = [
    { medicion: "Pretest", Resultado: props.pretest},
    { medicion: "Postest", Resultado: props.postest},    
  ];

 

  return (
    <BarChart
      h={300}
      w={500}
      data={data}      
      dataKey="medicion"
      gridColor='#dedede'
      withLabels
      yAxisProps={{domain: [0, props.pretest > props.postest ? Math.floor(props.pretest *1.2) : Math.floor(props.postest *1.2)] }}
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