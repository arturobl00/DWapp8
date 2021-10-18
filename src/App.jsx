import React from "react";
import {firebase} from './firebase';

function App() {

  React.useEffect(() =>{
    const obtenerDatos = async () => {
      try {
        const db = firebase.firestore()
        const data = await db.collection('tareas').get()
        console.log(data.docs)
        const arrayData = await data.docs.map(doc => ({id: doc.id, ...doc.data}))
        console.log(arrayData)
      } catch (error) {
        console.log(error)
      }
    }
    obtenerDatos()
  }, [])
  
  return (
    <div className="container">
      <h1>Proyecto CRUD con FIREBASE</h1>
    </div>
  );
}

export default App;
