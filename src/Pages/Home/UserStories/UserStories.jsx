import UserStory from "./UserStory/UserStory";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const UserStories = () => {

    let UserStoriesP = [
        {"text":"مزایا و معایب PS4", "status": "زنده", "img":"https://dkstatics-public.digikala.com/digikala-content-x-post-media/4c17c08d96107f04e1c9eca7fc6b729c4a0c33b5_1725824033.jpg?x-oss-process=image/resize,m_fill,h_115,w_115", "id": 1},
        {"text":"مزایا و معایب PS4","status":"۱۶:۰۰", "img":"https://dkstatics-public.digikala.com/digikala-content-x-post-media/4c17c08d96107f04e1c9eca7fc6b729c4a0c33b5_1725824033.jpg?x-oss-process=image/resize,m_fill,h_115,w_115", "id": 2},
        {"text":"مزایا و معایب PS4", "status":"۱۷:۰۰", "img":"https://dkstatics-public.digikala.com/digikala-content-x-post-media/4c17c08d96107f04e1c9eca7fc6b729c4a0c33b5_1725824033.jpg?x-oss-process=image/resize,m_fill,h_115,w_115", "id": 3},
        {"text":"مزایا و معایب PS4", "img":"https://dkstatics-public.digikala.com/digikala-content-x-post-media/4c17c08d96107f04e1c9eca7fc6b729c4a0c33b5_1725824033.jpg?x-oss-process=image/resize,m_fill,h_115,w_115", "id": 4},
        {"text":"مزایا و معایب PS4", "img":"https://dkstatics-public.digikala.com/digikala-content-x-post-media/4c17c08d96107f04e1c9eca7fc6b729c4a0c33b5_1725824033.jpg?x-oss-process=image/resize,m_fill,h_115,w_115", "id": 5},
        {"text":"مزایا و معایب PS4", "img":"https://dkstatics-public.digikala.com/digikala-content-x-post-media/4c17c08d96107f04e1c9eca7fc6b729c4a0c33b5_1725824033.jpg?x-oss-process=image/resize,m_fill,h_115,w_115", "id": 6},
        {"text":"مزایا و معایب PS4", "img":"https://dkstatics-public.digikala.com/digikala-content-x-post-media/4c17c08d96107f04e1c9eca7fc6b729c4a0c33b5_1725824033.jpg?x-oss-process=image/resize,m_fill,h_115,w_115", "id": 7},
        {"text":"مزایا و معایب PS4", "img":"https://dkstatics-public.digikala.com/digikala-content-x-post-media/4c17c08d96107f04e1c9eca7fc6b729c4a0c33b5_1725824033.jpg?x-oss-process=image/resize,m_fill,h_115,w_115", "id": 8},
        {"text":"مزایا و معایب PS4", "img":"https://dkstatics-public.digikala.com/digikala-content-x-post-media/4c17c08d96107f04e1c9eca7fc6b729c4a0c33b5_1725824033.jpg?x-oss-process=image/resize,m_fill,h_115,w_115", "id": 9},
        {"text":"مزایا و معایب PS4", "img":"https://dkstatics-public.digikala.com/digikala-content-x-post-media/4c17c08d96107f04e1c9eca7fc6b729c4a0c33b5_1725824033.jpg?x-oss-process=image/resize,m_fill,h_115,w_115", "id": 10},
        {"text":"مزایا و معایب PS4", "img":"https://dkstatics-public.digikala.com/digikala-content-x-post-media/4c17c08d96107f04e1c9eca7fc6b729c4a0c33b5_1725824033.jpg?x-oss-process=image/resize,m_fill,h_115,w_115", "id": 11},
        {"text":"مزایا و معایب PS4", "img":"https://dkstatics-public.digikala.com/digikala-content-x-post-media/4c17c08d96107f04e1c9eca7fc6b729c4a0c33b5_1725824033.jpg?x-oss-process=image/resize,m_fill,h_115,w_115", "id": 12},
        {"text":"مزایا و معایب PS4", "img":"https://dkstatics-public.digikala.com/digikala-content-x-post-media/4c17c08d96107f04e1c9eca7fc6b729c4a0c33b5_1725824033.jpg?x-oss-process=image/resize,m_fill,h_115,w_115", "id": 13},
        {"text":"مزایا و معایب PS4", "img":"https://dkstatics-public.digikala.com/digikala-content-x-post-media/4c17c08d96107f04e1c9eca7fc6b729c4a0c33b5_1725824033.jpg?x-oss-process=image/resize,m_fill,h_115,w_115", "id": 14},
        {"text":"مزایا و معایب PS4", "img":"https://dkstatics-public.digikala.com/digikala-content-x-post-media/4c17c08d96107f04e1c9eca7fc6b729c4a0c33b5_1725824033.jpg?x-oss-process=image/resize,m_fill,h_115,w_115", "id": 15},
    ]

    return ( 
        <>

        <div className="flex justify-center">
        <div className="w-full h-fit py-4 max-w-[1336px]">
        <Swiper
        slidesPerView={'auto'}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper h-full"
      >
        {
            UserStoriesP.map((elem)=>{
                return(
                    <SwiperSlide className="w-fit h-full" key={elem.id}>
                        <UserStory text={elem.text} img={elem.img} status={elem.status} />
                    </SwiperSlide>
                )
            })
        }
      </Swiper>
        </div>
        </div>
        
        </>
     );
}
 
export default UserStories;