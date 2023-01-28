import React, { useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TrendingCard from './TrendingCard';

const Trending = () => {

    const [data, setData] = useState([])
    let blog = []

    // fetch data 
    useEffect(() => {
        fetch('data/data.json')
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [])

    // filter trending data 
    for (const item of data) {
        blog = blog.concat(item.blogs).filter(item => item.trending === 1)
    }

    console.log(blog);
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className='mx-10 my-10'>
            <h1 className='font-bold my-6 text-2xl'>Trending</h1>
            <Carousel className='h-[550px]'
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                customTransition="all 1s ease-out"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
            >
                {
                    blog.map(item => <TrendingCard key={item.id} data={item}></TrendingCard>)
                }
            </Carousel>
        </div>
    );
};

export default Trending;