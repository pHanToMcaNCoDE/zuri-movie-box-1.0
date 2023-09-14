import React, { useEffect, useState } from 'react'
import AsideBar from '../AsideBar/AsideBar'
import {GoDotFill} from 'react-icons/go'
import {AiFillStar} from 'react-icons/ai'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import {ScaleLoader} from 'react-spinners'
import {GiTicket} from 'react-icons/gi'
import {AiOutlineUnorderedList} from 'react-icons/ai'
import ads from '../../assets/ads.png'
import Nav from '../Nav/Nav'

const Details = () => {
    const params = useParams();
    const [loading, setLoading] = useState(true); 
    const [movieDetails, setMovieDetails] = useState({});

    const fetchMovieDetails = async () => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=d10f94cdd313f423da01119ecf2659bb`);
            setMovieDetails(response.data);
            setLoading(false); 
        } catch (e) {
            console.log(e);
            setLoading(false); 
        }
    }

    console.log(movieDetails)
       

    useEffect(() => {
        fetchMovieDetails();
    }, [params.id]);

    const baseUrl = 'https://image.tmdb.org/t/p/w500'; 

    const imageUrl = `${baseUrl}${movieDetails.backdrop_path}`;

    return (
        <div>
            <Nav/>
        <div className='flex'>
            <div className='lg:w-[18vw]'>
                <AsideBar />
            </div>
            <div className='w-[100vw] lg:w-[82vw] p-4'>
                {loading ? (
                    <div className='bg-black/70 h-screen w-full fixed z-10 top-0 left-0'>
                        <ScaleLoader className='fixed top-[40%] left-[50%]' height="80" width="4" radius="3" color="crimson" ariaLabel="loading" wrapperStyle wrapperClass />
                    </div>
                ) : (
                    <div>
                        <div className='h-[80vh] pr-[3%] py-[2%]'>
                            <img preload="auto" className='md:w-[100vw] w-[100vw]  lg:w-[80vw] h-[440px] rounded-3xl object-cover' src={imageUrl || 'URL_TO_PLACEHOLDER_IMAGE'} alt={movieDetails.title}></img>

                            <div className='flex flex-col md:flex-row lg:flex-row justify-between items-center px-2 pb-2 pt-5'>

                                <div className='flex flex-col md:flex-row text-center lg:text-justify lg:flex-row items-center'>

                                    <h1 data-testid='movie-title' className='text-gray-900 text-[1.4rem] font-bold p-1'>{movieDetails.title}</h1>

                                    <span className='text-gray-900 p-1'><GoDotFill size={12}/></span>

                                    <h2 className='lg:text-[1.2rem] p-1'>{movieDetails.spoken_languages.map((items) => <span className='text-rose-800 p-1'>{items.iso_639_1}</span>)}</h2>

                                    <span className='text-gray-900 p-1'><GoDotFill size={12}/></span>

                                    <p>{movieDetails.genres.map((items) => (<span className='border border-gray-300 text-rose-700 rounded-full py-0 px-3 m-2'>{items.name}</span>))}</p>

                                </div>
                                <div>
                                <p className='flex items-center'><AiFillStar className='text-yellow-400 p-1' size={28}/><span className='text-gray-400 p-1'>{movieDetails.vote_average} </span> / 10.00</p> 
                                </div>
                            </div>


                        <div className='flex flex-col lg:flex-row justify-between items-center'>
                            {/* Left */}
                            <div className='w-[100%] lg:w-[60%] mb-8 flex flex-col'>

                                <div className='w-full py-0 px-2 text-justify'>
                                    <p data-testid='movie-overview' className='text-gray-900 text-[1.06rem]'>{movieDetails.overview}
                                    </p>
                                </div>

                                <div className='px-1 py-5 flex flex-col'>

                                    <p className='py-2 px-2'>Runtime: <span data-testid='movie-runtime' className='text-[#BE123C]'>{movieDetails.runtime}</span></p>

                                    <p className='py-2 px-2 flex items-center'>Release Date: 
                                    <span data-testid='movie-release-date' className='text-[#BE123C] lg:text-[1.2rem] p-1'>{new Date(movieDetails.release_date).getTime()}</span></p>

                                    <p className='py-2 px-2'>Tagline: <span className='text-[#BE123C]'>{movieDetails.tagline}</span></p>

                                </div>
                                <div>
                                </div>
                            </div>

                            {/* Right */}

                            <div className='w-[100%] lg:w-[40%] mb-6'>
                                <div className='flex flex-col items-center'>

                                    <button className='outline-none bg-[#BE123C] border border-[#BE123C] text-white py-2 px-[20%] rounded-lg flex items-center my-2'><GiTicket className='text-white mx-2' size={22}/>See Showtimes</button>

                                    <button className='outline-none bg-rose-100 border border-[#BE123C] text-gray-900 py-2 px-[16%] rounded-lg flex items-center my-2'><AiOutlineUnorderedList className='mx-2' size={22}/>More watch options</button>
                                </div>
                                <div className='relative cursor-pointer duration-300 hover:scale-110'>
                                    <div>
                                        <img className='mx-auto w-[75%] object-cover' src={ads} alt='Movie Advert'></img>
                                    <div className='w-[75%] bg-black/70 text-white rounded-b-lg flex items-center absolute bottom-0 left-[12.5%] p-1'>
                                        <AiOutlineUnorderedList className='mx-2' size={22}/>
                                        <p className='text-white text-[.9rem] p-1'>The Best Movies and Shows in September</p>
                                    </div>
                                    </div>

                                    
                                </div>
                            </div>
                            
                        </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
        </div>
    )
}         

export default Details
