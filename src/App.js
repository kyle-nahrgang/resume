import React from 'react';
import './App.css';
import {  AccordionGroup, Box, Stack, Typography,} from '@mui/joy';
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


function Resume({...params}) {
  return (
    <Box sx={{ flexGrow: 1 , margin: 5, display: 'flex'}} justifyContent="center">
      <Stack spacing={5}>
        <AboutMe data={resume.about} {...params} />
        <AccordionGroup sx={{
          [`& .${accordionSummaryClasses.indicator}`]: {
            transition: '0.2s',
          },
          [`& [aria-expanded="true"] .${accordionSummaryClasses.indicator}`]: {
            transform: 'rotate(45deg)',
          },
        }}>
          <Section title="OVERVIEW"  {...params}>
            <Typography level='body-sm' textAlign='justify' sx={{ fontStyle: "italic" }}>
                {resume.about.about}
            </Typography>
          </Section>
          {
            resume.sections.map((section) => (
              <Section title={section.title} {...params}>
                {section.type === "chips" && <ChipList data={section.data} {...params} />}
                {section.type === "info-grid" && <InfoCardGrid items={section.data} {...params} />}
                {section.type === "experience" && <Experience data={section.data} {...params} />}
                {section.type === "education" && <Education data={section.data} {...params} />}
              </Section>
            ))
          }
        </AccordionGroup>
      </Stack>
    </Box>
  )
}

function App() {
  const [forPrint, setForPrint] = React.useState(false)
  return (
    <div className="App">
      <Resume forPrint={forPrint} />
    </div>
  );
}

export default App;
