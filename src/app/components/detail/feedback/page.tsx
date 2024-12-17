import Image from "next/image";
import host from '../../../../assets/image/client.png'
import star from '../../../../assets/icon/star.svg'
import homeIcon from '../../../../assets/icon/home.svg'
import upLoad from '../../../../assets/icon/uploadIcon.svg'
import load from '../../../../assets/icon/load.png'
import coinlight from '../../../../assets/icon/coinlight.svg'
import IconChat from '../../../../assets/icon/iconChat.svg'

export default function Feedback() {
    return (
        <div className="flex lg:flex-row md:flex-row flex-col-reverse gap-12 py-16">
            <div className="flex flex-col gap-8 p-8 lg:w-[343px] md:w-[343px] w-[311px] h-max lg:mx-0 md:mx-0 mx-auto rounded-[20px] border-2 border-[#E6E8EC]">
                <div className="flex flex-row gap-[22px]">
                    <div>
                        <Image src={host} className='h-16 w-16 rounded-full' alt='host' />
                    </div>
                    <div className="flex flex-col gap-2 text-[#23262F]">
                        <h1 className="font-bold leading-10 text-2xl">
                            Zoe towne
                        </h1>
                        <div className="score flex flex-row items-center gap-2 text-[#777E90] font-normal text-sm leading-6">
                            <span className='flex flex-row items-center gap-2 text-xs font-semibold leading-6'>
                                <span>
                                    <Image src={star} className='h-5 w-5' alt='star' />
                                </span>
                                <span className='  text-[#23262F]'>
                                    4.8
                                </span>
                            </span>
                            <span className="font-medium text-[#777E90]">(256 reviews)</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row text-sm leading-6 font-normal text-[#777E90] justify-center gap-2 p-2 rounded-[20px] bg-[#F4F5F6]">
                    <div className="flex gap-4 flex-row">
                        <div className=" flex flex-row items-center gap-2">
                            <i>
                                <Image src={homeIcon} alt='home' />
                            </i>
                            <span>
                                Superhost
                            </span>
                        </div>
                        <div className=" flex flex-row items-center gap-2">
                            <i>
                                <Image src={homeIcon} alt='flag' />
                            </i>
                            <span>256 reviews</span>
                        </div>
                    </div>
                </div>

                <div className="text-center text-sm leading-6 text-[#777E90]">
                    <p>
                        Described by Queenstown House {'&'} Garden magazine as having &apos;one of the best views we&apos;ve ever seen&apos; you will love relaxing in this newly built
                    </p>
                </div>
                <div className="flex flex-row gap-2 mx-auto">
                    <i>
                        <Image src={homeIcon} className='h-4 w-4' alt='flag' />
                    </i>
                    <a className="font-bold text-[#23262F] text-sm leading-4">
                        https://ui8.net
                    </a>
                </div>
                <div className="flex gap-2 mx-auto">
                    <div>
                        <button className="border-2 w-[89px] h-[40px] items-center justify-center flex gap-3 bg-[#23262F] text-[#FCFCFD] rounded-[90px] py-[12px] px-[16px]">
                            <span className="text-sm leading-4 ">Contact</span>
                        </button>
                    </div>

                    <div className='p-[10px] h-10 w-10 rounded-[40px] flex gap-[10px] border-2 border-[#E6E8EC] items-center justify-center'>
                        <Image className='h-5 w-5' src={upLoad} alt={'icon'} />
                    </div>

                    <div className='p-[10px] h-10 w-10 rounded-[40px] flex gap-[10px] border-2 border-[#E6E8EC] items-center justify-center'>
                        <Image className='h-5 w-5' src={upLoad} alt={'icon'} />
                    </div>
                </div>
                <div className="flex flex-row gap-6 mx-auto">
                    <i>
                        <Image src={homeIcon} className='h-5 w-5' alt='flag' />
                    </i><i>
                        <Image src={homeIcon} className='h-5 w-5' alt='flag' />
                    </i><i>
                        <Image src={homeIcon} className='h-5 w-5' alt='flag' />
                    </i>
                </div>
                <div className="w-[200px] h-px bg-[#E6E8EC] mx-auto">
                </div>
                <div className=" font-normal text-xs leading-5 text-center text-[#777E90]">
                    <p>Member since Mar 15, 2017</p>
                </div>
                <div className="flex flex-row gap-2 font-normal text-xs leading-5 justify-center text-[#777E90]">
                    <i className="">
                        <Image src={homeIcon} alt='flag' />
                    </i>
                    <a className="font-bold ">
                        Report this host
                    </a>
                </div>
            </div>


            <div className="flex flex-col pt-10 gap-10 lg">
                <div className="flex flex-col gap-2">
                    <h1 className="font-semibold text-2xl ">
                        Add a review
                    </h1>
                    <span className="flex lg:flex-row md:flex-col flex-col justify-between lg:gap-[251px] md:gap-2">
                        <p className="flex lg:gap-1 md:gap-1 gap-2 text-sm leading-6 font-normal text-[#777E90]">
                            Be the first to review
                            <span className="text-[#23262F] lg:block md:block hidden">Spectacular views of Queenstown</span>
                            <span className="text-[#23262F] lg:hidden md:hidden block">All Access Pass</span>
                        </p>
                        <span className="flex flex-row gap-1">
                            <span>
                                <Image src={star} className='h-6 w-6' alt='star' />
                            </span>
                            <span>
                                <Image src={star} className='h-6 w-6' alt='star' />
                            </span>
                            <span>
                                <Image src={star} className='h-6 w-6' alt='star' />
                            </span>
                            <span>
                                <Image src={star} className='h-6 w-6' alt='star' />
                            </span>
                            <span>
                                <Image src={star} className='h-6 w-6' alt='star' />
                            </span>
                        </span>
                    </span>
                </div>
                <div className="flex flex-row justify-between items-center border-2 rounded-[16px] border-[#E6E8EC] font-base relative overflow-hidden">
                    <input placeholder="Share your thoughts" className="py-5 px-5 w-full pl-6 outline-none ">
                    </input>
                    <div className="flex flex-row gap-4 absolute right-[10px] items-center">
                        <i>
                            <Image src={IconChat} className='h-6 w-6' alt='home' />
                        </i>
                        <button className="flex flex-row px-4 py-3 gap-3 w-[108px] h-[40px] items-center rounded-[90px] bg-[#3B71FE] text-white">
                            <p className="font-bold text-sm">
                                Post it!
                            </p>
                            <i>
                                <Image src={coinlight} className='h-4 w-4' alt='home' />
                            </i>
                        </button>
                    </div>
                </div>
                <div className="flex gap-8 flex-col">
                    <div className="lg:flex md:flex hidden flex-row justify-between">
                        <h1 className="font-semibold text-2xl text-[#23262F]">
                            3 comments
                        </h1>
                        <div className="flex flex-row px-2 py-2 pl-4 justify-between rounded-xl w-[160px] border-2 border-[#E6E8EC]">
                            <select className="appearance-none outline-none min-w-max">
                                <option value="">
                                    Newest
                                </option>
                                <option value="">
                                    Newest
                                </option>
                            </select>
                            <i className="flex gap-[10px] p-1 border-2 rounded-[100px] border-[#E6E8EC]">
                                <Image src={homeIcon} className='' alt='home' />
                            </i>
                        </div>
                    </div>

                    <Item />
                    <Item />
                    <Item />



                    <button className="border-2 mx-auto h-[48px] flex items-center justify-center text-[#23262F]  gap-3 border-[#E6E8EC] rounded-[90px] py-[16px] px-[24px]">
                        <i>
                            <Image src={load} alt={'location'} className='w-[16px] h[16px]' />
                        </i>
                        <span>Loading comment</span>

                    </button>

                </div>
            </div>
        </div>
    )
}

function Item() {
    return (
        <div className="flex flex-row gap-[20px] pb-[27px] border-b-2 border-[#E6E8EC]">
            <Image src={host} className='h-12 w-12 rounded-full' alt='host' />
            <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row gap-1 text-sm font-medium leading-6 text-[#141416]">
                            <p>Myrtie</p>
                            <p>Runolfsson</p>
                        </div>
                        <span className="flex flex-row gap-0.5">
                            <span>
                                <Image src={star} className='h-4 w-4' alt='star' />
                            </span>
                            <span>
                                <Image src={star} className='h-4 w-4' alt='star' />
                            </span>
                            <span>
                                <Image src={star} className='h-4 w-4' alt='star' />
                            </span>
                            <span>
                                <Image src={star} className='h-4 w-4' alt='star' />
                            </span>
                            <span>
                                <Image src={star} className='h-4 w-4' alt='star' />
                            </span>
                        </span>

                    </div>
                    <div className="font-normal text-sm leading-5 text-[#353945]">
                        <p>
                            We had the most spectacular view. Unfortunately it was very hot in the room from 2-830 pm due to no air conditioning and no shade.
                        </p>
                    </div>
                </div>
                <div className="flex flex-row gap-4 text-xs leading-5">
                    <span className=" font-normal text-[#777E90]">
                        about 1 hour ago
                    </span>
                    <span className="text-[#23262F] cursor-pointer">
                        Like
                    </span>
                    <span className="text-[#23262F] cursor-pointer">
                        Reply
                    </span>
                </div>
            </div>
        </div>
    )
}