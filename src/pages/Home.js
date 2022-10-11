import React from 'react'
import {useEffect} from 'react'
import HeroBanner from '../components/HeroBanner'
import Search from '../components/Search'
import Exercices from '../components/Exercices'

const Home = () => {
  return (
    <>
    <HeroBanner/>
    <Search/>
    <Exercices/>
    </>
  )
}

export default Home