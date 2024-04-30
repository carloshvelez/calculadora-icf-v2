'use client'
import { useState } from 'react';
import { Container, Group, Burger, Text, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import ComoCitar from '../ComoCitar/ComoCitar';
import classes from './Header.module.css';
import { usePathname } from 'next/navigation';
import path from 'node:path/win32';

const links = [
  { link: '/', label: 'Calculadora' },
  { link: '/calculo', label: 'Cálculo paso a paso' },
];



export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  let pathName = usePathname()
  
  

  const isActive = (href:string):boolean => pathName === href;
 
  

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={pathName == link.link ? classes.link_active:  classes.link}   
          
      onClick={() =>{        
        if (opened){          
          toggle()
                  
        }    
           
        
      }
      }     
      
    >
      {link.label} 
    </Link>
  ));

  

  return (
    <header className={classes.header}>
      
      <Container size="xl" className={classes.inner}>
        
        <Text size="md" fw={500}>Calculadura de cambio fiable</Text>
        
        <Group gap={5} visibleFrom="sm">
         {items}
         <ComoCitar/>
         
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <Drawer opened={opened} onClose={toggle} size="xs" closeOnClickOutside  withCloseButton={false}>
          {items} 
          <ComoCitar/> 
          </Drawer>
        
        
          
        
      </Container>

      
     
     
    </header>
  );
}