'use client'
import React from "react";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import department from '../../../../assets/icon/department.svg'
import Image from "next/image";
import arrowL from '../../../../assets/icon/left_arrow.svg'
import arrowR from '../../../../assets/icon/right_arrow.svg'
import Link from "next/link";
interface props {
    classname?: object,
    style?: object,
    onClick?: () => void

}
export default function Category() {
    let settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
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
        <div className="pb-[136px] pt-[56px] flex flex-col gap-8">
            <div className="title_adventure flex flex-col gap-3 justify-center items-center mb-12 ">
                <h1 className="text-5xl font-bold tracking-[-2%] lg:w-auto md:w-auto w-[311px] text-center">Browse by category</h1>
                <p className="text-2xl font-normal text-[#777E90] tracking-[-1%] lg:w-auto md:w-auto  w-[311px] text-center">Let’s go on an adventure</p>
            </div>
            <div className="lg:w-[1120px] md:w-[864px] w-[311px] mx-auto impor browByCateGory">
                <Slider {...settings}
                >
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </Slider>
            </div>
        </div>
    )
}

function Item() {
    return (
        <div className="flexImportant flex-col items-start p-8 rounded-[24px] gap-[74px] bg-[#FCFCFD] shadow">
            <span className="px-3 py-2 leading-3 text-xs bg-[#E6E8EC] flex gap-[10px] rounded-[32px] font-bold text-[#23262F]">
                256.356
            </span>
            <Link href={'/components/detail'} className="flex gap-[24px] flex-col">
                <Image src={department} className='w-[32px] h-[32px]' alt='department 1' />
                <div className="flex flex-col gap-2 w-max text-start">
                    <h2 className="text-base font-semibold text-[#23262F]">City house</h2>
                    <p className="text-xs py-2 w-max font-semibold text-[#777E90]">Small description</p>
                </div>
            </Link>
        </div>
    )
}

function SampleNextArrow(props: props) {
    const {  style, onClick } = props;
    return (
        <div
            className={'z-500 w-10 h-10  rounded-full flexImportant items-center justify-center absolute -bottom-[82px] left-1/2 translate-x-[10%] border-0 hover:border-2 border-[#E6E8EC] transition-all duration-150 ease-in-out'}
            style={{ ...style }}
            onClick={onClick}
        >
            <Image className="opacity-80" src={arrowR} alt={'next'} />
        </div>
    );
}
function SamplePrevArrow(props: props) {
    const {  style, onClick } = props;
    return (
        <div
            className={'z-500 w-10 h-10  rounded-full flexImportant items-center justify-center absolute -bottom-[82px] right-1/2   translate-x-[-10%] border-0 hover:border-2 border-[#E6E8EC] transition-all duration-150 ease-in-out'}
            style={{ ...style }}
            onClick={onClick}
        >
            <Image className="opacity-80" src={arrowL} alt={'prev'} />

        </div>
    );
}
