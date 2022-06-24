import styles from '../../styles/country.module.css'
import Link from 'next/link'
import { useState } from 'react'
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';

const orderBy = (countries, value, direction) => {
  if (direction === 'asc') {
    return [...countries].sort((a,b) => (a[value] > b[value] ? 1 : -1))
  }
  if(direction === 'des') {
    return [...countries].sort((a,b) => (a[value] > b[value] ? -1 : 1))
  }
    return countries
}

const SortArrow = ({ direction }) => {
  if (!direction) {
    return <></>;
  }
  if (direction === "des") {
    return (
      <div>
        <ArrowDownwardRoundedIcon color="inherit" />
      </div>
    );
  } else {
    return (
      <div>
        <ArrowUpwardRoundedIcon color="inherit" />
      </div>
    );
  }
};

function Countries({countries}) {
  const [direction, setDirection] = useState()
  const [value, setValue] = useState()

  const orederedCountries = orderBy(countries, value, direction)

  const switchDirection = () => {
    if (!direction) {
      setDirection("des");
    } else if (direction === "des") {
      setDirection("asc");
    } else {
      setDirection(null);
    }
  };

  const switchValueAndDirection = (value) => {
    switchDirection();
    setValue(value);
  };

  return (
  <div className=''>
    <div className='flex md:mx-14 my-4 font-bold items-center'>
      <button className={`${styles.fieldimg} mr-6 invisible sm:visible`}></button>
      <button className={`flex text-left cursor-pointer p-1 ml-4 ${styles.fields}`} onClick={()=>switchValueAndDirection('name')}>
      Country {value === "name" && <SortArrow direction={direction} />}
      </button>
      <button className={`flex text-left cursor-pointer p-1 invisible sm:visible ${styles.fields}`} onClick={()=>switchValueAndDirection('area')}>
      Area (km<sup className='text-xs'>2</sup>) {value === "area" && <SortArrow direction={direction} />}
      </button>
      <button className={`flex text-left cursor-pointer p-1 invisible sm:visible ${styles.fields}`} onClick={()=>switchValueAndDirection('capital')}>
      Capital {value === "capital" && <SortArrow direction={direction} />}
      </button>
      <button className={`flex text-left cursor-pointer p-1 ${styles.fields}`} onClick={()=>switchValueAndDirection('population')}>
      Population {value === "population" && <SortArrow direction={direction} />}
      </button>
    </div>
  	{orederedCountries.map((country, i) => (
      <Link href={`/country/${country.alpha3Code}`} key={i}>
  		<div className={`flex bg-background-color-light cursor-pointer rounded shadow-xl transition md:mx-14 my-4 items-center p-3 ${styles.country}`}>  		
  		 <div className={`flex items-center p-1 mr-4 justify-center invisible sm:visible ${styles.fieldimg}`}>
  		   <img src={country.flags.png} className='w-full rounded'/>
  		 </div>
  		 <div className={`${styles.fields} sm:ml-4`}>{country.name}</div>
  		 <div className={`${styles.fields} invisible sm:visible`}>{country.area || 0}</div>
  		 <div className={`${styles.fields} invisible sm:visible`}>{country.capital || 0}</div>  		
  		 <div className={`${styles.fields}`}>{country.population || 0}</div>
  		</div>
      </Link>
  	))}
  </div>  
  )
}

export default Countries

