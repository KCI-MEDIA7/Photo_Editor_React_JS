import React , {useState,useEffect , useRef} from 'react'
import canvasToImage from 'canvas-to-image';

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
        <div className = "img-container">
            <img src={fileName} ref={image_ref} style={{display:"none"}} alt={name}/>
            <canvas ref={canvas_ref} className="rec-image"></canvas><br/>
            <button  onClick={download} className="animated-border-button">Download</button>
        </div>
    )
}

export default Canvas
