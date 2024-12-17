'use client'
import Image from 'next/image';
import Slider from 'react-slick';
import arrowL from '../../../../assets/icon/left_arrow.svg'
import arrowR from '../../../../assets/icon/right_arrow.svg'
import house from '../../../../assets/image/house.png'
import avt2 from '../../../../assets/image/avt2.png'
import star from '../../../../assets/icon/star.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
interface props {
    classname?: object,
    style?: object,
    onClick?: () => void

}
export default function FindBy() {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1025, // Tablet landscape (lớn hơn 768px)
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
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
        <div className='flex flex-col lg:gap-[80px] md:gap-[80px] gap-[40px] lg:px-0 lg:pt-[56px] lg:pb-[136px] md:pt-[48px] md:pb-[112px] pt-[64px] pb-[84px] lg:w-[1120px] md:w-[864px] w-[311px] mx-auto'>
            <div className="title_property flex lg:flex-row md:flex-row flex-col gap-3 justify-start lg:items-center md:items-center items-start">
                <h1 className='lg:text-5xl md:text-5xl text-[32px] leading-10 font-bold tracking-[-2%] pr-3 py-2'>Best hosts of the </h1>
                <div className='lg:flex md:flex hidden flex-row items-center px-2 py-4 gap-2 text-[#3B71FE]'>
                    <select className='text-[#3B71FE] appearance-none leading-[56px]  text-[48px] font-bold outline-none'>
                        <option value="">month</option>
                        <option value="">day</option>
                    </select>

                    <i className=' h-10 w-10 p-1 flex items-center justify-center gap-[10px]'>
                        <FontAwesomeIcon className=" font-bold " icon={faAngleDown} />
                    </i>
                </div>
                <div className='right select_option lg:hidden md:hidden flex flex-row items-center  pl-0 justify-between lg:w-64 md:w-64 w-[311px] h-[48px] bg-white text-sm font-semibold border-2 rounded-[12px] border-[#E6E8EC]'>
                    <select
                        className='appearance-none outline-none p-[12px]'
                    >
                        <option>
                            Month
                        </option>
                    </select>
                    <i className=' rounded-full h-6 w-6 pr-2 flex items-center justify-center gap-[10px]'>
                        <FontAwesomeIcon className="text-[#777E90] font-semibold " icon={faAngleDown} />
                    </i>
                </div>
            </div>
            <div>
                <div className="slider ">
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
        <div className="flexImportant flex-col gap-[21px] relative lg:w-[256px] md:w-[267px] w-[264px]  rounded-3xl shadow-md ">
            <Image src={house} className='w-full h-[220px] object-cover rounded-t-3xl' alt='house 1' />
            <div className='absolute top-[32px] left-8 flex flex-row text-[#23262F] text-xs font-semibold leading-3 px-3 py-2 rounded-[32px] gap-[6px] bg-[#FCFCFD] uppercase'>
                <i>
                    <Image src={star} alt={'star'} />
                </i>
                <span className='font-semibold'>4.9</span>
            </div>
            <div className="flex flex-col gap-2 relative pt-12 pb-8 px-10  items-center justify-center">
                <div className='absolute border-4 top-[-40%]  border-white rounded-full'>
                    <Image src={avt2} className='w-[80px] h-[80px] rounded-full' alt='avt 2' />
                </div>
                <h2 className="text-base font-semibold text-[#23262F]">Antone Heller</h2>
                <p className="text-xs leading-5 font-semibold flex flex-row gap-[6px] text-[#777E90]">
                    Gaylordside
                </p>
            </div>

        </div>
    )
}

function SampleNextArrow(props: props) {
    const { style, onClick } = props;
    return (
        <div
            className={'z-500 w-10 h-10  rounded-full flexImportant items-center justify-center absolute lg:top-[-50%] lg:translate-y-[50%] lg:left-[1024px] md:top-[-50%] md:translate-y-[50%] md:left-[864px] translate-x-[50%] bottom-[-60px] left-[15px] border-0 hover:border-2 border-[#E6E8EC] transition-all duration-150 ease-in-out'}
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
            className={'z-500 w-10 h-10  rounded-full flexImportant items-center justify-center absolute lg:top-[-50%] lg:left-[1024px] lg:translate-y-[50%] md:top-[-50%] md:left-[864px] md:translate-y-[50%] translate-x-[-50%] bottom-[-60px] left-[10px]  border-0 hover:border-2 border-[#E6E8EC] transition-all duration-150 ease-in-out'}
            style={{ ...style }}
            onClick={onClick}
        >
            <Image className="opacity-80" src={arrowL} alt={'prev'} />

        </div>
    );
}