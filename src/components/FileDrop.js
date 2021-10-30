import React from "react";
import '../css/FileDrop.css'
import Filter from "./Filter";

function FileDrop() {

    const [filename , setFilename] = React.useState(false)

    function handleSubmit(e){
        e.preventDefault()
    }
    function handleFile(e){
        const content = e.target.result;
        //console.log('file content',  content)
        localStorage.setItem('image', JSON.stringify(content))
        setFilename(true)
        //console.log(filename)
    }
    function handleChangeSubmit(file){
        let fileData = new FileReader();
        fileData.onloadend = handleFile;
        fileData.readAsDataURL(file);
    }
    return (
        <>
            {
                filename?<Filter/>:
            <div className="filedrop">
                <form onSubmit={ handleSubmit}>
                    <input type="file" id="file" onChange={(e)=>{handleChangeSubmit(e.target.files[0])}}/>                
                    <button type="submit">submit</button>
                </form>
            </div>
            }
            
        </>
        
    )
}

export default FileDrop
