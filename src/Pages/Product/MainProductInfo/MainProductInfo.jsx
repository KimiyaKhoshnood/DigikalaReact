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
    <div className="lg:p-4 w-full max-w-[1676px] flex lg:flex-row flex-col">
      <ProductPics />
      <div className="flex-1">
        <div className="px-4">
          <div className="flex gap-2 text-cyan-500 lg:text-sm text-[11px] leading-loose">
            <a href="">اپل</a>/<a href="">گوشی موبایل</a>
          </div>
          <h1 className="text-lg leading-loose pb-3">
            <strong>
              گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت ظرفیت 128 گیگابایت و
              رم 4 گیگابایت - نات اکتیو
            </strong>
          </h1>
        </div>
        <div className="flex lg:flex-row flex-col gap-4">
          <MainDetails data={MainProductInfoP}/>
          <div className='lg:hidden block w-full h-1 bg-gray-100'></div>
          <LeftGrayBox />
          {/* <div className="lg:hidden flex flex-col gap-2 bg-gray-100 p-4">
            <div className="bg-white lg:hidden flex rounded-lg items-center justify-between px-4">
                <span className="text-sm">ارسال رایگان برای این کالا</span>
                <div><img className="h-[60px]" src="https://www.digikala.com/_next/static/media/normalFreeShippingTouchPointImage.d4416515.svg" alt="" /></div>
            </div>
            <div className="bg-white rounded-lg p-4">
                <div className="flex justify-between text-sm pb-3">
                    <div className="flex items-center gap-2">
                        <div className="bg-blue-800 w-4 h-4"></div>
                        <span className="text-sm">خرید این کالا با تسهیلات دیجی‌پی</span>
                    </div>
                    <Icon icon={arrow_left} />
                </div>
                <div className="text-gray-400 leading-loose flex gap-1">
                    <div className="flex flex-col items-center px-1">
                        <div className="border w-[1px] bg-gray-500 flex-1"></div>
                        <div className="bg-blue-800 w-[6px] h-[6px] rounded-sm"></div>
                        <div className="border w-[1px] bg-gray-500 flex-1"></div>
                    </div>
                    <h3 className="text-[11px]">فقط با ماهی ۴,۷۰۳,۸۰۰ تومان (۱۲ ماه)</h3>
                </div>
                <div className="text-gray-400 leading-loose flex gap-1">
                    <div className="flex flex-col items-center px-1">
                        <div className="border w-[1px] bg-gray-500 flex-1"></div>
                        <div className="bg-blue-800 w-[6px] h-[6px] rounded-sm"></div>
                        <div className="border w-[1px] bg-gray-500 flex-1"></div>
                    </div>
                    <h3 className="text-[11px]">فقط با ماهی ۴,۷۰۳,۸۰۰ تومان (۱۲ ماه)</h3>
                </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MainProductInfo;
