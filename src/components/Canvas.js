import React , {useState,useEffect , useRef} from 'react'
import canvasToImage from 'canvas-to-image';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import { drawImageOnCanvas } from './canvas.utils';

const theme = createTheme({
    palette: {
      primary: {
        main: orange[900],
      },
    },
  });
function Canvas({fileName , values , name}) {
    const [canvas,setCanvas]= useState(null)
    const canvas_ref = useRef(null)
    const image_ref = useRef(null)

    function download(){
        canvasToImage(canvas, {name: 'myImage',type: 'jpg',quality: 1})
    }

    
    useEffect(()=>{
        const img = image_ref.current
        const customCanvas = canvas_ref.current
        setCanvas(customCanvas)        
        drawImageOnCanvas(customCanvas,img,values);
    },[])


    return (
        <ThemeProvider theme={theme}>
        <div className = "img-container">
            <img src={fileName} ref={image_ref} alt={name} style={{display:'none'}}/>
            <canvas ref={canvas_ref} className="rec-image"></canvas><br/>
            <Button variant="contained" onClick={download} sx={{mt: 4 }}>Download</Button>
        </div>
        </ThemeProvider>
    )
}

export default Canvas
