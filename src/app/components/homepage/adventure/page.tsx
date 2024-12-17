'use client'
import React from "react";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SummerImg1 from '../../../../assets/image/Holiday_Summer_1.png'
import Image from "next/image";
import arrowL from '../../../../assets/icon/left_arrow.svg'
import arrowR from '../../../../assets/icon/right_arrow.svg'
interface props {
    classname?: object,
    style?: object,
    onClick?: () => void

}
export default function Adventure() {
    let settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024, // Tablet landscape (lớn hơn 768px)
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768, // Tablet portrait (nhỏ hơn 768px)
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576, // Điện thoại
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="lg:pb-[136px] md:pb-[136px] pb-[100px] lg:pt-[56px] md:pt-[56px] pt-[32px]">
            <div className="title_adventure flex flex-col gap-3 justify-center items-center text-center mb-12">
                <h1 className="text-5xl font-bold max-sm:text-[40px] max-sm:leading-[48px] tracking-[-2%]">Let's go on an adventure</h1>
                <p className="text-2xl max-sm:text-base  font-normal text-[#777E90] tracking-[-1%]">Find and book a great experience</p>
            </div>
            <div className="lg:w-[1120px] md:w-[864px] mx-auto adven">
                <Slider {...settings}
                >
                    <div className="flexImportant flex-row items-center p-5 w-[352px]">
                        <Image src={SummerImg1} className='w-[160px] h-[160px]' alt='summer 1' />
                        <div className="flex flex-col gap-2 w-max">
                            <h2 className="text-base font-semibold text-[#23262F]">Luxury resort at the sea</h2>
                            <p className="text-xs py-2 px-3 w-max bg-[#E6E8EC] uppercase flex gap-[10px] rounded-[32px] font-semibold text-[#23262F]">9,326 places</p>
                        </div>
                    </div>
                    <div className="flexImportant flex-row items-center p-5 w-[352px]">
                        <Image src={SummerImg1} className='w-[160px] h-[160px]' alt='summer 1' />
                        <div className="flex flex-col gap-2">
                            <h2 className="text-base font-semibold text-[#23262F]">Luxury resort at the sea</h2>
                            <p className="text-xs py-2 px-3 w-max bg-[#E6E8EC] uppercase flex gap-[10px] rounded-[32px] font-semibold text-[#23262F]">9,326 places</p>
                        </div>
                    </div>
                    <div className="flexImportant flex-row items-center p-5 w-[352px]">
                        <Image src={SummerImg1} className='w-[160px] h-[160px]' alt='summer 1' />
                        <div className="flex flex-col gap-2">
                            <h2 className="text-base font-semibold text-[#23262F]">Luxury resort at the sea</h2>
                            <p className="text-xs py-2 px-3 w-max bg-[#E6E8EC] uppercase flex gap-[10px] rounded-[32px] font-semibold text-[#23262F]">9,326 places</p>
                        </div>
                    </div>
                    <div className="flexImportant flex-row items-center p-5 w-[352px]">
                        <Image src={SummerImg1} className='w-[160px] h-[160px]' alt='summer 1' />
                        <div className="flex flex-col gap-2">
                            <h2 className="text-base font-semibold text-[#23262F]">Luxury resort at the sea</h2>
                            <p className="text-xs py-2 px-3 w-max bg-[#E6E8EC] uppercase flex gap-[10px] rounded-[32px] font-semibold text-[#23262F]">9,326 places</p>
                        </div>
                    </div>
                    <div className="flexImportant flex-row items-center p-5 w-[352px]">
                        <Image src={SummerImg1} className='w-[160px] h-[160px]' alt='summer 1' />
                        <div className="flex flex-col gap-2">
                            <h2 className="text-base font-semibold text-[#23262F]">Luxury resort at the sea</h2>
                            <p className="text-xs py-2 px-3 w-max bg-[#E6E8EC] uppercase flex gap-[10px] rounded-[32px] font-semibold text-[#23262F]">9,326 places</p>
                        </div>
                    </div>

                </Slider>
            </div>

        </div>
    )
}

function SampleNextArrow(props:props) {
    const { style, onClick } = props;
    return (
        <div
            className={'z-500 w-10 h-10  rounded-full flexImportant items-center justify-center absolute -bottom-10 left-1/2 translate-x-[50%] border-0 hover:border-2 border-[#E6E8EC] transition-all duration-150 ease-in-out'}
            style={{ ...style }}
            onClick={onClick}
        >
            <Image className="opacity-80" src={arrowR} alt={'next'} />
        </div>
    );
}
function SamplePrevArrow(props:props) {
    const { style, onClick } = props;
    return (
        <div
            className={'z-500 w-10 h-10  rounded-full flexImportant items-center justify-center absolute -bottom-10 right-1/2   translate-x-[-50%] border-0 hover:border-2 border-[#E6E8EC] transition-all duration-150 ease-in-out'}
            style={{ ...style }}
            onClick={onClick}
        >
            <Image className="opacity-80" src={arrowL} alt={'prev'} />

        </div>
    );
}
