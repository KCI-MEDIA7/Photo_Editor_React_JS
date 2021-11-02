import React , {useState,useEffect , useRef} from 'react'
import canvasToImage from 'canvas-to-image';
import "../css/MainCanvas.css"

function MainCanvas({fileName , addingFilter , reset}) {

    const [canvas,setCanvas]= useState(0)
    const canvas_ref = useRef(null)
    const image_ref = useRef(null)

    const style = addingFilter.filter
    console.log(style)

    function download(){
        canvasToImage(canvas, {name: 'myImage',type: 'jpg',quality: 1})
    }

    function draw(canvas , img){
        const context = canvas.getContext('2d')
        context.canvas.width = 1280
        context.canvas.height = 720
        context.filter = `${style}`
        //console.log({addingFilter})
        context.drawImage(img,0,0,context.canvas.width,context.canvas.height);
    }
    
    useEffect(()=>{
        const canvas = canvas_ref.current
        const image = image_ref.current
        setCanvas(canvas)

        draw(canvas,image);
        // eslint-disable-next-line
    },[addingFilter])


    return (
        <div className="main-container">
            <img src={fileName} alt="main-bg" ref={image_ref} style={{display:"none"}}/>
            <canvas ref={canvas_ref} className="main-image"></canvas><br/>
            <div className="button-container">
                <button onClick={download} class="animated-border-button success" >Download</button>
                <button onClick ={reset} class="animated-border-button reset" >Reset</button>
            </div>
        </div>
    )
}

export default MainCanvas
