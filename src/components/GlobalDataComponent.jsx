import React from 'react'
import Card from 'react-bootstrap/Card';

const GlobalDataComponent = ({globalData , countrySelected , state}) => {
 
  return (
    <div style={{display:'flex',justifyContent:'center',margin:'2vh'}}>
        <Card style={{ width: '18rem' , color:"#edebeb" , margin:'2vh'}} bg="secondary">
          <Card.Header>Confirmed ✔️</Card.Header>
          <Card.Body>
            <Card.Text>
                Confirmed cases in {(countrySelected === "") ? "the world"  : countrySelected} affected by the CoronaVirus.
            </Card.Text>
            <Card.Title style={{color:'white'}}>
                {(countrySelected === "") ? globalData.confirmed.value:state.confirmed} Cases
            </Card.Title>
          </Card.Body> 
        </Card>
        <Card style={{ width: '18rem' , color:"#edebeb" , margin:'2vh'}} bg="danger">
          <Card.Header>Deaths 💀</Card.Header>
          <Card.Body>
            <Card.Text>
                Deaths cases in {(countrySelected === "") ? "the world"  : countrySelected} caused by the CoronaVirus.
            </Card.Text>
            <Card.Title style={{color:'white'}}>
            {(countrySelected === "") ? globalData.deaths.value:state.deaths} Cases
            </Card.Title>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' , color:"#edebeb" , margin:'2vh'}} bg="success">
          <Card.Header>Recovered 🩹</Card.Header>
          <Card.Body>
            <Card.Text>
                Recovered cases in {(countrySelected === "") ? "the world"  : countrySelected} affected by the CoronaVirus.
            </Card.Text>
            <Card.Title style={{color:'white'}}>
            {(countrySelected === "") ? globalData.recovered.value:state.recovered} Cases
            </Card.Title>
          </Card.Body>
        </Card>
    </div>
  )
}

export default GlobalDataComponent