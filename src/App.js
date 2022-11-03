import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import { v4 as uuid } from 'uuid';


function App() {
  const postCar = () => {
    let unique_id = uuid();
    let object={car:addCar, id:unique_id}
    console.log("Objekti", object);
    axios.post('http://localhost:3001/create', object)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const onChangeAddCar = (event) => {
    console.log("event", event.target.value);
    setAddCar(event.target.value);
  }

  const fetchCar=()=>{
    console.log("searchCar", searchCar);
    axios.get('http://localhost:3001/'+searchCar)
    .then(function (response) {
      console.log("löytyi", response);
    })
    .catch(function (error) {
      console.log(error);
    })
  }


  const fetchAll=()=>{
    axios.get('http://localhost:3001/')
    .then(function (response) {
      console.log("Kaikki", response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  const deleteCarWithID=()=>{
    axios.delete('http://localhost:3001/delete/'+deleteCar)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const updateData=()=>{
    const object={car:updateCarName, id:updateCarID}
    axios.put('http://localhost:3001/update',object)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const patchData=()=>{
    let object={car:patchCarName, id:patchCarID}
    axios.patch('http://localhost:3001/patch',object)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  const [addCar, setAddCar]=useState('');
  const [searchCar, setSearchCar]=useState('');
  const [deleteCar, setDeleteCar]=useState('');
  const [updateCarName, setUpdateCarName]=useState('');
  const [updateCarID, setUpdateCarID]=useState('');
  const [patchCarID, setPatchCarID]=useState('');
  const [patchCarName, setPatchCarName]=useState('');
  return (
   <div >
    <h1>Autokorjaamo {addCar}</h1>
    <div style={{flexDirection:'column'}}>
        
        <input type="text" value={addCar} onChange={(event)=>onChangeAddCar(event)} /> <button onClick={postCar}>Lisää auto</button>
        <input type="text" value={searchCar} onChange={(event)=>setSearchCar(event.target.value)} /> <button onClick={()=>fetchCar()}>Hae auto</button>
        <input type="text" value={deleteCar} onChange={(event)=>setDeleteCar(event.target.value)} /><button onClick={()=>deleteCarWithID()}>Poista auto</button>
        <div>Päivitettävät tiedot</div>
        <div> Vaihdettava auton nimi: </div>
        <input type="text" value={updateCarName} onChange={(event)=>setUpdateCarName(event.target.value)} />
        <div>Auton ID</div>
        <input type="text" value={updateCarID} onChange={(event)=>setUpdateCarID(event.target.value)} />
        <button onClick={()=>updateData()}>Päivitä auto</button>
        <button onClick={()=>fetchAll()}>Hae kaikki, katso console.log tämän jälkeen</button>
        Patch auton nimi
        <input type="text" value={patchCarName} onChange={(event)=>setPatchCarName(event.target.value)} />
        patch auton id
        <input type="text" value={patchCarID} onChange={(event)=>setPatchCarID(event.target.value)} /> 

       < button onClick={()=>patchData()}>PATCH</button>


    </div>
   </div>
  );
}

export default App;
