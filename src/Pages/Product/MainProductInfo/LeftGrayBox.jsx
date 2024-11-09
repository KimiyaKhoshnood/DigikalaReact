import React from 'react'
import Icon from 'react-icons-kit'
import { shop } from 'react-icons-kit/ikons/shop'
import PriceWithToman from '../../../Components/PriceWithToman/PriceWithToman'
import { ic_verified_user_outline } from 'react-icons-kit/md/ic_verified_user_outline'
import { u1F69A } from 'react-icons-kit/noto_emoji_regular/u1F69A'
import { u23F0 } from 'react-icons-kit/noto_emoji_regular/u23F0'
import { arrow_left } from 'react-icons-kit/ikons/arrow_left'

const LeftGrayBox = () => {
  return (
    <div className="w-full max-w-[330px] flex flex-col gap-2">
            <div className="lg:bg-gray-100 min-w-[290px] border border-gray-300 rounded-xl p-4 flex flex-col gap-3">
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
  )
}

export default LeftGrayBox