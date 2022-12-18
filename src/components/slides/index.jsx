import SlidesWrapper from "./style"
import image1 from '../../assets/images/image 1.jpg'
import image2 from '../../assets/images/image 2.jpg'
import image3 from '../../assets/images/image 3.jpg'
import image4 from '../../assets/images/image 4.jpg'
import image5 from '../../assets/images/image 5.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation'

const Slides = () => {

    const images = [image1, image2, image3, image4, image5];

    return (
        <SlidesWrapper>
            <Swiper 
            modules={[Navigation]}
            spaceBetween={45}
            slidesPerView={1}
            initialSlide={1}
            width={285} 
            navigation
            >
            {images.map(image => <SwiperSlide key={image} ><img className="image" src={image} /></SwiperSlide>)}
            </Swiper>
        </SlidesWrapper>
    )
}

export default Slides