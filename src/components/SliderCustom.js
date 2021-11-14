import React from 'react'
import Slider from '@mui/material/Slider';
import { Grid } from '@mui/material';

export default function SliderCustom({min , max , range,handleChange}) {
    return (
        <div className="slider">
        <Grid width={500}  alignItems="center" justifyContent="center" container sx={{ml:10}}>
            <Slider
                defaultValue={70}
                aria-label="Small"
                valueLabelDisplay="auto"
                min={min} 
                max={max} 
                range={range} 
                onChange={handleChange}
                color="secondary"
            />
        </Grid>
        </div>
    )
}
