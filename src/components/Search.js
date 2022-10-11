import React from 'react'
import {BiSearch} from 'react-icons/bi'
import {useState,useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Autoplay } from 'swiper';

import dep from '../assets/assets/icons/gym.png'
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Link } from 'react-router-dom';




function Search() {

  const [category,setCategory]=useState([])
console.log(category)
    useEffect(()=>{
      fetchCatgory()

    },[])

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'cc88617692mshdff9fe0576affd5p1f079bjsndcfee9e6d797',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    };

    const fetchCatgory = async()=>{
      const response = await fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',options)
      const data = await response.json()
      const allData=['all',...data]
      setCategory(allData)
      
    }
  return (
    <div className='max-w-5xl mx-auto py-5'>


      <p className='text-center font-[800] text-gray-900 text-5xl mb-10 '>Awesome Exercices<br/> You should Know</p>
      <div className="input-groupe relative  ">
      <input type="text" placeholder='search exercices ..' className='w-full p-3  outline outline-1 outline-gray-200'  />
      <button className='bg-red-600 text-white  absolute top-0 right-0 py-3 px-5 flex items-center '> <BiSearch className='mr-1'/> Search</button>
      </div>
       
       <div className="catgories mt-10 ">
       <Swiper
       modules={[Autoplay]}
        loop={true}
  
        autoplay

        
      spaceBetween={60}
      slidesPerView={4}

 
    >
        {
          category.map((cate,index)=>(
          
            <SwiperSlide key={index}>
            <div className="boox flex flex-col items-center shadow-md bg-white p-2 hover:border-t-[1px] border-red-400">
             <Link to={`/exercices/${cate}`}> <img src={dep} alt="" className='w-32'/></Link>
              <p className='mt-5 font-[700] uppercase'>{cate}</p>
            </div>
              </SwiperSlide>
            

          ))
        }
    </Swiper>

       </div>
       
    </div>
  )
}

export default Search