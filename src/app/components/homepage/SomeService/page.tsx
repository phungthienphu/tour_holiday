
import Image from 'next/image'
import star from '../../../../assets/icon/star.svg'
import resort from '../../../../assets/image/resort.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

export default function SomeService() {
    // lg:mx-0 md:mx-0 mx-[-25px]
    return (
            <div className='flex lg:w-[1280px] md:w-[944px] w-[375px] mx-auto flex-col gap-16 lg:p-20 md:p-10 px-8 py-16 bg-[#F4F5F6] lg:rounded-3xl md:rounded-3xl rounded-none mb-16'>
            <div className="title_gosomewhere flex flex-col gap-3 lg:w-[1120px] md:w-[864px] w-[311px]">
                <h1 className='font-bold lg:text-5xl md:text-5xl md:leading-[56px] text-[40px] leading-[48px] tracking-[-2%] lg:leading-[56px] text-[#23262F]'>Go somewhere</h1>
                <p className='font-normal lg:text-2xl md:text-2xl text-base tracking-[-1%] text-[#777E90]'>Let&apos;s go on an adventure</p>
            </div>
            <div className="content_service flex flex-col gap-12">
                <div className="nav_service flex flex-row justify-between">
                    <div className="left lg:flex md:flex hidden flex-row gap-4">
                        <button className='group flex flex-row text-sm leading-4 px-3 py-[6px] bg-none focus:bg-[#353945] items-center gap-2 rounded-[100px] focus:text-white cursor-pointer'>
                            <svg className='group-focus:fill-[#FCFCFD] group-active:fill-[#FCFCFD] fill-[#777E90]' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00016 13.3334C10.9457 13.3334 13.3335 10.9456 13.3335
                                    8.00004C13.3335 5.05452 10.9457 2.66671 8.00016 2.66671C5.05464 2.66671 2.66683 5.05452 2.66683 8.00004C2.66683 
                                    10.9456 5.05464 13.3334 8.00016 13.3334ZM8.00016 14.6667C11.6821 14.6667 14.6668 11.6819 14.6668 8.00004C14.6668
                                    4.31814 11.6821 1.33337 8.00016 1.33337C4.31826 1.33337 1.3335 4.31814 1.3335 8.00004C1.3335 11.6819 4.31826 14.6667
                                    8.00016 14.6667Z" fill="" />
                                <path d="M7.3335 4.66667C7.3335 4.29848 7.63197 4 8.00016 4C8.36835 4 8.66683 4.29848 8.66683 4.66667C9.7714
                                    4.66667 10.6668 5.5621 10.6668 6.66667C10.6668 7.03486 10.3684 7.33333 10.0002 7.33333C9.63197 7.33333 9.3335
                                    7.03486 9.3335 6.66667C9.3335 6.29848 9.03502 6 8.66683 6H7.16244C6.88872 6 6.66683 6.22189 6.66683 6.49561C6.66683
                                    6.70894 6.80334 6.89833 7.00571 6.96579L9.41625 7.7693C10.1631 8.01825 10.6668 8.71716 10.6668 9.50439C10.6668 10.5145
                                    9.84798 11.3333 8.83788 11.3333H8.66683C8.66683 11.7015 8.36835 12 8.00016 12C7.63197 12 7.3335 11.7015 7.3335 11.3333C6.22893
                                    11.3333 5.3335 10.4379 5.3335 9.33333C5.3335 8.96514 5.63197 8.66667 6.00016 8.66667C6.36835 8.66667 6.66683 8.96514 6.66683 
                                    9.33333C6.66683 9.70152 6.96531 10 7.3335 10H8.83788C9.1116 10 9.3335 9.77811 9.3335 9.50439C9.3335 9.29106 9.19699 9.10167 
                                    8.99461 9.03421L6.58408 8.2307C5.83724 7.98176 5.3335 7.28284 5.3335 6.49561C5.3335 5.48551 6.15234 4.66667 7.16244 4.66667H7.3335Z"
                                    fill="" />
                            </svg>
                            <p className='font-bold'>Featured</p>
                        </button>
                        <button className='group flex flex-row text-sm leading-4 px-3 py-[6px] bg-none focus:bg-[#353945] items-center gap-2 rounded-[100px] focus:text-white cursor-pointer'>
                            <svg className='group-focus:fill-[#FCFCFD] group-active:fill-[#FCFCFD] fill-[#777E90]' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00016 13.3334C10.9457 13.3334 13.3335 10.9456 13.3335
                                    8.00004C13.3335 5.05452 10.9457 2.66671 8.00016 2.66671C5.05464 2.66671 2.66683 5.05452 2.66683 8.00004C2.66683 
                                    10.9456 5.05464 13.3334 8.00016 13.3334ZM8.00016 14.6667C11.6821 14.6667 14.6668 11.6819 14.6668 8.00004C14.6668
                                    4.31814 11.6821 1.33337 8.00016 1.33337C4.31826 1.33337 1.3335 4.31814 1.3335 8.00004C1.3335 11.6819 4.31826 14.6667
                                    8.00016 14.6667Z" fill="" />
                                <path d="M7.3335 4.66667C7.3335 4.29848 7.63197 4 8.00016 4C8.36835 4 8.66683 4.29848 8.66683 4.66667C9.7714
                                    4.66667 10.6668 5.5621 10.6668 6.66667C10.6668 7.03486 10.3684 7.33333 10.0002 7.33333C9.63197 7.33333 9.3335
                                    7.03486 9.3335 6.66667C9.3335 6.29848 9.03502 6 8.66683 6H7.16244C6.88872 6 6.66683 6.22189 6.66683 6.49561C6.66683
                                    6.70894 6.80334 6.89833 7.00571 6.96579L9.41625 7.7693C10.1631 8.01825 10.6668 8.71716 10.6668 9.50439C10.6668 10.5145
                                    9.84798 11.3333 8.83788 11.3333H8.66683C8.66683 11.7015 8.36835 12 8.00016 12C7.63197 12 7.3335 11.7015 7.3335 11.3333C6.22893
                                    11.3333 5.3335 10.4379 5.3335 9.33333C5.3335 8.96514 5.63197 8.66667 6.00016 8.66667C6.36835 8.66667 6.66683 8.96514 6.66683 
                                    9.33333C6.66683 9.70152 6.96531 10 7.3335 10H8.83788C9.1116 10 9.3335 9.77811 9.3335 9.50439C9.3335 9.29106 9.19699 9.10167 
                                    8.99461 9.03421L6.58408 8.2307C5.83724 7.98176 5.3335 7.28284 5.3335 6.49561C5.3335 5.48551 6.15234 4.66667 7.16244 4.66667H7.3335Z"
                                    fill="" />
                            </svg>
                            <p className='font-bold'>Family-friendly</p>
                        </button>
                        <button className='group flex flex-row text-sm leading-4 px-3 py-[6px] bg-none focus:bg-[#353945] items-center gap-2 rounded-[100px] focus:text-white cursor-pointer'>
                            <svg className='group-focus:fill-[#FCFCFD] group-active:fill-[#FCFCFD] fill-[#777E90]' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00016 13.3334C10.9457 13.3334 13.3335 10.9456 13.3335
                                    8.00004C13.3335 5.05452 10.9457 2.66671 8.00016 2.66671C5.05464 2.66671 2.66683 5.05452 2.66683 8.00004C2.66683 
                                    10.9456 5.05464 13.3334 8.00016 13.3334ZM8.00016 14.6667C11.6821 14.6667 14.6668 11.6819 14.6668 8.00004C14.6668
                                    4.31814 11.6821 1.33337 8.00016 1.33337C4.31826 1.33337 1.3335 4.31814 1.3335 8.00004C1.3335 11.6819 4.31826 14.6667
                                    8.00016 14.6667Z" fill="" />
                                <path d="M7.3335 4.66667C7.3335 4.29848 7.63197 4 8.00016 4C8.36835 4 8.66683 4.29848 8.66683 4.66667C9.7714
                                    4.66667 10.6668 5.5621 10.6668 6.66667C10.6668 7.03486 10.3684 7.33333 10.0002 7.33333C9.63197 7.33333 9.3335
                                    7.03486 9.3335 6.66667C9.3335 6.29848 9.03502 6 8.66683 6H7.16244C6.88872 6 6.66683 6.22189 6.66683 6.49561C6.66683
                                    6.70894 6.80334 6.89833 7.00571 6.96579L9.41625 7.7693C10.1631 8.01825 10.6668 8.71716 10.6668 9.50439C10.6668 10.5145
                                    9.84798 11.3333 8.83788 11.3333H8.66683C8.66683 11.7015 8.36835 12 8.00016 12C7.63197 12 7.3335 11.7015 7.3335 11.3333C6.22893
                                    11.3333 5.3335 10.4379 5.3335 9.33333C5.3335 8.96514 5.63197 8.66667 6.00016 8.66667C6.36835 8.66667 6.66683 8.96514 6.66683 
                                    9.33333C6.66683 9.70152 6.96531 10 7.3335 10H8.83788C9.1116 10 9.3335 9.77811 9.3335 9.50439C9.3335 9.29106 9.19699 9.10167 
                                    8.99461 9.03421L6.58408 8.2307C5.83724 7.98176 5.3335 7.28284 5.3335 6.49561C5.3335 5.48551 6.15234 4.66667 7.16244 4.66667H7.3335Z"
                                    fill="" />
                            </svg>
                            <p className='font-bold'>On sale</p>
                        </button>
                        <button className='group flex flex-row text-sm leading-4 px-3 py-[6px] bg-none focus:bg-[#353945] items-center gap-2 rounded-[100px] focus:text-white cursor-pointer'>
                            <svg className='group-focus:fill-[#FCFCFD] group-active:fill-[#FCFCFD] fill-[#777E90]' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00016 13.3334C10.9457 13.3334 13.3335 10.9456 13.3335
                                    8.00004C13.3335 5.05452 10.9457 2.66671 8.00016 2.66671C5.05464 2.66671 2.66683 5.05452 2.66683 8.00004C2.66683 
                                    10.9456 5.05464 13.3334 8.00016 13.3334ZM8.00016 14.6667C11.6821 14.6667 14.6668 11.6819 14.6668 8.00004C14.6668
                                    4.31814 11.6821 1.33337 8.00016 1.33337C4.31826 1.33337 1.3335 4.31814 1.3335 8.00004C1.3335 11.6819 4.31826 14.6667
                                    8.00016 14.6667Z" fill="" />
                                <path d="M7.3335 4.66667C7.3335 4.29848 7.63197 4 8.00016 4C8.36835 4 8.66683 4.29848 8.66683 4.66667C9.7714
                                    4.66667 10.6668 5.5621 10.6668 6.66667C10.6668 7.03486 10.3684 7.33333 10.0002 7.33333C9.63197 7.33333 9.3335
                                    7.03486 9.3335 6.66667C9.3335 6.29848 9.03502 6 8.66683 6H7.16244C6.88872 6 6.66683 6.22189 6.66683 6.49561C6.66683
                                    6.70894 6.80334 6.89833 7.00571 6.96579L9.41625 7.7693C10.1631 8.01825 10.6668 8.71716 10.6668 9.50439C10.6668 10.5145
                                    9.84798 11.3333 8.83788 11.3333H8.66683C8.66683 11.7015 8.36835 12 8.00016 12C7.63197 12 7.3335 11.7015 7.3335 11.3333C6.22893
                                    11.3333 5.3335 10.4379 5.3335 9.33333C5.3335 8.96514 5.63197 8.66667 6.00016 8.66667C6.36835 8.66667 6.66683 8.96514 6.66683 
                                    9.33333C6.66683 9.70152 6.96531 10 7.3335 10H8.83788C9.1116 10 9.3335 9.77811 9.3335 9.50439C9.3335 9.29106 9.19699 9.10167 
                                    8.99461 9.03421L6.58408 8.2307C5.83724 7.98176 5.3335 7.28284 5.3335 6.49561C5.3335 5.48551 6.15234 4.66667 7.16244 4.66667H7.3335Z"
                                    fill="" />
                            </svg>
                            <p className='font-bold'>Sub nav</p>
                        </button>
                    </div>

                    <div className='right'>
                        <div className='right select_option flex flex-row p-2 pl-4 justify-between lg:w-64 md:w-64 w-[311px] rounded-2xl bg-white text-sm font-semibold'>
                            <select
                                className='appearance-none outline-none '
                            >
                                <option>
                                    Recently added
                                </option>
                            </select>
                            <i className='border-2 border-[#E6E8EC] rounded-full h-6 w-6 p-1 flex items-center justify-center gap-[10px]'>
                                <FontAwesomeIcon className="text-[#777E90] font-semibold " icon={faAngleDown} />
                            </i>
                        </div>
                    </div>

                </div>
                <div className="content_servie_list grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 lg:gap-8 md:gap-12 gap-4 grid-flow-row">
                    <Item />
                    <Item />
                    {/* <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item /> */}
                    <Item />
                </div>
                <div className='button_more mx-auto'>
                    <button className='text-[#23262F] text-sm leading-4 font-bold py-3 px-4 flex gap-3 rounded-[90px] border-2 border-[#E6E8EC] items-center justify-center'>View all</button>
                </div>

            </div>
        </div>
    )
}

