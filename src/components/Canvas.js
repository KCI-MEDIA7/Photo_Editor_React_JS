import React , {useState,useEffect , useRef} from 'react'
import canvasToImage from 'canvas-to-image';

function Canvas({fileName , values , name}) {
    const [canvas,setCanvas]= useState(0)
    const canvas_ref = useRef(null)
    const image_ref = useRef(null)

    
    function download(){
        canvasToImage(canvas, {name: 'myImage',type: 'jpg',quality: 1})
    }
   
    useEffect(()=>{
        const canvas = canvas_ref.current
        const image = image_ref.current
        setCanvas(canvas)

        function draw(canvas , img){
            const context = canvas.getContext('2d')
            context.canvas.width = 1280
            context.canvas.height = 720
            context.filter = `${values}`
            context.drawImage(img,0,0,context.canvas.width,context.canvas.height);
        }
        draw(canvas,image);
        // eslint-disable-next-line
    },[])

    return (
        <div className = "img-container">
            <img src={fileName} ref={image_ref} style={{display:"none"}} alt={name}/>
            <canvas ref={canvas_ref} className="rec-image"></canvas><br/>
            <button  onClick={download} className="animated-border-button">Download</button>
        </div>
    )
}

export default Canvas
