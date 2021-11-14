import React , {useState,useEffect , useRef} from 'react'
import canvasToImage from 'canvas-to-image';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

const theme = createTheme({
    palette: {
      primary: {
        main: orange[900],
      },
    },
  });
function Canvas({fileName , values , name}) {
    const [canvas,setCanvas]= useState(0)
    const [img ,setImg] = useState(0)
    const canvas_ref = useRef(null)
    const image_ref = useRef(null)

    function download(){
        canvasToImage(canvas, {name: 'myImage',type: 'jpg',quality: 1})
    }
   
    useEffect(()=>{
        const canvas = canvas_ref.current
        const image = image_ref.current
        setCanvas(canvas)
        setImg(img)
        function draw(canvas , img){
            const context = canvas.getContext('2d')
            const height=img.naturalHeight
            const width=img.naturalWidth
            context.canvas.width = width
            context.canvas.height = height
            context.filter = `${values}`
            context.drawImage(img,0,0,context.canvas.width,context.canvas.height);
        }
        draw(canvas,image);
        // eslint-disable-next-line
    },[])

    return (
        <ThemeProvider theme={theme}>
        <div className = "img-container">
            <img src={fileName} ref={image_ref} style={{display:"none"}} alt={name}/>
            <canvas ref={canvas_ref} className="rec-image"></canvas><br/>
            <Button variant="contained" onClick={download} sx={{mt: 4 }}>Download</Button>
        </div>
        </ThemeProvider>
    )
}

export default Canvas
