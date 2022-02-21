import React from "react";
import '../css/FileDrop.css'
import Filter from "./Filter";
import Button from '@mui/material/Button';


function FileDrop() {

    const [fileName , setFilename] = React.useState(false)

    function handleSubmit(e){
        e.preventDefault()
    }
    
    function handleChangeSubmit(e){
        const { files } = e.target
        if (files.length > 0) {
            const url = URL.createObjectURL(files[0])
            setFilename(url)
            // preProcessing(fileData)
        } else {
            setFilename(null)
        }
    }
    return (
        <>
            {
                fileName?<Filter fileName={fileName}/>:
            <div className="filedrop">
                 <h2>Photo Editor App</h2>
                 <p>Let's add some magic to moments..</p>
                <form onSubmit={ handleSubmit}>
                    <label>Choose a file</label><br/>
                    <input type='file' accept='image/*' onChange={handleChangeSubmit} />    
                    <Button variant="contained" onClick={()=>{setFilename(true)}}>Submit</Button>
                </form>
                <div>Image Size must not exceed 2MB</div>
            </div>
            }
            
        </>
        
    )
}

export default FileDrop
