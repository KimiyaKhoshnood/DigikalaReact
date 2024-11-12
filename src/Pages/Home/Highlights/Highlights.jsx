import HighlightItems from "./HighlightItems/HighlightItems";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

// import required modules
import { FreeMode, Scrollbar } from "swiper/modules";
import { useEffect, useState } from "react";

const Highlights = () => {
  let HighlightItemsP = [
    {
      text: "دریافت وام",
      image:
        "https://dkstatics-public.digikala.com/digikala-bellatrix/ac127167132653d14c758748b07824a6a7643a31_1708971047.png",
      id: 1
    },
    {
      text: "حراج سر ماه",
      image:
        "https://dkstatics-public.digikala.com/digikala-bellatrix/4bb0b7006012e541a6a4002242d1bfe863296e4f_1713545982.png",
        id: 2
    },
    {
      text: "موبایل کارکرده",
      image:
        "https://dkstatics-public.digikala.com/digikala-bellatrix/d0dc0edf879e963e9cff31fd57b3f101743ddac8_1707297619.png",
        id: 3
    },
    {
      text: "تضمین قیمت",
      image:
        "https://dkstatics-public.digikala.com/digikala-bellatrix/30d277e628e20f49240182a175c652b4089a432e_1726953717.png",
        id: 4
    },
    {
      text: "بهترین فروشندگان",
      image:
        "https://dkstatics-public.digikala.com/digikala-bellatrix/3c2781506d2802d8e2d33c50a85e128d7607271c_1716821355.png",
        id: 5
    },
    {
      text: "بازگشت به مدرسه",
      image:
        "https://dkstatics-public.digikala.com/digikala-bellatrix/987f905df337a78bad4da4d17b6eb20f5dc9add5_1725719411.png",
        id: 6
    },
    {
      text: "سوپرمارکت پرتخفیف",
      image:
        "https://dkstatics-public.digikala.com/digikala-bellatrix/afb3c938fd3149d7587b59919bfc500a461693a6_1709571657.png",
        id: 7
    },
    {
      text: "فروش ویژه بومی و محلی",
      image:
        "https://dkstatics-public.digikala.com/digikala-bellatrix/ac51190dfa370d1586a46f25df98b576796b59be_1725717002.png",
        id: 8
    },
    {
      text: "تخفیف دیجی‌پلاس",
      image:
        "https://dkstatics-public.digikala.com/digikala-bellatrix/5ffcb21457fb598a397c1c5daa18ef173fc1eed6_1709438704.png",
        id: 9
    },
  ];

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
      console.log("updating width highlights");
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions) 

  }, []);

  console.log("give width", width);


  return (
    <>
      <div className="flex justify-center w-full lg:px-4">
        <div className="py-3 flex lg:justify-between max-w-[1336px] w-full">
          <Swiper
            slidesPerView={width>1024?10:"auto"}
            spaceBetween={5}
            freeMode={true}
            scrollbar={{clickable: true}}
            modules={[FreeMode, Scrollbar]}
            className="mySwiper w-full"
          >
            {HighlightItemsP.map((elem, index) => {
              return (
                <SwiperSlide key={index} className="h-full !w-fit flex justify-center">
                  <HighlightItems text={elem.text} image={elem.image} key={elem.id}/>
                </SwiperSlide>
              );
            })}

          <SwiperSlide className="h-full w-fit flex justify-center">
                  <HighlightItems text={"بیشتر"} image={""} key={10}/>
                </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/*  */}
    </>
  );
};

export default Highlights;
