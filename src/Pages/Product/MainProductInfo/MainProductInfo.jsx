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
    <div className="p-4 w-full max-w-[1676px] flex">
      <div className="flex flex-col">
        <div className="flex">
          <div className="flex flex-col gap-2 text-gray-700">
            <div className="">
              <Icon size={25} icon={heartOutline} />
            </div>
            <div className="">
              <Icon size={25} icon={share} />
            </div>
            <div className="">
              <Icon size={25} icon={ic_notifications_active_outline} />
            </div>
            <div className="">
              <Icon size={25} icon={ic_timeline} />
            </div>
            <div className="">
              <Icon size={25} icon={ic_flip} />
            </div>
            <div className="">
              <Icon size={25} icon={ic_format_list_bulleted} />
            </div>
          </div>
          <div>
            <img
              className="h-[545px] w-[545px]"
              src="https://dkstatics-public.digikala.com/digikala-products/8da0ac0e9c414ff6bc745cd6b032ef61e6d93cf1_1730113501.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90"
              alt=""
            />
          </div>
        </div>
        <div className="flex py-3">
          <div className="border border-gray-300 rounded-md w-fit p-1">
            <img
              className="h-[72px] w-[72px]"
              src="https://dkstatics-public.digikala.com/digikala-products/8da0ac0e9c414ff6bc745cd6b032ef61e6d93cf1_1730113501.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90"
              alt=""
            />
          </div>
        </div>
        <div className="flex gap-5">
          <span className="flex gap-1 text-gray-600">
            <div className="flex justify-center items-center text-[11px] w-[18px] h-[18px] border border-gray-600 rounded-full">
              i
            </div>
            <span className="text-xs">گزارش مشخصات کالا یا موارد قانونی</span>
          </span>
          <span className="text-xs text-gray-500">DKP-8366616</span>
        </div>
      </div>
      <div className="flex-1">
        <div>
          <div className="flex gap-2 text-cyan-500 text-sm leading-loose">
            <a href="">اپل</a>/<a href="">گوشی موبایل</a>
          </div>
          <h1 className="text-lg leading-[70px]">
            <strong>
              گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت ظرفیت 128 گیگابایت و
              رم 4 گیگابایت - نات اکتیو
            </strong>
          </h1>
        </div>
        <div className="flex gap-4">
          <div className="w-full flex flex-col gap-4">
            <div className="text-gray-400 flex items-center">
              <span className="text-nowrap text-xs">
                Apple iPhone 13 CH Dual SIM 128GB And 4GB RAM Mobile Phone - Not
                Activate
              </span>
              <div className="h-[1px] border-t w-full"></div>
            </div>
            <div className="flex items-center text-xs gap-2">
              <Icon className="text-yellow-400" icon={androidStar} size={20} />
              <p className="text-gray-700">{"۴.۵"}</p>
              <p className="text-gray-400">{"(امتیاز ۸۹۷۷ خریدار)"}</p>
              <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
              <p className="text-cyan-400">۸۲۲۴ دیدگاه</p>
              <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
              <p className="text-cyan-400">۲۸۸۶ پرسش</p>
            </div>
            <span className="font-bold">رنگ: مشکی</span>
            <div className="flex gap-2">
                {/* prop */}
                <div className="border rounded-full w-fit p-1"><div className="bg-black w-[30px] h-[30px] rounded-full border"></div></div>
                <div className="border rounded-full w-fit p-1"><div className="bg-white w-[30px] h-[30px] rounded-full border"></div></div>
                <div className="border rounded-full w-fit p-1"><div className="bg-pink-400 w-[30px] h-[30px] rounded-full border"></div></div>
            </div>
            <span className="font-bold">بیمه</span>
            <div className="border rounded-lg flex">
                <div className="h-full flex items-center px-3 border-l">
                    <input className="scale-150" type="checkbox" name="checkbox"/>
                </div>
                <div className="p-3 w-full flex flex-col gap-4">
                    <p className="text-xs">بیمه تجهیزات دیجیتال - بیمه سامان</p>
                    <div className="flex justify-between">
                        <span className="flex gap-2 items-center">
                            <OffPercent off={"۵۰"} />
                            <LineThroughPrice oldPrice={"۱,۷۵۱,۶۳۰"} />
                            <PriceWithToman price={"۸۷۶,۳۶۰"} textSize={"text-sm"} />
                        </span>
                        <BlueLinkWithLeftArrow text={"جزییات"} size={"text-xs"}/>
                    </div>
                </div>
            </div>
            <span className="font-bold">ویژگی‌ها</span>
            <div className="grid grid-cols-3 gap-2">
                {MainProductInfoP.features.map((elem)=>{
                    return <div className="bg-gray-100 rounded-lg py-3 px-2 flex flex-col gap-2" key={elem.id}>
                        <p className="text-gray-400 text-xs">{elem.title}</p>
                        <p className="text-gray-700 text-xs font-bold">{elem.detail}</p>
                    </div>
                })}
            </div>
            <div className="flex items-center gap-4">
                <div className="h-[1px] border-t border-gray-300 w-full"></div>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-xs text-nowrap">
                    مشاهده همه ویژگی‌ها
                    <Icon icon={arrow_left} />
                </button>
                <div className="h-[1px] border-t border-gray-300 w-full"></div>
            </div>
            <div className="flex gap-3">
                <div className="py-1">
                    <div className="flex justify-center items-center text-[11px] w-[16px] h-[16px] bg-gray-400 text-white rounded-full p-t-[5px]">
                    i
                    </div>
                </div>
                <p className="text-xs text-gray-500 leading-loose">امکان برگشت کالا در گروه موبایل با دلیل "انصراف از خرید" تنها در صورتی مورد قبول است که پلمب کالا باز نشده باشد.
                تمام گوشی‌های دیجی‌کالا ضمانت رجیستری دارند. در صورت وجود مشکل رجیستری، می‌توانید بعد از مهلت قانونی ۳۰ روزه، گوشی خریداری‌شده را مرجوع کنید.</p>
            </div>
            <div className="border border-gray-300 rounded-lg flex items-center justify-between px-4">
                <span>ارسال رایگان برای این کالا</span>
                <div><img className="h-[60px]" src="https://www.digikala.com/_next/static/media/normalFreeShippingTouchPointImage.d4416515.svg" alt="" /></div>
            </div>
            <div className="border border-gray-300 rounded-lg p-4">
                <div className="flex justify-between text-sm pb-3">
                    <div className="flex items-center gap-2">
                        <div className="bg-blue-800 w-4 h-4"></div>
                        <span>خرید این کالا با تسهیلات دیجی‌پی</span>
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
          </div>
          <div className="w-full max-w-[330px] flex flex-col gap-2">
            <div className="bg-gray-100 border border-gray-300 rounded-xl p-4 flex flex-col gap-3">
              <div className="flex justify-between items-center py-1">
                <h3>
                  <strong>فروشنده</strong>
                </h3>
                <span className="text-cyan-400 text-xs">۱۴ فروشنده دیگر</span>
              </div>
              <div className="flex gap-3">
                <div>
                  <Icon icon={shop} size={25} />
                </div>
                <div className="leading-loose">
                  <p>هشتگ کالا رز همراه</p>
                  <p className="text-xs flex gap-1 text-gray-600">
                    <p className="text-green-600"> {"۱۰۰"}% </p>
                    رضایت از کالا | عملکرد
                    <p className="text-green-600">{"عالی"}</p>
                  </p>
                </div>
              </div>
              <hr />
              <div className="flex items-center justify-between">
                <div className="flex justify-center items-center text-[11px] w-[18px] h-[18px] border border-gray-600 rounded-full">
                  i
                </div>
                <PriceWithToman price={"۴۵,۸۹۹,۰۰۰"} textSize={"text-lg font-bold"} />
              </div>
              <span className="text-xs text-sky-700">{"۱۰+ هزار بازدید در ۲۴ ساعت اخیر"}</span>
              <button className="bg-rose-500 text-white w-full py-3 rounded-lg text-xs">افزودن به سبد</button>
              <div className="flex items-center gap-2 text-gray-800">
                <Icon icon={ic_verified_user_outline} size={22} />
                <p className="text-xs pt-1">گارانتی ۱۸ ماهه رز همراه فروهر</p>
              </div>
              <hr />
              <div className="text-gray-500 text-xs flex justify-between">
                <div>
                    <p><Icon className="text-rose-600" icon={u1F69A} size={20}/>&nbsp;ارسال دیجی‌کالا</p>
                    <p><Icon className="text-blue-700" icon={u23F0} size={20}/>&nbsp;ارسال امروز (فعلا در شهر تهران و کرج)</p>
                </div>
                <Icon icon={arrow_left}/>
              </div>
              <hr />
              <div className="flex items-center gap-3">
                <img className="w-7" src="https://www.digikala.com/statics/img/svg/club-point.svg" alt="" />
                <p className="text-gray-800 text-xs">۱۵۰ امتیاز دیجی‌کلاب</p>
                <div className="flex justify-center items-center text-[11px] w-[16px] h-[16px] border border-gray-600 text-gray-500 rounded-full">
                  i
                </div>
              </div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 px-4 py-3 rounded-md border border-gray-300">
                <div className="flex gap-1">
                  <div className="flex justify-center items-center text-[11px] w-[16px] h-[16px] border border-gray-600 text-gray-500 rounded-full">
                  i
                  </div>
                  <p>فرآیند قیمت‌گذاری و نظارت بر قیمت</p>
                </div>
                <Icon icon={arrow_left} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainProductInfo;
