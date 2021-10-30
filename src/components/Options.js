import React from 'react'

function Options({name,active,handleChange ,style}) {
    return (
        <div className ={ `image ${name}`} onClick={handleChange} style={style}>
            {name}
            {active ?<i className="fas fa-check-square"></i>:''}
        </div>
    )
}

export default Options
