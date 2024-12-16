import Image from 'next/image'
import box from '../../../../assets/image/box/box.png'
import box1 from '../../../../assets/image/box/box1.png'

export default function Advice() {
    return (
        <div className="lg:w-[1024px] md:w-[864px] w-[311px] mx-auto">
            <div className="title_advice flex flex-col items-center gap-3 lg:w-[544px] md:w-[544px] w-[311px] mx-auto mb-[60px]">
                <h1 className="font-bold text-5xl tracking-[-2%] text-[#23262F] leading-[56px]">How it work</h1>
                <p className="font-normal text-[24px] tracking-[-1%] text-[#777E90] ">Keep calm {'&'} travel on</p>
            </div>
            <div className="list_advice  flex lg:flex-row md:flex-row flex-col items-center justify-between mb-[140px]">
                <div className="item flex flex-col w-64 gap-[32px]">
                    <div className="avt">
                        <Image className=" w-64 h-[230px] rounded-[80px]" src={box1} alt='box1' />
                    </div>
                    <div className="title_advice flex flex-col gap-2 justify-center items-center">
                        <h2 className='text-[#23262F] font-semibold text-2xl'>Book {'&'} relax</h2>
                        <p className='text-[#777E90] font-normal text-sm text-center flex mx-2 gap-2 leading-6'>We realize ideas from simple to complex,
                            everything becomes easy to use.</p>
                    </div>
                </div>

                <div className="item w-64 flex flex-col gap-[32px]">
                    <div className="avt">
                        <Image className=" w-64 h-[230px] rounded-[80px]" src={box} alt='box1' />
                    </div>
                    <div className="title_advice flex flex-col gap-2 justify-center items-center">
                        <h2 className='text-[#23262F] font-semibold text-2xl'>Book {'&'} relax</h2>
                        <p className='text-[#777E90] font-normal text-sm text-center flex mx-2 gap-2 leading-6'>We realize ideas from simple to complex,
                            everything becomes easy to use.</p>
                    </div>
                </div>

                <div className="item flex flex-col w-64 gap-[32px]">
                    <div className="avt">
                        <Image className=" w-64 h-[230px] rounded-[80px]" src={box1} alt='box1' />
                    </div>
                    <div className="title_advice flex flex-col gap-2 justify-center items-center">
                        <h2 className='text-[#23262F] font-semibold text-2xl'>Book {'&'} relax</h2>
                        <p className='text-[#777E90] font-normal text-sm text-center flex mx-2 gap-2 leading-6'>We realize ideas from simple to complex,
                            everything becomes easy to use.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}