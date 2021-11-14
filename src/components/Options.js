import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';

function Options({name,active,handleChange ,fileName}) {
    return (
        <>
        <Tooltip title={name} arrow TransitionComponent={Zoom}>
        <div className ={ `image ${name}`} onClick={handleChange}>
            <img src={fileName} alt={name} style={{width:"auto", height:"90%"}}/>
            {active ?<i className="fas fa-check-square"></i>:''}
        </div>
        </Tooltip>
        </>
    )
} 

export default Options
