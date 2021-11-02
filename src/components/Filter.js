import React , {useState} from 'react';
import Options from './Options';
import Slider from './Slider';
import "../css/Filter.css";
import SuggFilter from './SuggFilter';

const FILTER_OPTIONS = [
    {
      name: 'Brightness',
      property: 'brightness',
      value: 100,
      range: {
        min: 0,
        max: 200
      },
      unit: '%'
    },
    {
      name: 'Contrast',
      property: 'contrast',
      value: 100,
      range: {
        min: 0,
        max: 200
      },
      unit: '%'
    },
    {
      name: 'Saturation',
      property: 'saturate',
      value: 100,
      range: {
        min: 0,
        max: 200
      },
      unit: '%'
    },
    {
      name: 'Grayscale',
      property: 'grayscale',
      value: 0,
      range: {
        min: 0,
        max: 100
      },
      unit: '%'
    },
    {
      name: 'Hue-Rotate',
      property: 'hue-rotate',
      value: 0,
      range: {
        min: 0,
        max: 360
      },
      unit: 'deg'
    },
    {
      name: 'Blur',
      property: 'blur',
      value: 0,
      range: {
        min: 0,
        max: 20
      },
      unit: 'px'
    },
    {
      name: 'Sepia',
      property: 'sepia',
      value: 0,
      range: {
        min: 0,
        max: 100
      },
      unit: '%'
    },
    {
      name: 'Invert',
      property: 'invert',
      value: 0,
      range: {
        min: 0,
        max: 100
      },
      unit: '%'
    }
  ]

function Filter() {

    const [filters , setFilters] = useState(FILTER_OPTIONS)
    const [selectedFilterIndex , setSelectedFilterIndex] = useState(0)
    const selectedFilter = filters[selectedFilterIndex]
    let fileName =JSON.parse(localStorage.getItem("image"))

  
    function stylingMainImage(){
      const filter_combination = filters.map((option)=>{
        return (`${option.property}(${option.value}${option.unit})`)
      })
      //console.log(filter_combination)
      let everyfilter = filter_combination.join(" ")
    let style = {
        filter:everyfilter,
        backgroundImage:`url(${fileName})`
    }
    return style
    }

  
    function handleChangeSlider({target}){
      setFilters(prevOptions => {
        return prevOptions.map((option, index) => {
          if (index !== selectedFilterIndex) return option
          return { ...option, value: target.value }
        })
      })
    }

    return (
      <div>
        <h2 style={{textAlign:"center"}}>Beautify your images...</h2>
        <div className="grid-container">
          <div className="main-image" style={stylingMainImage()} ></div>
          {
            filters.map((filter , index)=>{
              return(
                <Options 
                  key={index} 
                  name={filter.name} 
                  handleChange={()=>{setSelectedFilterIndex(index)}}
                  active = {selectedFilterIndex  === index}
                  style={{backgroundImage:`url(${fileName})`}}
                  />
              )
            })
          }
        
          <Slider 
            min = {selectedFilter.range.min} 
            max =  {selectedFilter.range.max }
            value = {selectedFilter.value}
            handleChange = {handleChangeSlider}
          />
        </div>
        <SuggFilter/>
      </div>
    )
}

export default Filter
