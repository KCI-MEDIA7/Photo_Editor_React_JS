import React from 'react'
import './css/App.css'
import FileDrop from './components/FileDrop'

export default function App() {
  return(
  <FileDrop  onDrop={console.log}/>
  )
}
