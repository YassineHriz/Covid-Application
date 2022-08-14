import React , { useEffect,useState } from 'react'
import axios from 'axios'
import { Line,Bar } from "react-chartjs-2"
import { Chart as ChartJS } from "chart.js/auto"
const Chart = ({countrySelected,state}) => {
    const [dailyData,setDailyData] = useState({
        confirmed : [],
        deaths : [],
        date : []
    })
    const dateData = dailyData.date.map((elt)=> elt)
    const confirmedData = dailyData.confirmed.map((elt)=>elt)
    const deathsData = dailyData.deaths.map((elt)=>elt)
    const lineData = {
        labels:dateData,
        datasets:[
            {
                label:"Confirmed",
                data:confirmedData,
                fill:true,
                backgroundColor:"rgba(75,192,192,0.2)",
                borderColor:"#3333ff"
            },
            {
                label:"Deaths",
                data:deathsData,
                fill:false,
                borderColor:"red"
            }
        ]
    }
    const barData = {
        labels:["Infected","Recovered","Deaths"],
        datasets: [
            {
              label: "",
              backgroundColor: [
                'rgba(0,0, 255, 0.5)',
                "rgba(0,255,0 , 0.5)",
                "rgba(255,0,0 , 0.5)",'#FFF8DC',
              ],
              data: [
                state.confirmed,
                state.recovered,
                state.deaths,
              ]
            },
          ],
    }
    const apiDailyData = "https://covid19.mathdro.id/api/daily"
    useEffect(()=>{
        axios.get(apiDailyData).then((res)=>{
            setDailyData({
                confirmed: res.data.map((element) => element.totalConfirmed),
                deaths: res.data.map((element) => element.deaths.total),
                date: res.data.map((element) => element.reportDate),
            })
            
        }).catch((err) =>{
            console.log("THERE IS AN ERROR WITH THE DAILY API CONNECTION : ",err)
        })
    })

  return (
    <div >
        {(countrySelected === "") ? <Line data={lineData} style={{width:"60%"}}/> : <Bar data={barData} />}
        
        
    </div>
  )
}
export default Chart