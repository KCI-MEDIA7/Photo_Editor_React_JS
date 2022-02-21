import React , {useState,useEffect , useRef} from 'react'
import canvasToImage from 'canvas-to-image';
import "../css/MainCanvas.css"
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange , teal } from '@mui/material/colors';
import { drawImageOnCanvas } from './canvas.utils';


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
function MainCanvas({fileName , addingFilter , reset}) {

    const [canvas,setCanvas]= useState(0)
    const canvas_ref = useRef(null)
    const image_ref = useRef(null)

    const style = addingFilter.filter

    function download(){
        canvasToImage(canvas, {name: 'myImage',type: 'jpg',quality: 1})
    }

    function draw(canvas , img){
        const context = canvas.getContext('2d')
        const height=img.naturalHeight
        const width=img.naturalWidth
        context.canvas.width = width
        context.canvas.height = height
        context.filter = `${style}`
        context.drawImage(img,0,0,context.canvas.width,context.canvas.height);
    }

    useEffect(()=>{
        const canvas = canvas_ref.current
        const image = image_ref.current
        drawImageOnCanvas(canvas , image , null)
    } , [])
    
    useEffect(()=>{
        const canvas = canvas_ref.current
        const image = image_ref.current
        setCanvas(canvas)

        draw(canvas,image);
        // eslint-disable-next-line
    },[addingFilter])


    return (
        <ThemeProvider theme={theme}>
            <div className="main-container">
                <div className="image-container">
                <img src={fileName} alt="main-bg" ref={image_ref} style={{display:"none"}}/>
                <canvas ref={canvas_ref} className="main-image"></canvas><br/>
                </div>
                <div className="button-container">
                    <Stack spacing={4} direction="row">
                        <Button variant="contained" onClick={download}>Download</Button>
                        <Button variant="outlined" color='secondary' onClick ={reset}>Reset</Button>
                    </Stack>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default MainCanvas
