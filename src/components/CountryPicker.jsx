import React, { useEffect,useState } from 'react'
import axios from "axios"
const CountryPicker = ({setCountrySelected,handleChangeCountry}) => {
    const[countryList , setCountryList] = useState([])
    const [input,setInput] = useState("")
    useEffect(()=>{
      axios.get('https://covid19.mathdro.id/api/countries').then((country)=>{
        console.log("Country API succesfully connected ! ^^")
        setCountryList(country.data.countries.map((elt)=> elt.name))
      })
    },[])
    const inputHandler =(e) =>{
      setInput(e.target.value.toLowerCase())
    }
    return(
      <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <input type="text" style={{
          margin:'1vh',
          outline:'none',
          padding:'0.5vh',
          width:'250px',
          borderRadius:'10px'
        }} placeholder={'Right the country here ...'} onChange={inputHandler}></input>
        <select 
          style={{
          margin:'1vh',
          outline:'none',
          padding:'0.5vh',
          width:'250px',
          borderRadius:'10px'
        }}
          onChange={(e)=>{
          setCountrySelected(e.target.value)
          handleChangeCountry(e.target.value)       
          
          }}>
         <option value={""}>Global</option> 
        {
          countryList.filter(element => element.toLowerCase().includes(input)).map((elt,i)=>(
            <option value={elt} key={i}>{elt}</option>
          ))        
        }
        </select>
      </div>
    );
    }
export default CountryPicker