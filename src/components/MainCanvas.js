import React , {useState,useEffect , useRef} from 'react'
import canvasToImage from 'canvas-to-image';
import "../css/MainCanvas.css"

function MainCanvas({fileName , addingFilter , reset}) {

    const [canvas,setCanvas]= useState(0)
    const [img ,setImg] = useState(0)
    const canvas_ref = useRef(null)
    const image_ref = useRef(null)

    const style = addingFilter.filter
    //console.log(style)

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
        //console.log({addingFilter})
        context.drawImage(img,0,0,context.canvas.width,context.canvas.height);
    }
    
    useEffect(()=>{
        const canvas = canvas_ref.current
        const image = image_ref.current
        setCanvas(canvas)
        setImg(img)

        draw(canvas,image);
        // eslint-disable-next-line
    },[addingFilter])


    return (
        <div className="main-container">
            <div className="image-container">
            <img src={fileName} alt="main-bg" ref={image_ref} style={{display:"none"}}/>
            <canvas ref={canvas_ref} className="main-image"></canvas><br/>
            </div>
            <div className="button-container">
                <button onClick={download} className="animated-border-button success" >Download</button>
                <button onClick ={reset} className="animated-border-button reset" >Reset</button>
            </div>
        </div>
    )
}

export default MainCanvas