function Item() {
    return (
        <div className='item lg:w-64 md:w-64 w-[311px] flex flex-col shadow-sm rounded-[24px]  mx-auto'>
            <div className='image'>
                <Image src={resort} className='rounded-t-2xl w-full' alt={'resort'} />
            </div>
            <div className='desc_item flex flex-col gap-4 p-5'>
                <div className='title_desc flex flex-row justify-between items-center'>
                    <div className='flex flex-col'>
                        <h2 className='font-medium text-base text-[#141416]'>
                            The grand resort
                        </h2>
                        <p className='text-xs font-normal text-[#353945]'>
                            Karineside
                        </p>
                    </div>
                    <span className='flex flex-col items-center justify-center border-2 p-2 pb-[6px] border-[#58C27D] gap-[6px] rounded'>
                        <span className='text-xs leading-3 font-bold'>$699</span>
                        <span className='text-xs leading-3 font-bold text-[#58C27D]'>$548</span>
                    </span>
                </div>
                <span className='h-[2px] w-full bg-[#E6E8EC]'>

                </span>
                <div className='date_score w-full text-xs leading-5 items-center flex flex-row justify-between'>
                    <div className='text-[#777E90]'>
                        <span>Tue, Jul 20</span>-<span>Fri, Jul 23</span>
                    </div>
                    <div className='flex flex-row gap-1 items-center'>
                        <i>
                            <Image src={star} alt={'star'} />
                        </i>
                        <span className='font-semibold'>4.9</span>
                    </div>
                </div>
            </div>
        </div>
    )
}