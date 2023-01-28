import React, { useEffect, useState } from 'react';
import { Route, useLocation, useParams } from 'react-router-dom';
import Blog from '../../Blogs/Blog/Blog';

const SearchResult = () => {

    const category = useParams()

    // useEffect(() => {
    //     fetch('data/data.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //         })
    //         .catch(error => console.log(error))
    // }, [])


    // fetch('data/data.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //     })


    // get data from another route using useNavigate hook
    const location = useLocation()
    const data = location.state;



    const categoryData = data.find(item => item.category_name === category.categoryName)
    console.log(categoryData);
    const { blogs } = categoryData;
    console.log(blogs);

    return (
        <div>
            <h1 className='text-xl text-center font-bold mt-10 uppercase text-violet-500'>{category.categoryName}</h1>

            <div className='mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    blogs.map((blog, idx) => <Blog key={idx} data={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default SearchResult;