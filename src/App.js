import React from 'react'
import './css/App.css'
import FileDrop from './components/FileDrop'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange , teal } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: orange[900],
    },
    secondary:{
      main: teal[800],
    }
  },
});
export default function App() {
  return(
    <ThemeProvider theme={theme}>
  <FileDrop  onDrop={console.log}/>
  </ThemeProvider>
  )
}
