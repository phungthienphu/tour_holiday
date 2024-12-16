'use client'
import Image from "next/image";
import Slider from 'react-slick'
import imgSl1 from '../../../../assets/image/slider_homepage/conco.png'
import clientAvt from "../../../../assets/image/client.png"
import horse from "../../../../assets/image/slider_homepage/horse_ot.jpg"
import arrowL from '../../../../assets/icon/left_arrow.svg'
import arrowR from '../../../../assets/icon/right_arrow.svg'
import star from '../../../../assets/icon/star.svg'
export default function Recommend() {
    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,

    };
    const listside = [
        {
            id: 1,
            src: imgSl1
        },
        {
            id: 2,
            src: horse
        }
    ]
    return (
        <div className=" lg:w-[1120px] md:w-[864px] w-[311px] mx-auto flex flex-col lg:gap-[127px] md:gap-[80px] gap-[48px]">
            <div className="title_recommend mx-auto flex flex-col items-center lg:text-center md:text-center text-start justify-center h-[156px] lg:w-[638px] md:w-[638px] w-[311px] gap-3 ">
                <h1 className="font-bold lg:text-5xl md:text-5xl text-[40px]  tracking-[-2%] text-[#23262F]">Travel to make memories all around the world</h1>
                <p className="font-normal text-sm tracking-[-1%] text-[#777E90] w-full">Find trips that fit a flexible lifestyle</p>
            </div>
            <div className="content_recommend lg:h-[700px] lg:w-[1120px] md:w-[864px] w-[311px] mx-auto flex lg:flex-row md:flex-row flex-col lg:gap-[127px] md:gap-[80px] gap-[64px] lg:mb-[127px] md:mb[80px] mb-[48px]">
                <div className="flex-1 flex lg:items-center items-start justify-start">
                    <div className="list_content flex flex-col  h-[632px] md:w-[282px] gap-5 w-[352px]">
                        <>
                            <div className="item flex gap-6 flex-col">
                                <span className="text-sm font-medium text-[#FCFCFD] flex gap-[10px] items-center justify-center leading-[20px] px-3 py-0.5 rounded-[100px] bg-[#8BC5E5] w-max">01</span>
                                <h2 className="font-semibold text-2xl text-[#23262F] leading-8">Find trips that fit a flexible life style</h2>
                                <p className="font-normal text-sm text-[#777E90] leading-6">Stacks is a production-ready library of stackable content blocks built in React Native</p>
                            </div>
                            <div className="item flex gap-6 flex-col">
                                <span className="text-sm font-medium text-[#FCFCFD] flex gap-[10px] items-center justify-center leading-[20px] px-3 py-0.5 rounded-[100px] bg-[#8BC5E5] w-max">02</span>
                                <h2 className="font-semibold text-2xl text-[#23262F] leading-8">Travel with more confidence</h2>
                                <p className="font-normal text-sm text-[#777E90] leading-6">Stacks is a production-ready library of stackable content blocks built in React Native</p>
                            </div>
                            <div className="item flex gap-6 flex-col">
                                <span className="text-sm font-medium text-[#FCFCFD] flex gap-[10px] items-center justify-center leading-[20px] px-3 py-0.5 rounded-[100px] bg-[#58C27D] w-max">03</span>
                                <h2 className="font-semibold text-2xl text-[#23262F] leading-8">See what’s really included</h2>
                                <p className="font-normal text-sm text-[#777E90] leading-6">Stacks is a production-ready library of stackable content blocks built in React Native</p>
                            </div>
                        </>
                        <button className="text-base font-bold leading-4 text-[#FCFCFD] px-6 py-4 gap-3 bg-[#3B71FE] flex items-center justify-center rounded-[90px] w-max">Start your search</button>
                    </div>
                </div>
                {/* ... */}
                <div className="slider_preview flex justify-center  flex-1">
                    <div className="slider relative">
                        <div className="h-[700px] lg:w-[454px] md:w-[454px] w-[311px]">
                            <Slider {...settings} className=''
                            >
                                {
                                    listside.map((item, index) => (
                                        <Image className="block rounded-[32px] w-full h-[700px] object-cover z-40" src={item.src} alt='slide' />
                                    ))
                                }
                            </Slider>
                        </div>
                        <div className="z-20 client_score lg:flex md:flex hidden absolute top-[273px] left-[-38px] rounded-[80px] py-4 pl-4 pr-8  gap-4 bg-gradient-to-r w-64 from-[#FCFCFD] to-[#FCFCFDD4]">
                            <div className="avt">
                                <Image className=" w-12 h-12 rounded-[80px]" src={clientAvt} alt='avtclient' />
                            </div>
                            <div className="font-semibold text-base">
                                <p >Antone Heller</p>
                                <span className="flex flex-row gap-1">
                                    <Image className="" src={star} alt='avtclient' />
                                    4.8</span>
                            </div>
                        </div>
                        <div className="z-20 client_score absolute top-[338px] right-[-48px] rounded-[80px] py-4 pl-4 pr-8 lg:flex md:flex hidden gap-4 bg-gradient-to-r w-64 from-[#FCFCFD] to-[#FCFCFDD4]">
                            <div className="avt">
                                <Image className=" w-12 h-12 rounded-[80px]" src={clientAvt} alt='avtclient' />
                            </div>
                            <div className="font-semibold text-base">
                                <p >Antone Heller</p>
                                <span className="flex flex-row gap-1">
                                    <Image className="" src={star} alt='avtclient' />
                                    4.8</span>
                            </div>
                        </div>

                        <div className="z-20 client_score absolute top-[580px] left-1/2 translate-x-[-50%] rounded-[80px] py-4 pl-4 pr-8 flex gap-4 bg-gradient-to-r w-64 from-[#FCFCFD] to-[#FCFCFDD4]">
                            <div className="avt">
                                <Image className=" w-12 h-12 rounded-[80px]" src={clientAvt} alt='avtclient' />
                            </div>
                            <div className="font-semibold text-base">
                                <p >Antone Heller</p>
                                <span className="flex flex-row gap-1">
                                    <Image className="" src={star} alt='avtclient' />
                                    4.8</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={'z-10 w-10 h-10  rounded-full flexImportant items-center justify-center absolute  top-6 right-11 translate-x-[50%] border-0 hover:border-2 border-[#E6E8EC] transition-all duration-150 ease-in-out'}
            style={{ ...style }}
            onClick={onClick}
        >
            <Image className="opacity-80" src={arrowR} alt={'next'} />
        </div>
    );
}
function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={'z-10 w-10 h-10  rounded-full flexImportant items-center justify-center absolute  top-6 right-[88px] translate-x-[50%] border-0 hover:border-2 border-[#E6E8EC] transition-all duration-150 ease-in-out'}
            style={{ ...style }}
            onClick={onClick}
        >
            <Image className="opacity-80" src={arrowL} alt={'prev'} />

        </div>
    );
}