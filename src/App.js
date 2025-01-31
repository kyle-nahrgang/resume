import React from 'react';
import './App.css';
import {  AccordionGroup, Box, Stack,} from '@mui/joy';
import { AboutMe } from './components/AboutMe';
import { Section } from './components/Section';
import { Skills } from './components/Skills';
import  {
  accordionSummaryClasses,
} from '@mui/joy/AccordionSummary';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Patents } from './components/Patents';
import { Education } from './components/Education';

function App() {  
  return (
    <div className="App">
       <Box sx={{ flexGrow: 1 , margin: 5, display: 'flex'}} justifyContent="center">
        <Stack spacing={5}>
          <AboutMe />
          <AccordionGroup sx={{
            [`& .${accordionSummaryClasses.indicator}`]: {
              transition: '0.2s',
            },
            [`& [aria-expanded="true"] .${accordionSummaryClasses.indicator}`]: {
              transform: 'rotate(45deg)',
            },
          }}>
            <Section title="Skills" children={<Skills />} />
            <Section title="Projects" children={<Projects />} />
            <Section title="Experience" children={<Experience />} />
            <Section title="Patents" children={<Patents />} />
            <Section title="Education" children={<Education />} />
          </AccordionGroup>
        </Stack>
      </Box>
    </div>
  );
}

export default App;
