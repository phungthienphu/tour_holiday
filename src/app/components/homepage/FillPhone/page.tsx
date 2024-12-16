import Image from "next/image";
import group_img from '../../../../assets/image/Group_travel.png'
import icon_search from '../../../../assets/icon/arrow_search.svg'

export default function FillPhone() {
    return (
        <div className="">
            <div className="content_fill lg:w-[1120px] md:w-[865px] w-[311px] lg:gap-8 md:gap-0 gap-[48px] mx-auto flex lg:flex-row md:flex-row flex-col justify-between items-center">
                <div className="left lg:w-[448px] md:w-[448px] w-[311px] flex flex-col gap-10">
                    <div className="title_Fill flex flex-col gap-8">
                        <p className="font-bold text-xs leading-3 text-[#777E90] uppercase">supercharge your planning powers</p>
                        <h1 className="font-bold  lg:text-5xl md:text-xs text-[40px] leading-[48px] md:tracking-[-2%] tracking-[-1%] lg:tracking-[-2%] text-[#23262F]">Travel to make memories all around the world</h1>
                        <p className="font-normal text-base text-[#777E90]">Stacks is a production-ready library of stackable content blocks built in React Native.</p>
                    </div>
                    <div className="input w-[300px] h-[48px] relative">
                        <input type={'text'} className='w-full rounded-[90px] text-sm leading-[24px] px-[16px] outline-none py-[10px] border-2 border-[#E6E8EC]' placeholder="Enter your phone number">
                            {/* <div></div> */}
                        </input>
                        <div className=" bg-[#3B71FE] w-8 h-8 flex items-center justify-center rounded-full absolute right-2 top-1/2 translate-y-[-50%]">
                            <Image src={icon_search} className='p-2 w-[28px] h-[28px]' alt={'group'} />
                        </div>
                    </div>
                </div>

                <div className="right">
                    <div className="lg:w-[640px] lg:h-[676px] md:w-[573px] md:h-[606] w-[343px] h-[445px] rounded-[24px] overflow-hidden flex items-center justify-center">
                        <Image className="lg:w-[640px] lg:h-[676px] md:w-[573px] md:h-[606px] w-[500px] h-[550px] object-cover" src={group_img} alt={'group'} />
                    </div>
                    <div>
                        <i></i>
                    </div>
                </div>
            </div>
        </div>
    )
}