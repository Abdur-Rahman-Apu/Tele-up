import React, { useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Quote from '../Quote/Quote';

const Quotes = () => {

    const [quotes, setQuotes] = useState([])



    //fetch quotes data 
    useEffect(() => {
        fetch('data/quote.json')
            .then(res => res.json())
            .then(data => setQuotes(data))
    }, [])




    //responsive slide
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }


    }
    return (
        <div className='my-20'>
            <Carousel className='mx-8'
                swipeable={true}
                draggable={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3500}

                customTransition="all 1s ease-in-out"
                transitionDuration={2000}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}

                itemClass="carousel-item-padding-40-px"
            >
                {
                    quotes.map(quote => <Quote key={quote.id} data={quote}></Quote>)
                }
            </Carousel>;
        </div >
    );
};

export default Quotes;