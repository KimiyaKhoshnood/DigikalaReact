import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode, Navigation } from "swiper/modules";
import {u25C0} from 'react-icons-kit/noto_emoji_regular/u25C0'
import Icon from "react-icons-kit";
import EachVideo from "./EachVideo";

const RelatedVideos = () => {
  const RelatedVideosP = [
    {
      video:
        "https://dkstatics-public.digikala.com/digikala-content-x-post-media/652755377cef10188d7ef633d7ac320d76c6d776_1726010876.jpg?x-oss-process=image/resize,w_600/quality,q_80",
      title: "راهنمای خرید گوشی تا ۶۰ میلیون",
      profilePic:
        "https://dkstatics-public.digikala.com/digikala-content-x-profile/96e8f0e3a74785c92aa262a04383a71fd68714fc_1669144745.jpg?x-oss-process=image/resize,m_lfit,h_150,w_150/quality,q_80",
      accountName: "Alirezaafshar",
      id: 1,
    },{
        video:
          "https://dkstatics-public.digikala.com/digikala-content-x-post-media/652755377cef10188d7ef633d7ac320d76c6d776_1726010876.jpg?x-oss-process=image/resize,w_600/quality,q_80",
        title: "راهنمای خرید گوشی تا ۶۰ میلیون",
        profilePic:
          "https://dkstatics-public.digikala.com/digikala-content-x-profile/96e8f0e3a74785c92aa262a04383a71fd68714fc_1669144745.jpg?x-oss-process=image/resize,m_lfit,h_150,w_150/quality,q_80",
        accountName: "Alirezaafshar",
        id: 2,
      },{
        video:
          "https://dkstatics-public.digikala.com/digikala-content-x-post-media/652755377cef10188d7ef633d7ac320d76c6d776_1726010876.jpg?x-oss-process=image/resize,w_600/quality,q_80",
        title: "راهنمای خرید گوشی تا ۶۰ میلیون",
        profilePic:
          "https://dkstatics-public.digikala.com/digikala-content-x-profile/96e8f0e3a74785c92aa262a04383a71fd68714fc_1669144745.jpg?x-oss-process=image/resize,m_lfit,h_150,w_150/quality,q_80",
        accountName: "Alirezaafshar",
        id: 3,
      },{
        video:
          "https://dkstatics-public.digikala.com/digikala-content-x-post-media/652755377cef10188d7ef633d7ac320d76c6d776_1726010876.jpg?x-oss-process=image/resize,w_600/quality,q_80",
        title: "راهنمای خرید گوشی تا ۶۰ میلیون",
        profilePic:
          "https://dkstatics-public.digikala.com/digikala-content-x-profile/96e8f0e3a74785c92aa262a04383a71fd68714fc_1669144745.jpg?x-oss-process=image/resize,m_lfit,h_150,w_150/quality,q_80",
        accountName: "Alirezaafshar",
        id: 4,
      },{
        video:
          "https://dkstatics-public.digikala.com/digikala-content-x-post-media/652755377cef10188d7ef633d7ac320d76c6d776_1726010876.jpg?x-oss-process=image/resize,w_600/quality,q_80",
        title: "راهنمای خرید گوشی تا ۶۰ میلیون",
        profilePic:
          "https://dkstatics-public.digikala.com/digikala-content-x-profile/96e8f0e3a74785c92aa262a04383a71fd68714fc_1669144745.jpg?x-oss-process=image/resize,m_lfit,h_150,w_150/quality,q_80",
        accountName: "Alirezaafshar",
        id: 5,
      },{
        video:
          "https://dkstatics-public.digikala.com/digikala-content-x-post-media/652755377cef10188d7ef633d7ac320d76c6d776_1726010876.jpg?x-oss-process=image/resize,w_600/quality,q_80",
        title: "راهنمای خرید گوشی تا ۶۰ میلیون",
        profilePic:
          "https://dkstatics-public.digikala.com/digikala-content-x-profile/96e8f0e3a74785c92aa262a04383a71fd68714fc_1669144745.jpg?x-oss-process=image/resize,m_lfit,h_150,w_150/quality,q_80",
        accountName: "Alirezaafshar",
        id: 6,
      },{
        video:
          "https://dkstatics-public.digikala.com/digikala-content-x-post-media/652755377cef10188d7ef633d7ac320d76c6d776_1726010876.jpg?x-oss-process=image/resize,w_600/quality,q_80",
        title: "راهنمای خرید گوشی تا ۶۰ میلیون",
        profilePic:
          "https://dkstatics-public.digikala.com/digikala-content-x-profile/96e8f0e3a74785c92aa262a04383a71fd68714fc_1669144745.jpg?x-oss-process=image/resize,m_lfit,h_150,w_150/quality,q_80",
        accountName: "Alirezaafshar",
        id: 7,
      },{
        video:
          "https://dkstatics-public.digikala.com/digikala-content-x-post-media/652755377cef10188d7ef633d7ac320d76c6d776_1726010876.jpg?x-oss-process=image/resize,w_600/quality,q_80",
        title: "راهنمای خرید گوشی تا ۶۰ میلیون",
        profilePic:
          "https://dkstatics-public.digikala.com/digikala-content-x-profile/96e8f0e3a74785c92aa262a04383a71fd68714fc_1669144745.jpg?x-oss-process=image/resize,m_lfit,h_150,w_150/quality,q_80",
        accountName: "Alirezaafshar",
        id: 8,
      },
  ];
  return (
    <div className="w-full max-w-[1676px] p-4">
      <div className="border border-b-4 rounded-lg px-4 pt-4">
        <span>ویدئوهای مرتبط</span>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          freeMode={true}
          navigation={true}
          modules={[FreeMode, Navigation]}
          className="mySwiperflex"
        >
          {RelatedVideosP.map((elem) => {
            return <SwiperSlide
            className="!w-fit h-full bg-white py-4"
            id="redSwiper"
            key={elem.id}
          ><EachVideo videoDetails={elem}/></SwiperSlide>
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default RelatedVideos;
