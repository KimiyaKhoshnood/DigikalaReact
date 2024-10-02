import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Navigation } from "swiper/modules";
import BuyBySortingItems from "./BuyBySortingItems/BuyBySortingItems";

const BuyBySorting = () => {
  let BuyBySortingItemsP = [
    {
      image:
        "https://dkstatics-public.digikala.com/digikala-mega-menu/aba1e5dca8958ac1176e25cd194ff8ac622cd383_1725653953.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      text: "موبایل",
      id: 1,
    },
    {
      image:
        "https://dkstatics-public.digikala.com/digikala-mega-menu/aba1e5dca8958ac1176e25cd194ff8ac622cd383_1725653953.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      text: "کالای دیجیتال",
      id: 2,
    },
    {
      image:
        "https://dkstatics-public.digikala.com/digikala-mega-menu/aba1e5dca8958ac1176e25cd194ff8ac622cd383_1725653953.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      text: "کتاب، لوازم تحریر و هنر",
      id: 3,
    },
    {
      image:
        "https://dkstatics-public.digikala.com/digikala-mega-menu/aba1e5dca8958ac1176e25cd194ff8ac622cd383_1725653953.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      text: "خانه و آشپزخانه",
      id: 4,
    },
    {
      image:
        "https://dkstatics-public.digikala.com/digikala-mega-menu/aba1e5dca8958ac1176e25cd194ff8ac622cd383_1725653953.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      text: "خانه و آشپزخانه",
      id: 5,
    },
    {
      image:
        "https://dkstatics-public.digikala.com/digikala-mega-menu/aba1e5dca8958ac1176e25cd194ff8ac622cd383_1725653953.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      text: "خانه و آشپزخانه",
      id: 6,
    },
    {
      image:
        "https://dkstatics-public.digikala.com/digikala-mega-menu/aba1e5dca8958ac1176e25cd194ff8ac622cd383_1725653953.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      text: "خانه و آشپزخانه",
      id: 7,
    },
    {
      image:
        "https://dkstatics-public.digikala.com/digikala-mega-menu/aba1e5dca8958ac1176e25cd194ff8ac622cd383_1725653953.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      text: "خانه و آشپزخانه",
      id: 8,
    },
    {
      image:
        "https://dkstatics-public.digikala.com/digikala-mega-menu/aba1e5dca8958ac1176e25cd194ff8ac622cd383_1725653953.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      text: "خانه و آشپزخانه",
      id: 9,
    },
    {
      image:
        "https://dkstatics-public.digikala.com/digikala-mega-menu/aba1e5dca8958ac1176e25cd194ff8ac622cd383_1725653953.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      text: "خانه و آشپزخانه",
      id: 10,
    },
    {
      image:
        "https://dkstatics-public.digikala.com/digikala-mega-menu/aba1e5dca8958ac1176e25cd194ff8ac622cd383_1725653953.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      text: "خانه و آشپزخانه",
      id: 11,
    },
    {
      image:
        "https://dkstatics-public.digikala.com/digikala-mega-menu/aba1e5dca8958ac1176e25cd194ff8ac622cd383_1725653953.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      text: "خانه و آشپزخانه",
      id: 12,
    },
    {
      image:
        "https://dkstatics-public.digikala.com/digikala-mega-menu/aba1e5dca8958ac1176e25cd194ff8ac622cd383_1725653953.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      text: "خانه و آشپزخانه",
      id: 13,
    },
    {
      image:
        "https://dkstatics-public.digikala.com/digikala-mega-menu/aba1e5dca8958ac1176e25cd194ff8ac622cd383_1725653953.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      text: "خانه و آشپزخانه",
      id: 14,
    },
    {
      image:
        "https://dkstatics-public.digikala.com/digikala-mega-menu/aba1e5dca8958ac1176e25cd194ff8ac622cd383_1725653953.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      text: "خانه و آشپزخانه",
      id: 15,
    },
    {
      image:
        "https://dkstatics-public.digikala.com/digikala-mega-menu/aba1e5dca8958ac1176e25cd194ff8ac622cd383_1725653953.png?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      text: "خانه و آشپزخانه",
      id: 16,
    },
  ];
  return (
    <>
      <div className="w-full flex justify-center py-5">
        <div className="max-w-[1336px] w-full flex flex-col gap-5">
          <h3 className="text-center text-lg">خرید بر اساس دسته‌بندی</h3>
          <div>
            <Swiper
              slidesPerView={"auto"}
              navigation={true}
              spaceBetween={0}
              freeMode={true}
              modules={[Navigation, FreeMode]}
              className="mySwiper w-full"
            >
              <SwiperSlide className="h-full lg:min-w-full w-fit">
                <div className="lg:grid-rows-2 lg:w-full lg:gap-x-[10px] sm:gap-x-[50px] gap-x-[20px] grid grid-flow-col grid-rows-3 w-fit sm:px-8 sm:py-0 p-3">
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
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyBySorting;
