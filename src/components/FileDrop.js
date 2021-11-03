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
                 <h2>Photo Editor App</h2>
                 <p>Let's add some magic to moments..</p>
                <form onSubmit={ handleSubmit}>
                    <label>Choose a file</label><br/>
                    <input type="file" id="file" onChange={(e)=>{handleChangeSubmit(e.target.files[0])}}/>                
                    <button type="submit" className="animated-border-button" onClick={()=>{setFilename(true)}}>Submit</button>
                </form>
                <div>Image Size must not exceed 2MB</div>
            </div>
            }
            
        </>
        
    )
}

export default FileDrop
