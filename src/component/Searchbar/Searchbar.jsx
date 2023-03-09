import '../../component/Searchbar/Searchbar.css'


import React from 'react'
import { useUserAuth } from '../../context/Logincontext'

const Searchbar = () => {

  const {searchbartext , setsearchbartext} = useUserAuth();

  function handlef(e){
    const newdata = {...searchbartext};
    newdata[e.target.name] = e.target.value;
    setsearchbartext(newdata);
    console.log(searchbartext.searchtext); 
  }

  return (
    <form action="/" method="get" className='main-search'>
        <label htmlFor="header-search">
            <span className="header-search">Search events</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search blog posts"
            name="searchtext" 
            value={searchbartext.searchtext}
            onChange={handlef}

        />
        
        <button type="submit" className='search-button' onClick={()=>{}}>Search</button>
    </form>
  )
}

export default Searchbar
