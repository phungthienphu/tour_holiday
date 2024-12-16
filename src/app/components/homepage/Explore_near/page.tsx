import Image from "next/image";
import boat from '../../../../assets/image/boat.png'

export default function PlaceNear() {
    return (
        <div className="lg:w-[1280px] md:w-[944px] w-[375px] mx-auto bg-[#F4F5F6] mt-5">
            <div className="lg:px-[80px] lg:py-[112px] md:px-[40px] md:py-[80px] bg-[#F4F5F6]  px-[32px] py-[64px] flex flex-col lg:gap-[10px] md:gap-[10px] gap-[40px]">
                <div className="title_advice flex flex-col items-center gap-3 lg:w-[544px] md:w-[544px] w-[311px] mx-auto mb-[60px]">
                    <h1 className="font-bold lg:text-5xl md:text-5xl text-[40px] tracking-[-2%] text-[#23262F] leading-[56px]">Explore nearby</h1>
                    <p className="font-normal lg:text-[24px] md:text-[24px] text-base tracking-[-1%] text-[#777E90] ">10,789 beautiful places to go</p>
                </div>
                <div>
                    <div className="flex gap-[50px] lg:flex-wrap md:flex-wrap flex-row lg:overflow-x-auto md:overflow-x-auto overflow-x-scroll justify-center">
                        <ItemPlace />
                        <ItemPlace />
                        <ItemPlace />
                        <ItemPlace />
                        <ItemPlace />
                        <ItemPlace />
                        <ItemPlace />
                        <ItemPlace />
                        <ItemPlace />
                    </div>
                </div>
            </div>
        </div>
    )
}

function ItemPlace() {
    return (
        <div className="p-2 pb-10 bg-[#FCFCFD]  flex flex-col gap-6 rounded-[18px] items-center lg:w-[204px] md:w-[204px] w-[220px]">
            <div className="flex flex-row w-[204px] text-start">
                <span className="px-3 py-2 leading-3 text-xs bg-[#F4F5F6] flex gap-[10px] rounded-[32px] font-bold text-[#777E90]">
                    1480
                </span>
            </div>
            {/* 
             
            */}
            <div>
                <Image className="w-[80px] h-[80px] rounded-full" src={boat} alt='box1' />
            </div>
            <div className="flex flex-col gap-1 items-center w-[128px]">
                <h2 className="text-base font-medium">Thompsonbury</h2>
                <p className="text-xs leading-5 text-[#777E90] font-normal ">15 minutes drive</p>
            </div>
        </div>
    )
}

