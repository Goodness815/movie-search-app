import React from 'react'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import MovieItem from '../movieItem/MovieItem'
import 'swiper/css/effect-fade';
import './movie.css'
function Movie({ movieData }) {


    return (
        <div>
            <div className="movieContainer">
                <Swiper modules={[Autoplay]} autoplay={{ delay: 2000 }} loop slidesPerView={4.5} className="movieInner" breakpoints={{
                    // when window width is >= 640px
                    300: {
                        width: 300,
                        slidesPerView: 1,
                    },
                    // when window width is >= 640px
                    640: {
                        width: 640,
                        slidesPerView: 1.5,
                    },
                    // when window width is >= 768px
                    768: {
                        width: 768,
                        slidesPerView: 2,
                    },
                    900: {
                        width: 768,
                        slidesPerView: 2.5,
                    },
                }}>

                    {/* Code that maps through movies and does the swipe action  */}

                    {movieData.map((movie) => {
                        return <SwiperSlide className='swiper-item' key={movie.imdbID
                        }>
                            <MovieItem movie={movie} />
                        </SwiperSlide>
                    })}

                </Swiper>

            </div>
        </div>
    )
}

export default Movie