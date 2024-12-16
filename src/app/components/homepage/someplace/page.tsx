'use client'
import Image from "next/image";
import imgSW1 from '../../../../assets/image/imgSw.png'
import arrowL from '../../../../assets/icon/left_arrow.svg'
import arrowR from '../../../../assets/icon/right_arrow.svg'
import loading from '../../../../assets/icon/load.png'
import Slider from "react-slick";

export default function SomeWhere() {

    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
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
        <div className="lg:w-[1120px] md:w-[864px] w-[311px] mx-auto flex lg:gap-16  flex-col mb-14">
            <div className="title_somewhere w-full flex flex-col lg:gap-3 md:gap-[40px] gap-[20px] items-center justify-center">
                <h1 className="font-bold text-5xl w-full leading-[56px] tracking-[-2%] lg:block hidden">Live anywhere</h1>
                <h1 className="font-bold w-full text-5xl leading-[56px] tracking-[-2%] lg:hidden block">Stunning Work</h1>
                <p className="font-normal w-full text-2xl leading-8 tracking-[-1%]">Keep calm {'&'} travel on</p>
            </div>
            <div className="content_somewhere lg:w-[1120px] md:w-[864px] w-[311px]">
                <div className="slider">
                    <Slider {...settings} className='flex justify-between gap-10'>
                        <Item />
                        <Item />
                        <Item />
                    </Slider>


                </div>
            </div>
            <div className="button_load_more flex flex-row w-max mx-auto gap-3 items-center px-4 py-3 rounded-[90px] border-2 border-[#E6E8EC] lg:mt-0 md:mt-0 mt-20">
                <i className="icon_load">
                    <Image className="w-4 h-4" src={loading} alt={'icon load'} />
                </i>
                <p className="text-sm leading-4 text-[#23262F] font-bold">Load more</p>
            </div>
        </div>
    )
}

function Item() {
    return (
        <div className="item_content_sw flexImportant lg:w-[352px] md:w-[266px] w-[311px] flex flex-col gap-6 mx-[15px]">
            <Image className=" lg:w-[352px] md:w-[266px] w-[311px] lg:h-[480px] md:h-[375px] h-[455px] object-contain rounded-2xl" src={imgSW1} alt={'sw'} />
            <div className="flex flex-col gap-2 items-center w-full   ">
                <h2 className="font-semibold text-base leading-6 text-[#23262F]">Enjoy the great cold</h2>
                <p className="font-medium text-sm leading-6 text-[#777E90]">6,879 properties</p>
            </div>
        </div>
    )
}

function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={'flexImportant lg:hiddenImpotant md:hiddenImpotant z-10 w-10 h-10 rounded-full  items-center justify-center absolute  bottom-[-64px] left-1/2 translate-x-[-5%] border-0 hover:border-2 border-[#E6E8EC] transition-all duration-150 ease-in-out'}
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
            className={'lg:hiddenImpotant md:hiddenImpotant z-10 w-10 h-10  rounded-full flexImportant items-center justify-center absolute  bottom-[-64px] right-1/2 translate-x-[-5%] border-0 hover:border-2 border-[#E6E8EC] transition-all duration-150 ease-in-out'}
            style={{ ...style }}
            onClick={onClick}
        >
            <Image className="opacity-80" src={arrowL} alt={'prev'} />

        </div>
    );
}