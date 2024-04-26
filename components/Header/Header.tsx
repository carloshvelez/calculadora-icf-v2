'use client'
import { useState } from 'react';
import { Container, Group, Burger, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import ComoCitar from '../ComoCitar/ComoCitar';

import classes from './Header.module.css';

const links = [
  { link: '/', label: 'Calculadora' },
  { link: '/calculo', label: 'Cálculo paso a paso' },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={classes.link}        
      
    >
      {link.label} 
    </Link>
  ));

  

  return (
    <header className={classes.header}>
      
      <Container size="xl" className={classes.inner}>
        <Text size="md" fw={500}>Calculadura de cambio fiable</Text>
        
        <Group gap={5} visibleFrom="md">
         {items}
         <ComoCitar/>
        </Group>
          
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
     
    </header>
  );
}