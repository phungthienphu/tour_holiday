import Image from "next/image";
import host from '../../../../assets/image/client.png'
import star from '../../../../assets/icon/star.svg'
import homeIcon from '../../../../assets/icon/home.svg'
import calendar from '../../../../assets/icon/calendar.svg'
import coin from '../../../../assets/icon/coinlight.svg'

export default function DescReserve() {
    return (
        <div className="flex flex-row gap-12 pt-16 lg:pb-[136px] md:pb-[136px] pb-16 lg:justify-between md:justify-between justify-center">
            <div className="left flex flex-col gap-12 lg:w-[624px] md:w-[438px] w-[311px]">
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-6">
                            <h2 className="font-bold text-[32px] leading-10 tracking-[-1%]">
                                Private room in house
                            </h2>
                            <div className="h-px w-full bg-[#E6E8EC]"></div>
                            <div className="flex flex-row gap-1 font-normal text-sm leading-6 text-[#777E90]">
                                <p>Hosted by</p>
                                <i>
                                    <Image src={host} className='h-6 w-6 rounded-full' alt='host' />
                                </i>
                                <p className="text-[#23262F]">
                                    Zoe Towne
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row text-sm leading-6 font-normal text-[#777E90] gap-4">
                            <div className="status_host flex flex-row items-center gap-2">
                                <i>
                                    <Image src={homeIcon} alt='home' />
                                </i>
                                <span>
                                    Superhost
                                </span>
                            </div>
                            <div className="address flex flex-row items-center gap-2">
                                <i>
                                    <Image src={homeIcon} alt='flag' />
                                </i>
                                <span>Queenstown</span>
                            </div>
                            <div className="address lg:flex md:flex hidden flex-row items-center gap-2">
                                <i>
                                    <Image src={homeIcon} alt='flag' />
                                </i>
                                <span>Queenstown</span>
                            </div>
                        </div>
                    </div>

                    <div className="desciption font-normal text-base leading-6 text-[#777E90]">
                        <p>
                            Described by Queenstown House  Garden magazine as having
                            'one of the best views we've ever seen'
                            you will love relaxing in this newly
                            built, architectural house sitting proudly on Queenstown Hill.<br /><br />
                            Enjoy breathtaking 180' views of Lake Wakatipu from your well
                            appointed  privately accessed bedroom with modern en suite and floor-to-ceiling
                            windows.<br /><br />Your private patio takes in the afternoon sun, letting you soak up
                            unparalleled lake and mountain views by day and the stars
                            city lights by night.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-8">
                    <div className="flex flex-row">
                        <h2 className="font-semibold text-[24px] leading-6 text-[#23262F]">
                            Amenities
                        </h2>
                    </div>
                    <div className="flex lg:flex-row md:flex-row flex-col lg:gap-[80px] md:gap-4 gap-4">
                        <div className="flex flex-col gap-6">
                            <span className="flex gap-4 text-base leading-6 font-medium text-[#777E90]">
                                <i>
                                    <Image src={calendar} alt={'location'} className='w-[24px] h[24px]' />
                                </i>
                                <p>Free wifi 24/7</p>
                            </span>
                            <span className="flex gap-4 text-base leading-6 font-medium text-[#777E90]">
                                <i>
                                    <Image src={calendar} alt={'location'} className='w-[24px] h[24px]' />
                                </i>
                                <p>Free wifi 24/7</p>
                            </span>
                            <span className="flex gap-4 text-base leading-6 font-medium text-[#777E90]">
                                <i>
                                    <Image src={calendar} alt={'location'} className='w-[24px] h[24px]' />
                                </i>
                                <p>Free wifi 24/7</p>
                            </span>
                            <span className="flex gap-4 text-base leading-6 font-medium text-[#777E90]">
                                <i>
                                    <Image src={calendar} alt={'location'} className='w-[24px] h[24px]' />
                                </i>
                                <p>Free wifi 24/7</p>
                            </span>
                        </div>
                        <div className="w-px h-full bg-[#E6E8EC]"></div>
                        <div className="flex flex-col gap-6">
                            <span className="flex gap-4 text-base leading-6 font-medium text-[#777E90]">
                                <i>
                                    <Image src={calendar} alt={'location'} className='w-[24px] h[24px]' />
                                </i>
                                <p>Free clean bathroom</p>
                            </span>
                            <span className="flex gap-4 text-base leading-6 font-medium text-[#777E90]">
                                <i>
                                    <Image src={calendar} alt={'location'} className='w-[24px] h[24px]' />
                                </i>
                                <p>Free clean bathroom</p>
                            </span>
                            <span className="flex gap-4 text-base leading-6 font-medium text-[#777E90]">
                                <i>
                                    <Image src={calendar} alt={'location'} className='w-[24px] h[24px]' />
                                </i>
                                <p>Free clean bathroom</p>
                            </span>
                            <span className="flex gap-4 text-base leading-6 font-medium text-[#777E90]">
                                <i>
                                    <Image src={calendar} alt={'location'} className='w-[24px] h[24px]' />
                                </i>
                                <p>Free clean bathroom</p>
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <button className="border-2 font-bold  h-[48px] items-center justify-center flex gap-3 border-[#E6E8EC] rounded-[90px] py-[16px] px-[24px]">
                        <span>More detail</span>

                    </button>
                </div>
            </div>




            <div className="right lg:w-[448px] md:w-[378px] lg:flex md:flex hidden flex-col p-8 gap-8 border-2 rounded-[24px] border-[#E6E8EC] h-max">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row gap-3 text-[32px] font-bold leading-10 tracking-[-1%] text-[#B1B5C3]">
                            <span className="text-[32px] line-through">
                                $119
                            </span>
                            <span className="flex flex-row gap-[9px]">
                                <span className="text-[#23262F]">
                                    $102
                                </span>
                                <span className="font-normal text-base text-[#777E90] flex items-end">
                                    /night
                                </span>
                            </span>
                        </div>

                        <div className="score flex flex-row items-center gap-2 text-[#777E90] font-normal text-sm leading-6">
                            <span className='flex flex-row items-center gap-2 '>
                                <span>
                                    <Image src={star} className='h-5 w-5' alt='star' />
                                </span>
                                <span className='text-sm leading-6 font-medium text-[#23262F]'>
                                    4.8
                                </span>
                            </span>
                            <span>(256 reviews)</span>
                        </div>

                    </div>
                    <div>
                        <i>
                            <Image src={host} className='h-16 w-16 rounded-full' alt='host' />
                        </i>
                    </div>
                </div>

                <div className="flex flex-col gap-2 bg-[#F4F5F6] rounded-[20px]">
                    <div className="flex flex-row gap-2 items-center p-2">
                        <div className='nav_checkin flex flex-1 flex-row min-h-14 gap-[12px] p-[12px]'>
                            <div className='icon flex h-[40px] items-center'>
                                <Image src={calendar} alt={'location'} className='w-[24px] h[24px]' />
                            </div>
                            <div className='nav_content flex flex-col justify-center min-h-14 tracking-wide'>
                                <h2 className='text-base font-semibold text-[#23262F]'>Check in</h2>
                                <p className='text-xs font-normal text-[#777E90]'>Add date</p>
                            </div>
                        </div>
                        <div className="w-px h-14 bg-[#E6E8EC]"></div>
                        <div className='nav_checkin flex flex-1 flex-row min-h-14 gap-[12px] p-[12px]'>
                            <div className='icon flex h-[40px] items-center'>

                                <Image src={calendar} alt={'location'} className='w-[24px] h[24px]' />
                            </div>
                            <div className='nav_content flex flex-col justify-center min-h-14 tracking-wide'>
                                <h2 className='text-base font-semibold text-[#23262F]'>Check in</h2>
                                <p className='text-xs font-normal text-[#777E90]'>Add date</p>
                            </div>
                        </div>
                    </div>
                    <div className=" flex flex-row p-2">
                        <div className='nav_checkin flex flex-1 flex-row min-h-14 gap-[12px] p-[12px]'>
                            <div className='icon flex h-[40px] items-center'>

                                <Image src={calendar} alt={'location'} className='w-[24px] h[24px]' />
                            </div>
                            <div className='nav_content flex flex-col justify-center min-h-14 tracking-wide'>
                                <h2 className='text-base font-semibold text-[#23262F]'>Check in</h2>
                                <p className='text-xs font-normal text-[#777E90]'>Add date</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex gap-2  h-[48px] items-center">
                    <button className="border-2 w-1/3 h-[48px] items-center justify-center flex gap-3 border-[#E6E8EC] rounded-[90px] py-[16px] px-[24px]">
                        <span>Save</span>
                        <i>
                            <Image src={calendar} alt={'location'} className='w-[16px] h[16px]' />
                        </i>
                    </button>

                    <button className="border-2 w-2/3 h-[48px] flex items-center justify-center text-[#FCFCFD] bg-[#3B71FE] gap-3 border-[#E6E8EC] rounded-[90px] py-[16px] px-[24px]">
                        <span>Reserve</span>
                        <i>
                            <Image src={coin} alt={'location'} className='w-[16px] h[16px]' />
                        </i>
                    </button>
                </div>
                <div className="flex gap-1 flex-col">
                    <div className="flex justify-between py-2 px-3 flex-1">
                        <div className="flex flex-row gap-2 text-sm leading-6 font-normal text-[#777E90]">
                            <span>
                                $119
                            </span>
                            <span>
                                x
                            </span>
                            <span>
                                7 nights
                            </span>
                        </div>
                        <div>
                            <span>$833</span>
                        </div>
                    </div>
                    <div className="flex justify-between py-2 px-3 flex-1">
                        <div className="flex flex-row gap-2 text-sm leading-6 font-normal text-[#777E90]">
                            <span>
                                $119
                            </span>
                            <span>
                                x
                            </span>
                            <span>
                                7 nights
                            </span>
                        </div>
                        <div>
                            <span>$833</span>
                        </div>
                    </div>
                    <div className="flex justify-between py-2 px-3 flex-1">
                        <div className="flex flex-row gap-2 text-sm leading-6 font-normal text-[#777E90]">
                            <span>
                                $119
                            </span>
                            <span>
                                x
                            </span>
                            <span>
                                7 nights
                            </span>
                        </div>
                        <div>
                            <span>$833</span>
                        </div>
                    </div>
                    <div className="flex justify-between py-2 px-3 flex-1 bg-[#F4F5F6] text-[#23262F]">
                        <div className="flex flex-row gap-2 text-sm leading-6 font-normal ">
                            <span>
                                Total
                            </span>
                        </div>
                        <div>
                            <span>$833</span>
                        </div>
                    </div>


                </div>
                <div className="flex flex-row items-center gap-2 justify-center">
                    <i>
                        <Image src={calendar} alt={'location'} className='w-[12px] h[12px]' />
                    </i>
                    <p className="text-[#777E90] text-xs">Report this property</p>
                </div>
            </div>
        </div>
    )
}