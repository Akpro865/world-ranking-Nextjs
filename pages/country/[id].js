import axios from 'axios'
import Head from 'next/head'


function Country({country}) {
  return (
    <>
    <Head>
      <title>{country.name}</title>
    </Head>
    <div className='md:flex md:mx-28 my-6'>
        <div className=''>
      	  <div className='shadow-xl rounded-md p-4 m-5 cursor-pointer bg-background-color-light'>
      	   <div className='flex justify-center'>
      		<img src={country.flags.png} className='rounded-md'/>
      	   </div>
      		<div className='p-2'>
      		  <h2 className='text-xl'>{country.name}</h2>
      		  <div className='p-1 flex justify-end text-sm'>{country.population}</div>
      		</div>
          </div>
        </div>
      	<div className='m-5 shadow-xl rounded-md grow p-8 font-medium cursor-pointer bg-background-color-light'>
      	  <h3 className='text-xl font-semibold p-1'>Details</h3>
      	  <div className='flex justify-between p-2'>
      	  	<div>Capital</div>
      	  	<div>{country.capital}</div>
      	  </div>
      	  <div className='flex justify-between p-2'>
      	  	<div>AlphaCode</div>
      	  	<div>{country.alpha3Code}</div>
      	  </div>
      	  <div className='flex justify-between p-2'>
      	  	<div>Area</div>
      	  	<div>{country.area}</div>
      	  </div>
      	  <div className='flex justify-between p-2'>
      	  	<div>Region</div>
      	  	<div>{country.region}</div>
      	  </div>
      	  <div className='flex justify-between p-2'>
      	  	<div>Subregion</div>
      	  	<div>{country.subregion}</div>
      	  </div>
      	  <div className='flex justify-between p-2'>
      	  	<div>currencies</div>
      	  	<div>{country.currencies ? country.currencies.map(({name}) => name).join(", ") : null}</div>
      	  </div>
      	  <div className='flex justify-between p-2'>
      	  	<div>Languages</div>
      	  	<div>{country.currencies ? country.languages.map(({name}) => name).join(", ") : null}</div>
      	  </div>
      	  <div className='flex justify-between p-2'>
      	  	<div>Gini</div>
      	  	<div>{country.gini} %</div>
      	  </div>
      	  <div className='flex justify-between p-2'>
      	  	<div>TimeZones</div>
      	  	<div>{country.timezones}</div>
      	  </div>
      	</div>
    </div>
    </>
  )
}

export default Country

export const getStaticPaths = async () => {
	const res = await axios.get("https://restcountries.com/v2/all")
	const countries = await res.data

	const paths = countries.map((country) => ({
		params: { id: country.alpha3Code.toString() }
	}))

	return {
		paths,
		fallback: false
	}
}

export const getStaticProps = async ({ params }) => {
	const res = await axios.get(`https://restcountries.com/v2/alpha/${params.id}`)
	const country = await res.data

	return {
		props: {
			country
		}
	}
}
