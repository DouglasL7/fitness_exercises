import React from 'react';
import { Router, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';

const App = () => {
  return (
    <Box width="400px">
      Navbar
      <Routes>
        <Router path='/' element={<Home/>}/>
        <Router path='/exercise/:id' element={<ExerciseDetail/>}/>
      </Routes>
    </Box>
  )
};

export default App;