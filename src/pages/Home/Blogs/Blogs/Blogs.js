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



    // fetch blog data 
    useEffect(() => {
        fetch('data/data.json')
            .then(res => res.json())
            .then(data => setAllData(data))
    }, [])


    // view all blogs
    let allBlogs = []
    for (const data of allData) {
        allBlogs = allBlogs.concat(data.blogs)
    }



    // category wise data show , tab
    const handleNav = (e, category_name) => {

        fetch('data/data.json')
            .then(res => res.json())
            .then(data => setAllData(data))

        console.log(allData);

        let items;

        // condition to find category wise data 
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

    let showBlogs = []

    if (blogs.length > 0) {
        allBlogs = []
        showBlogs = blogs
    } else {
        showBlogs = allBlogs
    }



    // load more btn 

    // count card amount 
    const [count, setCount] = useState(6)


    // make a copy of allblogs
    let copy = []

    copy = showBlogs;

    let [show, setShow] = useState([])


    // view all blogs
    if (copy.length > 6 && count <= 6) {
        showBlogs = copy.slice(0, count)
        console.log("inside copy", showBlogs);
        setShow(showBlogs)
        setCount(count + 6)
    } else if (copy.length < 6) {
        show = copy;
    }



    //click to load more blogs
    const loadBtn = () => {
        console.log(count <= copy.length);
        if (count <= copy.length) {
            console.log("inside load count", count);
            showBlogs = copy.slice(0, count)
            setCount(count + 6)
            console.log("inside load", showBlogs);
            setShow(showBlogs)
        }
    }
    console.log("show", show);
    console.log("copy", copy);

    return (
        <div className='mx-4'>
            <div className='mt-24 mb-4 flex justify-center'>
                {
                    data.map(item => <BlogTab key={item.id} data={item} handleNav={handleNav}></BlogTab>)
                }
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center'>
                {
                    show.map((item, idx) => <Blog key={idx} data={item}></Blog>)

                }
            </div>

            <div className='text-center my-10'>
                {
                    copy.length > 6 && count <= copy.length ? <button onClick={loadBtn} className='btn bg-[#0A72BA]'>Load More</button> : <></>
                }
            </div>
        </div>
    );
};

export default Blogs;