import React from 'react'

function Options({name,active,handleChange}) {
    return (
        <div className ={ `image ${name}`} onClick={handleChange}>
            {name}
            {active ?<i className="fas fa-check-square"></i>:''}
        </div>
    )
}

export default Options
