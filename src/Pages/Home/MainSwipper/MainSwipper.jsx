import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwipperImages from "./SwipperImages/SwipperImages";


const MainSwipper = () => {
    let MainSwiperImagesP = [
        {"imageLg":"https://dkstatics-public.digikala.com/digikala-adservice-banners/5c68ad28e6244d3b5e394d259531d155efcb2011_1726951250.jpg?x-oss-process=image/quality,q_95", "imageSm": "https://dkstatics-public.digikala.com/digikala-adservice-banners/a6ea213652700c1a6107e2aea06c3fb8cf69402b_1731164703.gif?x-oss-process=image?x-oss-process=image/format,webp", "id":1},
        {"imageLg":"https://dkstatics-public.digikala.com/digikala-adservice-banners/5c68ad28e6244d3b5e394d259531d155efcb2011_1726951250.jpg?x-oss-process=image/quality,q_95", "imageSm": "https://dkstatics-public.digikala.com/digikala-adservice-banners/1b06e1c376389df8ac34b6b5c5378abe5980088b_1731141880.jpg?x-oss-process=image/quality,q_95/format,webp", "id":2},
        {"imageLg":"https://dkstatics-public.digikala.com/digikala-adservice-banners/5c68ad28e6244d3b5e394d259531d155efcb2011_1726951250.jpg?x-oss-process=image/quality,q_95", "imageSm": "https://dkstatics-public.digikala.com/digikala-adservice-banners/a6ea213652700c1a6107e2aea06c3fb8cf69402b_1731164703.gif?x-oss-process=image?x-oss-process=image/format,webp", "id":3},
        {"imageLg":"https://dkstatics-public.digikala.com/digikala-adservice-banners/5c68ad28e6244d3b5e394d259531d155efcb2011_1726951250.jpg?x-oss-process=image/quality,q_95", "imageSm": "https://dkstatics-public.digikala.com/digikala-adservice-banners/1b06e1c376389df8ac34b6b5c5378abe5980088b_1731141880.jpg?x-oss-process=image/quality,q_95/format,webp", "id":4},
    ]
  return (
    <>
    <div className="flex justify-center">
      <div className="max-w-[1920px] xl:h-[400px] lg:h-[300px] h-fit w-full lg:block hidden">
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
                      <>
                    <SwiperSlide className="h-full w-full bg-slate-600" key={elem.id}>
                        <SwipperImages image={elem.imageLg}/>
                        {/* <div className="flex lg:hidden"><SwipperImages image={elem.imageSm}/></div> */}
                    </SwiperSlide>
                    </>
                    )
                })
            }
        </Swiper>
      </div>
      <div className="max-w-[1920px] xl:h-[400px] lg:h-[300px] h-[180px] w-full lg:hidden block">
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
                      <>
                    <SwiperSlide className="h-full w-full" key={elem.id}>
                        <SwipperImages image={elem.imageSm}/>
                    </SwiperSlide>
                    </>
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
