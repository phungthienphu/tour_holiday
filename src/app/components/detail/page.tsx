
import BrowseKind from './BrowseKind/page'
import DescReserve from './descAndReserve/page'
import Feedback from './feedback/page'
import Fill from './Fill/page'
import HeaderSlider from './HeaderandSlider/page'
import SamePlace from './SamePlace/page'


export default function DetailPr() {
    return (
        <div className='lg:w-[1120px] md:w-[864px] w-[343px] mx-auto'>
            <HeaderSlider />
            <DescReserve />
            <Feedback />
            <BrowseKind />
            <Fill />
            <SamePlace />

        </div>
    )
}