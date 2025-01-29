import React from 'react';
import banner from "../assets/menu/banner3.jpg";
import { Helmet } from 'react-helmet';
import { Parallax } from 'react-parallax';
import FoodOffers from '../Components/Offers/FoodOffers';
import banner2 from '../assets/home/04.jpg';
import DessertCard from '../Components/FoodCard/DessertCard';
const OurManue = () => {
    return (
        <>
            <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage={banner}
                bgImageAlt="the dog"
                strength={-200}
                className='h-[600px] w-full bg-cover bg-center object-contain'
            >
                <div

                    className="h-[600px] w-full bg-cover bg-center flex items-center flex-col mt-[-1px] justify-center "
                // style={{ backgroundImage: `url(${banner})` }}
                >

                    <Helmet>
                        <title>𝒪𝓊𝓇 𝑀𝒶𝓃𝓊𝑒</title>
                    </Helmet>

                    <div className='w-[600px] h-[200px] bg-black bg-opacity-70 flex flex-col items-center justify-center
border-white border-r-2 rounded-sm border-b-2'>
                        <strong className='text-4xl text-white'>𝓞𝓤𝓡 𝓜𝓔𝓝𝓤𝓔</strong>
                        <span className='text-white font-mono mt-4 tracking-widest'>Would You Like TO Try Dish?</span>
                    </div>

                </div>
            </Parallax>

            {/* Todays Offer */}
            <div>

                <div className='flex flex-col justify-center items-center'>
                    <span className="text-yellow-300 font-bold text-sm">
                        --Don't miss--
                    </span>
                    <hr className="bg-black bg-opacity-15 w-[500px] mt-3 mb-3" />
                    <span className='text-3xl'>𝓣𝓸𝓭𝓪𝔂'𝓼 𝓸𝓯𝓯𝓮𝓻</span>
                    <hr className="bg-black bg-opacity-15 w-[500px] mt-3 mb-3" />

                </div>

                <div>
                    <FoodOffers></FoodOffers>
                </div>


            </div>
            <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage={banner2}
                bgImageAlt="the dog"
                strength={-200}
                className="h-[600px] w-full"
                bgImageStyle={{
                    objectFit: "cover",
                    objectPosition: "center",
                }}
            >
                <div className="h-[600px] w-full flex items-center flex-col justify-center bg-black bg-opacity-30">
                   

                    <div className="w-[600px] h-[200px] bg-black bg-opacity-70 flex flex-col items-center justify-center border-white border-r-2 rounded-sm border-b-2">
                        <strong className="text-4xl text-white">𝒟𝐸𝒮𝒮𝐸𝑅𝒯𝒮</strong>
                        <span className="text-white font-mono mt-4 tracking-widest">Would You Like TO Try Dish?</span>
                    </div>
                </div>
            </Parallax>

      <DessertCard></DessertCard>
        </>
    );
};

export default OurManue;