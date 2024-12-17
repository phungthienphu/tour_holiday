'use client'
import Image from 'next/image';
import Slider from 'react-slick';
import arrowL from '../../../../assets/icon/left_arrow.svg'
import arrowR from '../../../../assets/icon/right_arrow.svg'
import home from '../../../../assets/icon/home.svg'
import house from '../../../../assets/image/house.png'

interface props {
    classname?: object,
    style?: object,
    onClick?: () => void

}

export default function SamePlace() {
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
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768, // Tablet portrait (nhỏ hơn 768px)
                settings: {
                    slidesToShow: 3,
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
        <div className='flex flex-col gap-[80px] pt-[80px] lg:pb-14 md:pb-[64px] pb-[104px]  mx-auto'>
            <div className="title_property flex flex-col gap-3 justify-center lg:w-[1120px] md:w-[864px] w-[311px] mx-auto">
                <h1 className='text-5xl font-bold tracking-[-2%]'>Browse by property type</h1>
                <p className="text-2xl font-normal text-[#777E90] tracking-[-1%]">Let&apos;s go on an adventure</p>
            </div>
            {/*  lg:w-[1120px]  md:w-[1024px] w-[375px] */}
            <div className='SamePlace'>
                <div className="slider">
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
        </div>
    )
}

function Item() {
    return (
        <div className="flexImportant lg:w-[256px] md:w-[236px] h-[329px] w-[278px] flex-col gap-[21px] relative p-5  ">
            <Image src={house} className='w-full h-64 rounded-3xl' alt='house 1' />
            <div className='absolute top-[32px] left-8 flex flex-row text-[#FCFCFD] text-xs font-semibold leading-3 px-3 py-2 rounded-[32px] gap-[6px] bg-[#23262F] uppercase'>
                <span>
                    20%
                </span>
                <span>
                    off
                </span>
            </div>
            <div className="flex flex-col gap-2 w-max justify-center">
                <h2 className="text-base font-semibold text-[#23262F]">Nature house</h2>
                <p className="text-xs leading-5 font-semibold flex flex-row gap-[6px]">
                    <span>
                        <Image src={home} className='w-4 h-4 ' alt='house 1' />
                    </span>
                    650,596
                </p>
            </div>
        </div>
    )
}

function SampleNextArrow(props: props) {
    const { style, onClick } = props;
    return (
        <div
            className={'z-500 w-10 h-10  rounded-full flexImportant items-center justify-center absolute lg:top-[-50%] lg:translate-y-[50%] lg:left-[1024px] md:top-[-50%] md:translate-y-[50%] md:left-[864px] translate-x-[50%] bottom-[-70px] left-[15px] border-0 hover:border-2 border-[#E6E8EC] transition-all duration-150 ease-in-out'}
            style={{ ...style }}
            onClick={onClick}
        >
            <Image className="opacity-80" src={arrowR} alt={'next'} />
        </div>
    );
}
function SamplePrevArrow(props: props) {
    const { style, onClick } = props;
    return (
        <div
            className={'z-500 w-10 h-10  rounded-full flexImportant items-center justify-center absolute lg:top-[-50%] lg:left-[1024px] lg:translate-y-[50%] md:top-[-50%] md:left-[864px] md:translate-y-[50%] translate-x-[-50%] bottom-[-70px] left-[10px]  border-0 hover:border-2 border-[#E6E8EC] transition-all duration-150 ease-in-out'}
            style={{ ...style }}
            onClick={onClick}
        >
            <Image className="opacity-80" src={arrowL} alt={'prev'} />

        </div>
    );
}
