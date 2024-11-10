import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const ProductSwiper = () => {
  const ProductSwiperP = [
    {
        "imgLg": "https://dkstatics-public.digikala.com/digikala-admin-landing/13a8ecabdaa3471150c78e711016cb9f89d2910d_1728114825.jpg",
        "imgSm": "https://dkstatics-public.digikala.com/digikala-admin-landing/2bac49f3c75ba72742e58177c0615937f454cc99_1728739916.jpg",
        "id": 1
    },{
        "imgLg": "https://dkstatics-public.digikala.com/digikala-admin-landing/8a3644e9d31784bdec123c96aa6a7285d44f191f_1728739891.jpg",
        "imgSm": "https://dkstatics-public.digikala.com/digikala-admin-landing/ae7d07f5bfdba248c996ad1a090d07f683d1aab8_1728114858.jpg",
        "id": 2
    },
  ]
  return (
    <div className='w-full max-w-[1676px] p-4'>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {
            ProductSwiperP.map((elem)=>{
                return <SwiperSlide className='' key={elem.id}>
                    <div className='lg:block hidden'><img className='rounded-xl' src={elem.imgLg} alt="" /></div>
                    <div className='block lg:hidden'><img className='rounded-xl' src={elem.imgSm} alt="" /></div>
                    </SwiperSlide>
            })
        }
      </Swiper>
    </div>
  )
}

export default ProductSwiper