import Image from 'next/image'
import frameVId from '../../../../assets/image/Frame_book.png'


export default function BookNow() {
    return (
        <div className='flex flex-col gap-[80px] items-center lg:w-[1024px] md:w-[994px] w-[295px] mx-auto'>
            <div className="title_advice flex w-full lg:flex-row md:flex-row flex-col justify-between lg:gap-3 md:gap-3 gap-8 ">
                <div className='flex flex-col gap-4  '>
                    <p className='font-bold text-xs text-[#777E90] leading-3 uppercase'>fleet travel ui kit</p>
                    <h1 className='font-bold lg:text-5xl md:text-5xl text-[40px] leading-[48px] lg:w-[548px] md:w-[548px] w-[295px] lg:leading-[56px] tracking-[-2%] text-[#23262F] '>Book a ticket and just leave</h1>
                </div>
                <div className='flex justify-end items-end w-full'>
                    <button className='py-4 lg:w-max lg:h-max md:w-max md:h-max w-full justify-center px-6 flex gap-3 bg-[#3B71FE] text-base leading-4 font-bold text-[#FCFCFD] rounded-[90px]'>Book now</button>
                </div>
            </div>
            <div>
                <Image className="rounded-2xl lg:max-w-screen-xl md:w-[994px] lg:h-[700px] md:h-[480px] h-[448px] w-[295px] object-cover" src={frameVId} alt='frameVid' />
            </div>

        </div>
    )
}