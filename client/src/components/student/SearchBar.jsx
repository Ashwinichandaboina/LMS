import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({data}) => {
  const navigate=useNavigate()
  const [input,setInput]=useState(data ? data :'')

const onSearchHandler=(e)=>{
  e.preventDefault()
  navigate('/course-list/'+ input)
}
  
  return (
    <div className="flex justify-center w-full mt-6">
      <form  onSubmit={onSearchHandler}className="max-w-md w-full h-10 flex items-center bg-white border border-gray-300 rounded-md shadow-sm">
        <img
          src={assets.search_icon}
          alt="search_icon"
          className="w-4 h-4 mx-3 opacity-60"
        />
        <input onChange={e=> setInput(e.target.value)} value={input}
          type="text"
          placeholder="Search for courses"
          className="flex-grow h-full text-sm outline-none text-gray-600 placeholder:text-gray-400"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-1.5 rounded-md mx-2"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
