import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import SearchResult from '../SearchResult/SearchResult';

const Search = () => {

    const navigate = useNavigate()

    const handleSearch = (event) => {
        event.preventDefault()
        console.log(event.target.categories.value);
        navigate(`/search/${event.target.categories.value}`, { replace: true })
    }
    return (

        <div className='my-10'>
            <h1 className=' text-center text-2xl font-bold'>Search by category</h1>
            <form onSubmit={handleSearch}>
                <div className="flex justify-center my-10">


                    <div className="relative w-80">
                        <select id="categories" name='categories' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="Sports" selected>Sports</option>
                            <option value="Travel">Travel</option>
                            <option value="Health">Health</option>
                            <option value="Fashion">Fashion</option>
                            <option value="Food">Food</option>
                            <option value="Technology">Technology</option>
                        </select>
                        <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            <span className="sr-only">Search</span>
                        </button>
                    </div>
                </div>
            </form>
        </div>

    );
};

export default Search;