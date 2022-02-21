import React , {useState , useEffect} from 'react';
import Options from './Options';
import SliderCustom from './SliderCustom';
import "../css/Filter.css";
import SuggFilter from './SuggFilter';
import MainCanvas from './MainCanvas';
import Loading from './Loading';

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

function Filter({fileName}) {

    const [filters , setFilters] = useState(FILTER_OPTIONS)
    const [ loading , setLoading] = useState(true)
    const [selectedFilterIndex , setSelectedFilterIndex] = useState(0)
    const selectedFilter = filters[selectedFilterIndex]
    
    useEffect(() => {
      setTimeout(() => setLoading(false), 1500)
    }, []);

    function stylingMainImage(){
      const filter_combination = filters.map((option)=>{
        return (`${option.property}(${option.value}${option.unit})`)
      })
      //console.log(filter_combination)
      let everyfilter = filter_combination.join(" ")
      let style = {
        filter:everyfilter,
        // backgroundImage:`url(${fileName})`
      }
    return style
    }

    function resetFilter(){
      setFilters(FILTER_OPTIONS)
    }

    function handleChangeSlider({target}){
      setFilters(prevOptions => {
        return prevOptions.map((option, index) => {
          if (index !== selectedFilterIndex) return option
          return { ...option, value: target.value }
        })
      })
    }
    if(loading){
      return <Loading />
    }
    else{
    return (
      <div>
        <div className="heading">
          <h1 style={{textAlign:"center"}}>Beautify your images...</h1>
          <div className="underline"></div>
        </div>
        <div className="grid-container">
          {/* <div className="main-image" style={stylingMainImage()} ></div> */}
          <MainCanvas fileName={fileName} addingFilter = {stylingMainImage()} reset = {resetFilter}/>
          {
            filters.map((filter , index)=>{
              return(
                <Options 
                  key={index} 
                  name={filter.name} 
                  handleChange={()=>{setSelectedFilterIndex(index)}}
                  active = {selectedFilterIndex  === index}
                  fileName={fileName}
                  style={{backgroundImage:`url(${fileName})`}}
                  />
              )
            })
          }
        
          <SliderCustom 
            min = {selectedFilter.range.min} 
            max =  {selectedFilter.range.max }
            value = {selectedFilter.value}
            handleChange = {handleChangeSlider}
          />
        </div>
        <SuggFilter fileName={fileName} />
      </div>
    )
  }
}

export default Filter
