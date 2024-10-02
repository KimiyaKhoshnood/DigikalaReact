import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwipperImages from "./SwipperImages/SwipperImages";


const MainSwipper = () => {
    let MainSwiperImagesP = [
        {"image":"https://dkstatics-public.digikala.com/digikala-adservice-banners/5c68ad28e6244d3b5e394d259531d155efcb2011_1726951250.jpg?x-oss-process=image/quality,q_95", "id":1},
        {"image":"https://dkstatics-public.digikala.com/digikala-adservice-banners/5c68ad28e6244d3b5e394d259531d155efcb2011_1726951250.jpg?x-oss-process=image/quality,q_95", "id":2},
        {"image":"https://dkstatics-public.digikala.com/digikala-adservice-banners/5c68ad28e6244d3b5e394d259531d155efcb2011_1726951250.jpg?x-oss-process=image/quality,q_95", "id":3},
        {"image":"https://dkstatics-public.digikala.com/digikala-adservice-banners/5c68ad28e6244d3b5e394d259531d155efcb2011_1726951250.jpg?x-oss-process=image/quality,q_95", "id":4},
    ]
  return (
    <>
    <div className="flex justify-center">
      <div className="max-w-[1920px] xl:h-[400px] md:h-[300px] h-[268px] bg-yellow-300 w-full">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          slidesPerView={'auto'}
          spaceBetween={0}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper h-full"
        >
            {
                MainSwiperImagesP.map((elem)=>{
                    return (
                    <SwiperSlide className="flex h-full w-full bg-slate-600" key={elem.id}>
                        <SwipperImages image={elem.image}/>
                    </SwiperSlide>
                    )
                })
            }
        </Swiper>
      </div>
    </div>
    </>
  );
};

export default MainSwipper;
