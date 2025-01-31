import React from 'react';
import './App.css';
import {  AccordionGroup, Box, Stack,} from '@mui/joy';
import { AboutMe } from './components/AboutMe';
import { Section } from './components/Section';
import  {
  accordionSummaryClasses,
} from '@mui/joy/AccordionSummary';
import resume from "./data/resume.json"
import { InfoCardGrid } from './components/InfoCardGrid';
import { ChipList } from './components/ChipList';
import { Experience } from './components/Experience';
import { Education } from './components/Education';

function App() {  
  return (
    <div className="App">
       <Box sx={{ flexGrow: 1 , margin: 5, display: 'flex'}} justifyContent="center">
        <Stack spacing={5}>
          <AboutMe data={resume.about} />
          <AccordionGroup sx={{
            [`& .${accordionSummaryClasses.indicator}`]: {
              transition: '0.2s',
            },
            [`& [aria-expanded="true"] .${accordionSummaryClasses.indicator}`]: {
              transform: 'rotate(45deg)',
            },
          }}>
            {
              resume.sections.map((section) => (
                <Section title={section.title}>
                  {section.type === "chips" && <ChipList data={section.data} />}
                  {section.type === "info-grid" && <InfoCardGrid items={section.data} />}
                  {section.type === "experience" && <Experience data={section.data} />}
                  {section.type === "education" && <Education data={section.data} />}
                </Section>
              ))
            }
          </AccordionGroup>
        </Stack>
      </Box>
    </div>
  );
}

export default App;
