import { Container, Group, ActionIcon, rem, Text, Tooltip } from '@mantine/core';
import { IconBrandLinkedin, IconBrandGithub, IconAppWindow } from '@tabler/icons-react';
import classes from './Footer.module.css';

const enlaces = {
  linkedin: "https://www.linkedin.com/in/carlos-humberto-vélez-ocampo-9541617a",
  gitHub: "https://www.github.com/carloshvelez",
  paginaPersonal: "https://carlos-velez.vercel.app",
  
}


export default function Footer() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
      <Text c="dimmed" size="sm">
          © 2024 Carlos Humberto Vélez Ocampo. Todos los derechos reservados.
        </Text>
        
       
        <Group gap={0} className={classes.links} justify="flex-end" wrap="nowrap">
          
          <Tooltip label="LinkedIn">
          <ActionIcon size="lg" color="gray" variant="subtle" component='a' href={enlaces.linkedin} target='_blank'>
            <IconBrandLinkedin style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          </Tooltip>
          <Tooltip label="GitHub">
          <ActionIcon size="lg" color="gray" variant="subtle" component='a' href={enlaces.gitHub} target='_blank'>
            <IconBrandGithub style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          </Tooltip>
          <Tooltip label="Página personal">
          <ActionIcon size="lg" color="gray" variant="subtle" component='a' href={enlaces.paginaPersonal} target='_blank'>
            <IconAppWindow style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          </Tooltip>
          
        </Group>
        
      </Container>
      
    </div>
  );
}