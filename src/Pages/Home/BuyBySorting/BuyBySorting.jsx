import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

// import required modules
import { FreeMode, Scrollbar } from "swiper/modules";
import BuyBySortingItems from "./BuyBySortingItems/BuyBySortingItems";

const BuyBySorting = () => {
  let  BuyBySortingItemsP = [
    {"image":"https://dkstatics-public.digikala.com/digikala-mega-menu/aba1e5dca8958ac1176e25cd194ff8ac622cd383_1725653953.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80", "text":"موبایل", "id":1},
    {"image":"https://dkstatics-public.digikala.com/digikala-mega-menu/aba1e5dca8958ac1176e25cd194ff8ac622cd383_1725653953.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80", "text":"کالای دیجیتال", "id":2},
    {"image":"https://dkstatics-public.digikala.com/digikala-mega-menu/aba1e5dca8958ac1176e25cd194ff8ac622cd383_1725653953.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80", "text":"کتاب، لوازم تحریر و هنر", "id":3},
    {"image":"https://dkstatics-public.digikala.com/digikala-mega-menu/aba1e5dca8958ac1176e25cd194ff8ac622cd383_1725653953.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80", "text":"خانه و آشپزخانه", "id":4},
    {"image":"https://dkstatics-public.digikala.com/digikala-mega-menu/aba1e5dca8958ac1176e25cd194ff8ac622cd383_1725653953.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80", "text":"خانه و آشپزخانه", "id":5},
    {"image":"https://dkstatics-public.digikala.com/digikala-mega-menu/aba1e5dca8958ac1176e25cd194ff8ac622cd383_1725653953.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80", "text":"خانه و آشپزخانه", "id":6},
    {"image":"https://dkstatics-public.digikala.com/digikala-mega-menu/aba1e5dca8958ac1176e25cd194ff8ac622cd383_1725653953.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80", "text":"خانه و آشپزخانه", "id":7},
    {"image":"https://dkstatics-public.digikala.com/digikala-mega-menu/aba1e5dca8958ac1176e25cd194ff8ac622cd383_1725653953.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80", "text":"خانه و آشپزخانه", "id":8},
    {"image":"https://dkstatics-public.digikala.com/digikala-mega-menu/aba1e5dca8958ac1176e25cd194ff8ac622cd383_1725653953.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80", "text":"خانه و آشپزخانه", "id":9},
    {"image":"https://dkstatics-public.digikala.com/digikala-mega-menu/aba1e5dca8958ac1176e25cd194ff8ac622cd383_1725653953.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80", "text":"خانه و آشپزخانه", "id":10},
    {"image":"https://dkstatics-public.digikala.com/digikala-mega-menu/aba1e5dca8958ac1176e25cd194ff8ac622cd383_1725653953.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80", "text":"خانه و آشپزخانه", "id":11},
    {"image":"https://dkstatics-public.digikala.com/digikala-mega-menu/aba1e5dca8958ac1176e25cd194ff8ac622cd383_1725653953.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80", "text":"خانه و آشپزخانه", "id":12},
    {"image":"https://dkstatics-public.digikala.com/digikala-mega-menu/aba1e5dca8958ac1176e25cd194ff8ac622cd383_1725653953.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80", "text":"خانه و آشپزخانه", "id":13},
    {"image":"https://dkstatics-public.digikala.com/digikala-mega-menu/aba1e5dca8958ac1176e25cd194ff8ac622cd383_1725653953.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80", "text":"خانه و آشپزخانه", "id":14},
    {"image":"https://dkstatics-public.digikala.com/digikala-mega-menu/aba1e5dca8958ac1176e25cd194ff8ac622cd383_1725653953.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80", "text":"خانه و آشپزخانه", "id":15},
    {"image":"https://dkstatics-public.digikala.com/digikala-mega-menu/aba1e5dca8958ac1176e25cd194ff8ac622cd383_1725653953.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80", "text":"خانه و آشپزخانه", "id":16},
  ]
  return (
    <>
      <div>
        <h3 className="text-center text-lg">خرید بر اساس دسته‌بندی</h3>
        <div>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={0}
            freeMode={true}
            scrollbar={{ clickable: true }}
            modules={[FreeMode, Scrollbar]}
            className="mySwiper w-full bg-slate-300"
          >
            <SwiperSlide className="h-full lg:min-w-full w-fit">
            <div className="lg:grid-rows-2 xl:w-full sm:gap-x-[50px] gap-x-[20px] grid grid-flow-col grid-rows-3 bg-green-300 w-fit sm:p-8 p-3">
            {BuyBySortingItemsP.map((elem) => {
              return (
                
                  <BuyBySortingItems
                    text={elem.text}
                    image={elem.image}
                    key={elem.id}
                  />
                
              );
            })}
            </div>
            </SwiperSlide>

            {/* <SwiperSlide className="h-full lg:w-full w-fit flex justify-center">
              <div className="lg:flex lg:flex-wrap lg:justify-center gap-3 grid grid-flow-col grid-rows-3 bg-green-300">
                <div className="bg-black w-20 h-20 rounded-full m-1"></div>
                <div className="bg-black w-20 h-20 rounded-full m-1"></div>
                <div className="bg-black w-20 h-20 rounded-full m-1"></div>
                <div className="bg-black w-20 h-20 rounded-full m-1"></div>
                <div className="bg-black w-20 h-20 rounded-full m-1"></div>
                <div className="bg-black w-20 h-20 rounded-full m-1"></div>
                <div className="bg-black w-20 h-20 rounded-full m-1"></div>
                <div className="bg-black w-20 h-20 rounded-full m-1"></div>
                <div className="bg-black w-20 h-20 rounded-full m-1"></div>
                <div className="bg-black w-20 h-20 rounded-full m-1"></div>
                <div className="bg-black w-20 h-20 rounded-full m-1"></div>
                <div className="bg-black w-20 h-20 rounded-full m-1"></div>
                <div className="bg-black w-20 h-20 rounded-full m-1"></div>
                <div className="bg-black w-20 h-20 rounded-full m-1"></div>
                <div className="bg-black w-20 h-20 rounded-full m-1"></div>
                <div className="bg-black w-20 h-20 rounded-full m-1"></div>
              </div>
            </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default BuyBySorting;
