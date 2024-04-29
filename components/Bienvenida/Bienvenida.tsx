import { Title, Text, Anchor } from '@mantine/core';


export default function Bienvenida() {
  return (
    <>
      <Title ta="center" mt={25} >
        Calculadora del Índice de Cambio Fiable (ICF)
      </Title>
      <Text  size="lg" mx="12.5%" my="md" mb={30}>
        Para verificar si la diferencia entre el postest y el pretest es fiable, calcularemos el error estandar de la diferencia (EED). Los cambios fiables superan en más de 1.96 veces el EED. 
      </Text>
    </>
  );
}
