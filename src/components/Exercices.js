import React from 'react'
import {useState,useEffect} from 'react'

function Exercices() {

  const [exercices,setexercices]=useState([])
console.log(exercices)
    useEffect(()=>{
      fetchExercices()

    },[])

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'cc88617692mshdff9fe0576affd5p1f079bjsndcfee9e6d797',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    };

    const fetchExercices = async()=>{
      const response = await fetch('https://exercisedb.p.rapidapi.com/exercises', options)
      const data = await response.json()
      setexercices(data)
      
    }

    
  return (
    <div className='max-w-7xl mx-auto py-8'>
      <p className='font-[700] text-3xl'>Showing Results</p>
    </div>
  )
}

export default Exercices