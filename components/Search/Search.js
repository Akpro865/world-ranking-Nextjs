import SearchRoundedIcon from '@mui/icons-material/SearchRounded'

function Search({countries, ...rest}) {
  return (
  	<div className='md:mx-14'>
  	  <h4 className='p-2 text-text-secondary'>Total {countries.length} countries found....</h4>
	  <div className='bg-transparent'>
	    <input {...rest} className='w-full rounded outline-none h-full bg-inherit p-4  border-none bg-background-color-dark' placeholder='Search here the country'/>
	  </div> 
  </div> 
  )
}

export default Search