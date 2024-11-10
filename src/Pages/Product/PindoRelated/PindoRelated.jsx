import Icon from "react-icons-kit";
import { arrowLeft } from "react-icons-kit/feather/arrowLeft";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode, Navigation } from "swiper/modules";
import PriceWithToman from "../../../Components/PriceWithToman/PriceWithToman";

const PindoRelated = () => {
  const PindoRelatedP = [
    {
      img: "https://dkstatics-public.digikala.com/digikala-c2c-advertisements/9f1d5148d1fb3ff48c1bb771d89843d4e23e04ed_1726757720.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      title:
        "گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت - نات اکتیو",
      price: "۳۶,۳۹۷,۰۰۰",
      id: 1,
    },
    {
      img: "https://dkstatics-public.digikala.com/digikala-c2c-advertisements/e8776e4df32faded26845b770b42ce4781f6dab6_1727622094.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      title:
        "گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت - نات اکتیو",
      price: "۳۷,۹۸۵,۰۰۰",
      id: 2,
    },
    {
      img: "https://dkstatics-public.digikala.com/digikala-c2c-advertisements/9f1d5148d1fb3ff48c1bb771d89843d4e23e04ed_1726757720.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      title:
        "گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت - نات اکتیو",
      price: "۳۸,۰۰۰,۰۰۰",
      id: 3,
    },
  ];
  return (
    <div className="w-full max-w-[1676px] p-4">
      <div className="bg-gray-100 bg-[url(https://www.digikala.com/_next/static/media/PindoTouchPointBackground.f54ee21d.svg)] bg-no-repeat bg-right w-full rounded-lg p-4 flex lg:flex-row flex-col justify-between">
        <div className="flex items-center">
          <div>
            <img
              className="w-16 h-16"
              src="https://www.digikala.com/statics/img/svg/pindo.svg"
              alt=""
            />
          </div>
          <div className="flex flex-col">
            <img
              className="h-7"
              src="https://www.digikala.com/statics/img/svg/Pindo-logo.svg"
              alt=""
            />
            <span>رایگان آگهی بگذارید!</span>
          </div>
        </div>
        <div className="flex items-center">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            freeMode={true}
            navigation={true}
            modules={[FreeMode, Navigation]}
            className="mySwiperflex"
          >
            {PindoRelatedP.map((elem) => {
              return (
                <SwiperSlide
                  className="!w-fit h-full"
                  id="redSwiper"
                  key={elem.id}
                >
                  <div className="flex gap-2">
                    <div className="h-[74px] flex items-center">
                      <img className="w-[74px]" src={elem.img} alt="" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="line-clamp-1 max-w-[74px] text-xs">
                        {elem.title}
                      </p>
                      <PriceWithToman
                        price={elem.price}
                        textSize={"text-[11px]"}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <a className="bg-white py-2 px-3 rounded-3xl h-fit" href="">
            <span className="text-xs">آگهی‌های مرتبط</span>
            <Icon icon={arrowLeft} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PindoRelated;
