import Image from 'next/image'
import image1 from '../../../assets/image/detail/home_leak.png'


export default function ModalImage(image: string) {
    return (
        <div className=' z-50 fixed left-0 right-0 bottom-0 top-0 bg-black bg-opacity-75 flex items-center justify-center '>
            <div className=' z-50'>
                <Image src={image1} objectFit='contain' alt='image'></Image>
            </div>
        </div>
    )
}