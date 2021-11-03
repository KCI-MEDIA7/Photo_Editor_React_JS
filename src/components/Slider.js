import React from 'react'
export default function Slider({min , max , range,handleChange}) {
    return (
        <>
            <input 
                min={min} 
                max={max} 
                range={range} 
                className="slider" 
                type="range"
                onChange={handleChange}
                />
        </>
    )
}
