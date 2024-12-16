import Image from 'next/image'
import logo from '../../assets/image/Mask_Group.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        <div className="relative left-0 right-0 bottom-0  lg:h-[273px] md:h-[273px] h-[521px] bg-white z-5 lg:px-[160px] md:px-[80px] lg:pt-[80px] md:pt-[80px] pt-[64px] px-[32px] gap-[10px]">
            <div className="container_footer flex flex-col justify-between h-full gap-[48px]">
                <div className='top flex lg:flex-row md:flex-row flex-col justify-between lg:gap-[32px] md:gap-0 gap-[48px] text-[#777E90] text-sm leading-[16px] font-bold'>
                    <div className='font-bold flex flex-row h-max  items-center gap-[8px] text-[24px] leading-[24px] text-[#23262F]'>
                        <i>
                            <Image width={32} height={32} src={logo} alt='log0' />
                        </i>
                        <span>
                            Logo
                        </span>
                    </div>
                    <div className='flex lg:flex-col md:flex-col flex-row lg:justify-normal md:justify-normal justify-between gap-[32px]'>
                        <a href="" className='w-[128px]'>
                            About
                        </a>
                        <a href="" className='w-[128px]'>
                            Projects
                        </a>
                    </div>
                    <div className='flex lg:flex-col md:flex-col flex-row lg:justify-normal md:justify-normal justify-between gap-[32px]'><a href="" className='w-[128px]'>
                        What We Do
                    </a>
                        <a href="" className='w-[128px]'>
                            Press
                        </a>
                    </div>
                    <div className='flex lg:flex-col md:flex-col flex-row lg:justify-normal md:justify-normal justify-between gap-[32px]'><a href="" className='w-[128px]'>
                        Jobs
                    </a>
                        <a href="" className='w-[128px]'>
                            Download
                        </a>
                    </div>
                    <div className='flex flex-col gap-[16px] lg:w-[255px] md:w-[255px] w-full'>
                        <h2 className='text-[#23262F]'>Join our community</h2>
                        <div className=' items-center h-[48px] rounded-[90px] border-2 border-[#E6E8EC] flex flex-row'>
                            <input placeholder='Enter your email' className='flex-1 h-[44px] font-normal leading-[24px] outline-none pl-4 rounded-[90px]' type="email" />
                            <i className='rounded-full w-[32px] h-[32px] bg-[#3B71FE] mr-[8px] flex items-center justify-center cursor-pointer'>
                                <FontAwesomeIcon className='text-[#FCFCFD] w-[24px] h-[14px]' icon={faArrowRight} />
                            </i>
                        </div>
                    </div>
                </div>
                <div className='bot text-xs text-[#23262F] leading-[20px] pb-[24px] gap-[24px] flex flex-col w-full'>
                    <div className='h-[2px] bg-[#F4F5F6] w-full'></div>
                    <p>Copyright © 2021 UI8 LLC. All rights reserved</p>
                </div>
            </div>
        </div>
    )
}