import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const ProductSwiper = () => {
  const ProductSwiperP = [
    {
        "img": "https://dkstatics-public.digikala.com/digikala-admin-landing/13a8ecabdaa3471150c78e711016cb9f89d2910d_1728114825.jpg",
        "id": 1
    },{
        "img": "https://dkstatics-public.digikala.com/digikala-admin-landing/8a3644e9d31784bdec123c96aa6a7285d44f191f_1728739891.jpg",
        "id": 1
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
                    <div><img className='rounded-xl' src={elem.img} alt="" /></div>
                    </SwiperSlide>
            })
        }
      </Swiper>
    </div>
  )
}

export default ProductSwiper