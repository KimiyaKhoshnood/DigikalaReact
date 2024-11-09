import Icon from "react-icons-kit";
import { heartOutline } from "react-icons-kit/typicons/heartOutline";
import { heartFullOutline } from "react-icons-kit/typicons/heartFullOutline";
import { ic_timeline } from "react-icons-kit/md/ic_timeline";
import { list2 } from "react-icons-kit/icomoon/list2";
import { ic_notifications_active_outline } from "react-icons-kit/md/ic_notifications_active_outline";
import { ic_notifications_active } from "react-icons-kit/md/ic_notifications_active";
import { ic_flip } from "react-icons-kit/md/ic_flip";
import { ic_format_list_bulleted } from "react-icons-kit/md/ic_format_list_bulleted";
import { share } from "react-icons-kit/entypo/share";
import { shop } from "react-icons-kit/ikons/shop";
import {ic_verified_user_outline} from 'react-icons-kit/md/ic_verified_user_outline'
import {arrow_left} from 'react-icons-kit/ikons/arrow_left'
import {u1F69A} from 'react-icons-kit/noto_emoji_regular/u1F69A'
import {u23F0} from 'react-icons-kit/noto_emoji_regular/u23F0'
import {androidStar} from 'react-icons-kit/ionicons/androidStar'
import BlueLinkWithLeftArrow from "../../../Components/BlueLinkWithLeftArrow/BlueLinkWithLeftArrow";
import OffPercent from "../../../Components/OffPercent/OffPercent";
import LineThroughPrice from "../../../Components/LineThroughPrice/LineThroughPrice";
import PriceWithToman from "../../../Components/PriceWithToman/PriceWithToman";
import LeftGrayBox from "./LeftGrayBox";
import ProductPics from "./ProductPics";
import MainDetails from "./MainDetails";


const MainProductInfo = () => {
  const MainProductInfoP = {
    "features": [
        {"title": "فناوری صفحه‌ نمایش", "detail": "Super Retina XDR OLED", "id":1 },
        {"title": "نسخه سیستم عامل", "detail": "iOS 15", "id":2 },
        {"title": "رزولوشن دوربین اصلی", "detail": "12 مگاپیکسل", "id":3 },
        {"title": "اندازه", "detail": "6.1", "id":4 },
    ]
  }
  return (
    <div className="p-4 w-full max-w-[1676px] flex lg:flex-row flex-col">
      <ProductPics />
      <div className="flex-1">
        <div>
          <div className="flex gap-2 text-cyan-500 text-sm leading-loose">
            <a href="">اپل</a>/<a href="">گوشی موبایل</a>
          </div>
          <h1 className="text-lg leading-loose py-3">
            <strong>
              گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت ظرفیت 128 گیگابایت و
              رم 4 گیگابایت - نات اکتیو
            </strong>
          </h1>
        </div>
        <div className="flex lg:flex-row flex-col gap-4">
          <MainDetails data={MainProductInfoP}/>
          <LeftGrayBox />
        </div>
      </div>
    </div>
  );
};

export default MainProductInfo;
