import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import BlogTab from '../BlogTab/BlogTab';


const Blogs = () => {

    const [data, setData] = useState([])


    // fetch categories data 
    useEffect(() => {
        fetch('data/categories.json')
            .then(res => res.json())
            .then(data => {

                setData(data)
            })
    }, [])


    //handle btn

    const [blogs, setBlogs] = useState([])
    const [allData, setAllData] = useState([])




    useEffect(() => {
        fetch('data/data.json')
            .then(res => res.json())
            .then(data => setAllData(data))
    }, [])

    let allBlogs = []
    for (const data of allData) {
        allBlogs = allBlogs.concat(data.blogs)
    }



    // handle Click 
    const handleNav = (e, category_name) => {


        fetch('data/data.json')
            .then(res => res.json())
            .then(data => setAllData(data))

        console.log(allData);

        let items;
        if (category_name === 'View All') {
            for (const data of allData) {
                allBlogs = allBlogs.concat(data.blogs)
            }
            setBlogs(allBlogs)
        } else {
            items = allData.find(searchCategory)
            function searchCategory(item) {
                if (item.category_name === category_name) {
                    console.log(item.blogs);
                    return item.blogs
                }
            }

            setBlogs(items.blogs);
        }



    }

    if (blogs.length > 0) {
        allBlogs = []
    }
    console.log(allBlogs);

    return (
        <div className='mx-4'>
            <div className='mt-24 mb-4 flex justify-center'>
                {
                    data.map(item => <BlogTab key={item.id} data={item} handleNav={handleNav}></BlogTab>)
                }
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center'>
                {
                    blogs.length > 0 ? blogs.map((item, idx) => <Blog key={idx} data={item}></Blog>)
                        : allBlogs?.map((item, idx) => <Blog key={idx} data={item}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;