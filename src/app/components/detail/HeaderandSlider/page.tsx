
'use client'
import Image from 'next/image'
import homeIcon from '../../../../assets/icon/home.svg'
import goBack from '../../../../assets/icon/arrowBack.svg'
import goNext from '../../../../assets/icon/arrowNext.svg'
import upLoad from '../../../../assets/icon/uploadIcon.svg'
import star from '../../../../assets/icon/star.svg'
import locationIcon from '../../../../assets/icon/locationArrow.svg'
import host from '../../../../assets/image/client.png'
import image1 from '../../../../assets/image/detail/home_leak.png'
import image2 from '../../../../assets/image/detail/bed.png'
import Slider from 'react-slick'
import Link from 'next/link'


export default function HeaderSlider() {

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className='flex flex-col gap-16'>
            <div className='flex flex-col gap-6'>
                <div className="nav_detail flex flex-row justify-between items-center">
                    <div className="nav_left">
                        <Link href={'/components/homepage'} className='lg:flex md:flex hidden flex-row px-4 py-3 gap-3 border-2 border-[#E6E8EC] items-center rounded-[90px]'>
                            <i>
                                <Image className='h-2 w-2' src={goBack} alt={'go home'} />
                            </i>
                            <p className='font-bold text-sm leading-4 text-[#23262F]'>
                                Go home
                            </p>
                        </Link >
                    </div>
                    <div className="nav_right ">
                        <div className='lg:flex md:flex hidden flex-row gap-2 items-center h-6 text-sm leading-4 font-bold text-[#777E90]'>
                            <span>Home</span>
                            <span className='h-6 w-6 flex items-center justify-center'>
                                <Image className='' src={goNext} alt={'next'} />
                            </span>
                            <span>
                                Stays
                            </span>
                            <span className='h-6 w-6 flex items-center justify-center'>
                                <Image src={goNext} alt={'next'} />
                            </span>
                            <span>
                                New Zealand
                            </span>
                            <span className='h-6 w-6 flex items-center justify-center'>
                                <Image src={goNext} alt={'next'} />
                            </span>
                            <span className='text-[#B1B5C3]'>
                                South Island
                            </span>
                        </div>
                    </div>
                </div>


                <div className="detail_header flex lg:flex-row md:flex-row flex-col lg:justify-between md:justify-between justify-center lg:gap-[206px] md:gap-[206px] gap-[32px]">
                    <div className='flex flex-row justify-between'>
                        <Link href={'/components/homepage'} className='h-10 cursor-pointer w-10 lg:hidden md:hidden flex items-center justify-center'>
                            <Image src={goBack} width={10} height={10} className='' alt='home' />
                        </Link>
                        <div className="nav_detailheader_left flex flex-col gap-4 lg:w-[650px] md:w-[618px] w-[291px]">
                            <div className="header_title lg:text-[48px] md:text-[48px] text-[32px] font-bold lg:leading-[56px] md:leading-[56px] leading-[40px] tracking-[-2%] text-[#23262F]">Spectacular views of Queenstown</div>
                            <div className="user_title flex flex-row items-center gap-5 text-sm leading-6 font-normal text-[#777E90]">
                                <div className="avt">
                                    <Image src={host} className='h-6 w-6 rounded-full' alt='host' />
                                </div>
                                <div className="score flex flex-row items-center gap-2">
                                    <span className='flex flex-row items-center gap-2 '>
                                        <span>
                                            <Image src={star} className='h-5 w-5' alt='star' />
                                        </span>
                                        <span className='text-sm leading-6 font-medium text-[#23262F]'>
                                            4.8
                                        </span>
                                    </span>
                                    <span className='lg:block md:block hidden'>(256 reviews)</span>
                                </div>
                                <div className="status_host flex flex-row items-center gap-2">
                                    <i>
                                        <Image src={homeIcon} alt='home' />
                                    </i>
                                    <span>
                                        Superhost
                                    </span>
                                </div>
                                <div className="address lg:flex md:flex hidden flex-row items-center gap-2">
                                    <i>
                                        <Image src={homeIcon} alt='flag' />
                                    </i>
                                    <span>Queenstown, Otago, New Zealand</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="nav_detailheader_right">
                        <div className='flex lg:flex-row md:flex-col flex-row justify-center  lg:gap-4 md:gap-4 gap-6'>
                            <div className='p-2 rounded-[48px] lg:flex md:hidden flex gap-[10px] border-2 border-[#E6E8EC] items-center justify-center'>
                                <Image className='h-6 w-6' src={locationIcon} alt={'icon'} />
                            </div>
                            <div className='p-2 rounded-[48px] lg:flex md:hidden flex gap-[10px] border-2 border-[#E6E8EC] items-center justify-center'>
                                <Image className='h-6 w-6' src={upLoad} alt={'icon'} />
                            </div>
                            <div className='p-2 rounded-[48px] flex gap-[10px] border-2 border-[#E6E8EC] items-center justify-center'>
                                <Image className='h-6 w-6' src={locationIcon} alt={'icon'} />
                            </div>
                            <div className='p-2 rounded-[48px] flex gap-[10px] border-2 border-[#E6E8EC] items-center justify-center'>
                                <Image className='h-6 w-6' src={upLoad} alt={'icon'} />
                            </div>
                            <div className='p-2 rounded-[48px] lg:flex md:hidden hidden gap-[10px] border-2 border-[#E6E8EC] items-center justify-center'>
                                <Image className='h-6 w-6' src={locationIcon} alt={'icon'} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <div className='album_slider'>


                <div className='gallery lg:flex md:flex hidden flex-row lg:h-[784px] md:h-[540px] h-[467px] gap-2'>
                    <div className='w-3/4  relative '>
                        <Image className='object-cover rounded-2xl' fill src={image1} alt={'image1'} />
                    </div>
                    <div className=' flex w-1/4 flex-col  gap-2 relative'>
                        <div className='w-full h-1/3 relative '>
                            <Image className='object-cover rounded-2xl' fill src={image2} alt={'image1'} />
                        </div>
                        <div className='w-full h-1/3 relative '>
                            <Image className='object-cover rounded-2xl' fill src={image2} alt={'image1'} />
                        </div>
                        <div className='w-full h-1/3 relative '>
                            <Image className='object-cover rounded-2xl' fill src={image2} alt={'image1'} />
                        </div>

                    </div>

                </div>


                <div className="slider lg:hidden md:hidden block pb-8">
                    <Slider {...settings} className='flex justify-between gap-10'>
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
        <div className="item_content_sw flexImportant w-[298px] h-[476px] flex flex-col gap-6 mx-[15px] relative">
            <Image className="  rounded-2xl object-cover" fill src={image1} alt={'sw'} />
        </div>
    )
}