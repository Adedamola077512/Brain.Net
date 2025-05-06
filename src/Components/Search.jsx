import React from 'react'
import './Search.css'
import img18 from '../assets/img-18.png'
const Search = () => {
  return (
    <div className='container py-5 mt-5'>
        <div className='search-flex'>
            <div>
                <span className='search-span'>Tell us what to explore</span>
                <h1 className='search-h1'>Search</h1>
                <p className='search-p'>
                  Search and geocoding is tied to everything we <br />uild — maps, navigation, AR — and underlies <br />every app that helps humans explore their <br />world.  
                </p>
                <span className='map-more'>DISCOVER SEARCH →</span>
            </div>
            <div>
                <img src={img18} alt="" className='search-img'/>
            </div>
        </div>
    </div>
  )
}

export default Search