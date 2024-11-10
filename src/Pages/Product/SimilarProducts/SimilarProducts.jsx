import TopicWithRedLine from "../TopicWithRedLine/TopicWithRedLine"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { FreeMode, Navigation } from 'swiper/modules';
import AmazingSuggestionItems from "../../Home/AmazingSuggestion/AmazingSuggestionItems";

const SimilarProducts = () => {
    const SimilarProductsP = [
        {"image":"https://dkstatics-public.digikala.com/digikala-products/49583a51f0f0e51843718c0a14bda58c683e1bdf_1718703853.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80", "title":"ساعت هوشمند ورنا مدل W49 ultra with 7 Bands", "oldPrice":"۱,۰۰۰,۰۰۰", "newPrice":"۷۵۸,۰۰۰", "off":"۲۴"},
        {"image":"https://dkstatics-public.digikala.com/digikala-products/c157c00d7dd882089e1eb6959352e5cb2132ebe1_1646038481.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80", "title":"کرم مرطوب کننده و آبرسان آرت وینا مدل اکسترا پلاس حجم 75 میلی لیتر", "oldPrice":"۶۸۰,۰۰۰", "newPrice":"۲۷۹,۰۰۰", "off":"۵۹"},
        {"image":"https://dkstatics-public.digikala.com/digikala-products/49583a51f0f0e51843718c0a14bda58c683e1bdf_1718703853.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80", "title":"ساعت هوشمند ورنا مدل W49 ultra with 7 Bands", "oldPrice":"۱,۰۰۰,۰۰۰", "newPrice":"۷۵۸,۰۰۰", "off":"۲۴"},
        {"image":"https://dkstatics-public.digikala.com/digikala-products/c157c00d7dd882089e1eb6959352e5cb2132ebe1_1646038481.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80", "title":"کرم مرطوب کننده و آبرسان آرت وینا مدل اکسترا پلاس حجم 75 میلی لیتر", "oldPrice":"۶۸۰,۰۰۰", "newPrice":"۲۷۹,۰۰۰", "off":"۵۹"},
        {"image":"https://dkstatics-public.digikala.com/digikala-products/49583a51f0f0e51843718c0a14bda58c683e1bdf_1718703853.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80", "title":"ساعت هوشمند ورنا مدل W49 ultra with 7 Bands", "oldPrice":"۱,۰۰۰,۰۰۰", "newPrice":"۷۵۸,۰۰۰", "off":"۲۴"},
        {"image":"https://dkstatics-public.digikala.com/digikala-products/c157c00d7dd882089e1eb6959352e5cb2132ebe1_1646038481.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80", "title":"کرم مرطوب کننده و آبرسان آرت وینا مدل اکسترا پلاس حجم 75 میلی لیتر", "oldPrice":"۶۸۰,۰۰۰", "newPrice":"۲۷۹,۰۰۰", "off":"۵۹"},
        {"image":"https://dkstatics-public.digikala.com/digikala-products/49583a51f0f0e51843718c0a14bda58c683e1bdf_1718703853.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80", "title":"ساعت هوشمند ورنا مدل W49 ultra with 7 Bands", "oldPrice":"۱,۰۰۰,۰۰۰", "newPrice":"۷۵۸,۰۰۰", "off":"۲۴"},
        {"image":"https://dkstatics-public.digikala.com/digikala-products/c157c00d7dd882089e1eb6959352e5cb2132ebe1_1646038481.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80", "title":"کرم مرطوب کننده و آبرسان آرت وینا مدل اکسترا پلاس حجم 75 میلی لیتر", "oldPrice":"۶۸۰,۰۰۰", "newPrice":"۲۷۹,۰۰۰", "off":"۵۹"},
        {"image":"https://dkstatics-public.digikala.com/digikala-products/49583a51f0f0e51843718c0a14bda58c683e1bdf_1718703853.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80", "title":"ساعت هوشمند ورنا مدل W49 ultra with 7 Bands", "oldPrice":"۱,۰۰۰,۰۰۰", "newPrice":"۷۵۸,۰۰۰", "off":"۲۴"},
        {"image":"https://dkstatics-public.digikala.com/digikala-products/c157c00d7dd882089e1eb6959352e5cb2132ebe1_1646038481.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80", "title":"کرم مرطوب کننده و آبرسان آرت وینا مدل اکسترا پلاس حجم 75 میلی لیتر", "oldPrice":"۶۸۰,۰۰۰", "newPrice":"۲۷۹,۰۰۰", "off":"۵۹"},
        {"image":"https://dkstatics-public.digikala.com/digikala-products/49583a51f0f0e51843718c0a14bda58c683e1bdf_1718703853.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80", "title":"ساعت هوشمند ورنا مدل W49 ultra with 7 Bands", "oldPrice":"۱,۰۰۰,۰۰۰", "newPrice":"۷۵۸,۰۰۰", "off":"۲۴"},
        {"image":"https://dkstatics-public.digikala.com/digikala-products/c157c00d7dd882089e1eb6959352e5cb2132ebe1_1646038481.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80", "title":"کرم مرطوب کننده و آبرسان آرت وینا مدل اکسترا پلاس حجم 75 میلی لیتر", "oldPrice":"۶۸۰,۰۰۰", "newPrice":"۲۷۹,۰۰۰", "off":"۵۹"},
    ]
  return (
    <div className="w-full max-w-[1676px] p-4">
      <div className="lg:border lg:border-b-4 rounded-lg lg:px-4 pt-4">
        <TopicWithRedLine title={"کالاهای مشابه"}/>
        <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        freeMode={true}
        navigation={true}
        modules={[FreeMode, Navigation]}
        className="mySwiper"
      >
        {
            SimilarProductsP.map((elem)=>{
                return <SwiperSlide className="!w-fit h-full bg-white py-4" id="redSwiper" key={elem.id}>
                    <AmazingSuggestionItems
                      image={elem.image}
                      title={elem.title}
                      oldPrice={elem.oldPrice}
                      newPrice={elem.newPrice}
                      off={elem.off}
                    />
                  </SwiperSlide>
            })
        }
      </Swiper>
      </div>
    </div>
  )
}

export default SimilarProducts