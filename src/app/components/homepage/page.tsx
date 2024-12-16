import bgHome from '../../../assets/image/slide_homepage.png'
import Image from 'next/image'
import location from '../../../assets/icon/location.svg'
import calendar from '../../../assets/icon/calendar.svg'
import user from '../../../assets/icon/user.svg'
import search from '../../../assets/icon/search.svg'
import Adventure from './adventure/page'
import Recommend from './recommend/page'
import Advice from './how/page'
import SomeWhere from './someplace/page'
import SomeService from './SomeService/page'
import FillPhone from './FillPhone/page'
import Property from './property_type/page'
import PlaceNear from './Explore_near/page'
import FindBy from './findBy/page'
import BookNow from './Book/page'
import Category from './category/page'
import Link from 'next/link'


export default function HomePage() {
    // lg:w-full md:w-[944px] w-[343px]
    return (
        <div className='flex w-full flex-col gap-8'>
            <div className='slider lg:w-[1280px] md:w-[944px] w-[343px] h-[936px] max-sm:h-[800px] relative mx-auto'>
                <div className='lg:top-0 md:top-0 top-[222px] lg:text-start md:text-start text-center lg:h-[776px] md:h-[776px] h-[600px] lg:w-[1280px] md:w-[944px] w-[343px] bg-no-repeat bg-cover lg:bg-center md:bg-center bg-right-custom lg:bg-100 md:bg-100   lg:rounded-[24px] md:rounded-[24px] rounded-b-3xl relative ' style={{ backgroundImage: `url(${bgHome.src})` }}>
                    <div className='start_find absolute lg:top-[145px] md:top-[145px] top-[-200px] lg:left-[80px] md:left-[80px] h-[240px] flex flex-col gap-[24px] lg:w-[500px] md:w-[500px] w-[331px] '>
                        <div className='flex flex-col lg:gap-[24px] gap-4 text-[#23262F]'>
                            <h1 className='lg:text-8xl md:text-[64px] text-[64px] leading-[64px] font-bold tracking-[-2px] '>
                                Air, sleep, dream
                            </h1>
                            <p className='lg:text-2xl md:text-[16px] text-[16px] font-normal tracking-[-2%]'>
                                Find and book a great experience
                            </p>
                        </div>
                        <div>
                            <button className=' w-[184px] h-[48px] bg-[#3B71FE] text-[#FCFCFD] rounded-[90px] font-bold text-base tracking-normal'>
                                <Link href={'/components/detail'}>Start your search</Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='vehicle_select lg:w-[1120px] md:w-[864px] w-[335px] lg:p-[40px] md:p-[40px] p-5  absolute lg:top-[601px] md:top-[601px] top-[643px] lg:h-[255px] md:h-[255px] h-[175px] left-[50%] translate-x-[-50%] rounded-[24px] bg-gradient-to-r from-[#FCFCFD] to-[#FCFCFDD4] shadow-xl'>
                    <div className='navigation_vehicle relative'>
                        <ul className='nav flex flex-row lg:gap-12 md:gap-12 gap-7 font-bold text-sm text-[#777E90] pb-[30px]'>
                            <button className='focus:text-[#23262F] cursor-pointer tracking-wide nav_after'>Stays</button>
                            <button className='focus:text-[#23262F] cursor-pointer tracking-wide nav_after' >Flights</button>
                            <button className='focus:text-[#23262F] cursor-pointer tracking-wide nav_after'>Cars</button>
                            <button className='focus:text-[#23262F] cursor-pointer tracking-wide nav_after'>Things to do</button>
                        </ul>
                        <span className='absolute h-px w-full bg-[#E6E8EC] bottom-0 left-0 right-0'></span>
                    </div>
                    <div className='content_vehicle pt-[20px] flex flex-row justify-between items-center'>
                        <div className='nav_location flex flex-row min-h-14 gap-[12px] p-0 md:p-5 lg:p-5 lg:pr-10 '>
                            <div className='icon flex h-[40px] items-center'>
                                <Image src={location} alt={'location'} className='w-[24px] h[24px]' />
                            </div>
                            <div className='nav_content flex flex-col justify-center min-h-14 tracking-wide'>
                                <h2 className='text-2xl font-semibold text-[#23262F]'>Location</h2>
                                <p className='text-base font-normal text-[#777E90]'>Where are you going?</p>
                            </div>
                        </div>


                        <div className='nav_checkin lg:flex hidden flex-row min-h-14 gap-[12px] p-5'>
                            <div className='icon flex h-[40px] items-center'>

                                <Image src={calendar} alt={'location'} className='w-[24px] h[24px]' />
                            </div>
                            <div className='nav_content flex flex-col justify-center min-h-14 tracking-wide'>
                                <h2 className='text-2xl font-semibold text-[#23262F]'>Check in</h2>
                                <p className='text-base font-normal text-[#777E90]'>Add date</p>
                            </div>
                        </div>

                        <div className='nav_checkout lg:flex hidden flex-row min-h-14 gap-[12px] p-5'>
                            <div className='icon flex h-[40px] items-center'>

                                <Image src={calendar} alt={'location'} className='w-[24px] h[24px]' />
                            </div>
                            <div className='nav_content flex flex-col justify-center min-h-14 tracking-wide'>
                                <h2 className='text-2xl font-semibold text-[#23262F]'>Check out</h2>
                                <p className='text-base font-normal text-[#777E90]'>Add date</p>
                            </div>
                        </div>
                        <div className='nav_date lg:hidden md:flex hidden flex-row min-h-14 gap-[12px] p-5'>
                            <div className='icon flex h-[40px] items-center'>

                                <Image src={calendar} alt={'calendar'} className='w-[24px] h[24px]' />
                            </div>
                            <div className='nav_content flex flex-col justify-center min-h-14 tracking-wide'>
                                <h2 className='text-2xl font-semibold text-[#23262F]'>Date</h2>
                                <p className='text-base font-normal text-[#777E90]'>Add date</p>
                            </div>
                        </div>

                        <div className='nav_travelers lg:flex md:flex hidden flex-row min-h-14 gap-[12px] p-5'>
                            <div className='icon flex h-[40px] items-center'>

                                <Image src={user} alt={'location'} className='w-[24px] h[24px]' />
                            </div>
                            <div className='nav_content flex flex-col justify-center min-h-14 tracking-wide'>
                                <h2 className='text-2xl font-semibold text-[#23262F]'>Travelers</h2>
                                <p className='text-base font-normal text-[#777E90]'>Add guests</p>
                            </div>
                        </div>
                        <div className='nav_search_guests h-16 w-16 bg-[#3B71FE] rounded-full flex items-center justify-center'>
                            <Image src={search} alt={'location'} className='w-[24px] h[24px]' />
                        </div>
                    </div>
                </div>
            </div>
            <Adventure />
            <Recommend />
            <Advice />
            <SomeWhere />
            <SomeService />
            <FillPhone />
            <Property />
            <PlaceNear />
            <FindBy />
            <BookNow/>
            <Category/> 
            <div className='browse_by_vategory'></div>
        </div>
    )
}