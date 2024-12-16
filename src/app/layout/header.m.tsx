import Image from 'next/image'
import logo from '../../assets/image/Mask_Group.png'
import avatar from '../../assets/image/avatar.png'
import Global from '../../assets/icon/Line.svg'
import Bell from '../../assets/icon/bell.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    return (
        <div className="fixed left-0 right-0 top-0 lg:h-[88px] md:h-[88px] h-[112px] bg-white z-50 ">
            <div className="container_header h-full lg:w-[1120px] md:w-[864px] w-[311px] flex flex-row items-center mx-auto justify-between">
                <div className="container_header_left flex flex-row flex-1">
                    <div className='flex flex-row w-1/2 justify-between'>
                        <div className="header_logo flex flex-1  flex-row items-center relative ">
                            <div className=" h-9 w-9 block mr-2">
                                <Image src={logo} alt="logo" />
                            </div>
                            <div className='font-bold  text-[27px] tracking-wide' >fleet</div>
                        </div>
                        <div className='h-full w-px bg-[#E6E8EC] ml-5'>
                        </div>
                        <div className="flex-1 header_select lg:flex md:flex hidden items-center justify-end text-[#777E90] gap-4 font-semibold">
                            <select className='appearance-none text-sm outline-none'>
                                <option>
                                    Travelers
                                </option>
                                <option>
                                    Sông đà
                                </option>
                            </select>
                            <div className='h-3 w-3'>
                                <FontAwesomeIcon className="text-[#777E90] font-semibold" icon={faAngleDown} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container_header_right flex flex-row flex-1 lg:justify-evenly md:justify-end md:gap-5 gap-5 items-center leading-lineHeight17px px-3 lg:pr-3 md:pr-3 pr-0 py-4 text-[14px] font-semibold text-[#777E90]">
                    <div className="header_support lg:block md:hidden hidden">Support</div>
                    <div className="header_language lg:flex md:hidden hidden flex-row items-center justify-around gap-2">
                        {/* <i className='block w-[13.3px] h-[13.3px]'><FontAwesomeIcon icon={faGlobe} /></i> */}
                        <Image className='' src={Global} alt={'Global'} />
                        <span>Language</span>
                    </div>
                    <div className="header_property px-3 h-[40px] lg:flex md:flex hidden text-[#23262F] items-center border-2 rounded-[90px]"><span>List your property</span></div>
                    <div className="header_notification relative h-[40px] w-[40px] flex items-center justify-center">
                        <Image className='' src={Bell} alt={'Bell'} />
                        <span className='absolute right-0 top-0 w-[12px] h-[12px] bg-[#58C27D] rounded-full'></span>
                    </div>
                    <div className="header_avatar">
                        <Image src={avatar} alt={'avatar'} />
                    </div>
                    <div className='lg:hidden md:hidden'>
                        menu
                    </div>
                </div>
            </div>
        </div>
    )
}