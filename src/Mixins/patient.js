import axios from "axios"
import {usePatients} from "../hooks/usePatients"


const {patients} = usePatients()

const getPatients = () => {
    axios.get("patients")
        .then((reponse) => {
          patients.value = reponse.data
        })
        .catch((error) => {
          console.log(error)
        })
  }


  export const patientFunctions = () =>{
      return { 
          getPatients
      }
  }