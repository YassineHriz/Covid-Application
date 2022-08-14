import { useEffect,useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"
import './App.css';
import CountryPicker from "./components/CountryPicker";
import GlobalDataComponent from "./components/GlobalDataComponent"
import Chart from './components/Chart'

function App() {
  const [state,setstate] = useState({
    confirmed : 0,
    deaths : 0,
    recovered : 0
  })
  const [countrySelected , setCountrySelected] = useState("")
  const [globalData , setGlobalData] = useState({
    confirmed : "",
    deaths : "",
    recovered : ""
  })
  const url = "https://covid19.mathdro.id/api"
  useEffect(()=>{
    
    axios.get(url).then((res)=>{
      console.log("API IS SUCCESFULLY CONNECTED!" )
      setGlobalData({
        confirmed:res.data.confirmed,
        deaths:res.data.deaths,
        recovered:res.data.recovered
      })
    }).catch((err)=>{
      console.log("THERE IS AN ERROR WITH THE API CONNECTION ! : ",err)
  })
  },[])
  
const handleChangeCountry = () =>{
  axios.get(`https://covid19.mathdro.id/api/countries/${countrySelected}`).then((response)=>{
    setstate({
      confirmed:response.data.confirmed.value,
      deaths:response.data.deaths.value,
      recovered:response.data.recovered.value,
    })
  }).catch((err)=>{
      console.log(err)
  })
}
  return (
    <div className="App">
      <h1>CORONA APP 🦠</h1>
      <h3>COUNTRY : {(countrySelected === "") ? "GLOBAL" :countrySelected.toUpperCase()}</h3>
      <GlobalDataComponent 
      globalData={globalData}
      countrySelected={countrySelected}
      state={state}
      />
      <CountryPicker 
      setCountrySelected={setCountrySelected}
      countrySelected={countrySelected}
      handleChangeCountry={handleChangeCountry}
      />
      <Chart 
      countrySelected={countrySelected}
      state={state}
      />
    </div>
  );
}

export default App;
