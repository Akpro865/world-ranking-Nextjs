import PublicRoundedIcon from '@mui/icons-material/PublicRounded'
import Brightness6RoundedIcon from '@mui/icons-material/Brightness6Rounded'
import { useState, useEffect } from 'react'

function Navbar() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      localStorage.getItem("theme")
    );
    setTheme(localStorage.getItem("theme"));
  }, []);

  const switchTheme = () => {
    if (theme === "light") {
      saveTheme("dark");
    } else {
      saveTheme("light");
    }
  };

  const saveTheme = (theme) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  };

  return (
  <div className='p-5 flex justify-between items-center  md:mx-14'>
  	<div className='md:text-3xl sm:text-xl items-center font-bold flex'>
  	  <span className=''><PublicRoundedIcon className='text-4xl text-green-500 mr-5 flex items-center justify-center'/></span>
  	  World&nbsp;<span className='text-sky-600'>Countries</span>
  	</div>
  	<div className='font-medium'>
  	  <button className='bg-green-500 cursor-pointer p-1 sm:px-4 sm:py-2 rounded text-white hover:bg-green-600' onClick={switchTheme}>
      Dark &nbsp;<Brightness6RoundedIcon />
      </button>
  	</div>  	
  </div>  
  )
}

export default Navbar