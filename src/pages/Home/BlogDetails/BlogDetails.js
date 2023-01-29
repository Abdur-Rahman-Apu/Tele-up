import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBirthdayCake, faBookmark, faCircle, faCopy, faFunnelDollar, faTimeline } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import AuthorBlogs from '../AuthorBlogs/AuthorBlogs';

const BlogDetails = () => {
    const location = useLocation()
    console.log(location.state);
    const data = location.state;

    const { trending, author_info, blog_info } = data;

    const { author_name } = author_info;

    let authorBlogs = []

    //get all data
    const [allData, setAllData] = useState([])

    useEffect(() => {
        fetch('data/data.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAllData(data)
            })
    }, [])

    for (const item of allData) {
        authorBlogs = authorBlogs.concat(item.blogs)
    }
    console.log(authorBlogs);
    authorBlogs = authorBlogs.filter(item => item.author_info.author_name === author_name)
    console.log(authorBlogs);

    return (
        <div className='my-8 mx-10'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <div className="avatar mr-6">
                        <div className="w-24 rounded-full">
                            <img className='object-top' src={author_info.author_img} alt="img" />
                        </div>
                    </div>

                    <div>
                        <p className='font-bold text-lg'>{author_info.author_name}</p>
                        <p>{blog_info.published_date}</p>
                    </div>
                </div>
                <div className='flex justify-between w-[150px]'>
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faLinkedin} />
                    <FontAwesomeIcon icon={faCopy} />
                    <FontAwesomeIcon icon={faBookmark} />
                </div>
            </div>

            <hr className='my-4' />

            <div className='blog-info'>
                <img className='w-2/3 mx-auto my-10 rounded-md object-scale-down' src={blog_info.img} alt="img" />
                <p className='font-bold text-3xl my-6'>{blog_info.title}</p>
                <p className='text-justify first-letter:text-2xl first-letter:text-[#0A72BA]'>{blog_info.description}</p>
            </div>

            <div className="divider my-10">
                <FontAwesomeIcon icon={faTimeline} />
            </div>

            <div>
                <h3 className='text-3xl font-bold text-sky-500 my-12 text-center'>Recommended for you</h3>

                <div>
                    {
                        authorBlogs.map((blog, idx) => <AuthorBlogs key={idx} blog={blog} ></AuthorBlogs>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;