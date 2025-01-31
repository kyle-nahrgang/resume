import React from 'react';
import './App.css';
import {  Box,} from '@mui/joy';
import { AboutMe } from './components/AboutMe';

function App() {  
  return (
    <div className="App">
       <Box sx={{ flexGrow: 1 , margin: 5, display: 'flex'}} justifyContent="center">
          <AboutMe />
      </Box>
    </div>
  );
}

export default App;
