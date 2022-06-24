import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar/Navbar'
import Search from '../components/Search/Search'
import Countries from '../components/Countries/Countries'
import axios from 'axios'
import { useState } from 'react'

function Home({countries}) {
  const [search, setSearch] = useState("")

  const filteredCountries = countries.filter((country) => 
    country.name.toLowerCase().includes(search) ||
    country.region.toLowerCase().includes(search) ||
    country.subregion.toLowerCase().includes(search)
    )

  const onInputChange = (e) => {
    e.preventDefault();

    setSearch(e.target.value.toLowerCase());
  };

  return (
  <div className='container mx-auto my-4'>
    <Navbar />
    <Search countries={countries} onChange={onInputChange}/>
    <Countries countries={filteredCountries}/>
  </div>  
  )
}

export default Home

export const getStaticProps = async () => {
  const res = await axios.get("https://restcountries.com/v2/all");
  const countries = await res.data
  return {
    props: {
      countries,
    },
  };
}