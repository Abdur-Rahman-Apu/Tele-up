import React, { useEffect, useState } from 'react';
import { Route, useLocation, useParams } from 'react-router-dom';
import Blog from '../../Blogs/Blog/Blog';

const SearchResult = () => {

    const category = useParams()




    // get data from another route using useNavigate hook
    const location = useLocation()
    const data = location.state;



    const categoryData = data.find(item => item.category_name === category.categoryName)
    console.log(categoryData);
    const { blogs } = categoryData;
    console.log(blogs);

    return (
        <div>
            <h1 className='text-xl text-center font-bold mt-10 uppercase text-[#0A72BA]'>{category.categoryName}</h1>

            <div className='mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    blogs.map((blog, idx) => <Blog key={idx} data={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default SearchResult;