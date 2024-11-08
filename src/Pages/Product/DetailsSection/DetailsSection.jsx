import Icon from "react-icons-kit";
import DetailsSectionNav from "./DetailsSectionNav";
import { shop } from "react-icons-kit/ikons/shop";
import { ic_verified_user_outline } from "react-icons-kit/md/ic_verified_user_outline";
import {checkSquare} from 'react-icons-kit/feather/checkSquare'
import PriceWithToman from "../../../Components/PriceWithToman/PriceWithToman";

const DetailsSection = () => {
  const DetailsSectionP = {"img": "https://dkstatics-public.digikala.com/digikala-products/8da0ac0e9c414ff6bc745cd6b032ef61e6d93cf1_1730113501.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90", "title": "گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت - نات اکتیو", "color": "مشکی", "guaranteeName": "هشتگ کالا رز همراه", "guarantee": "گارانتی ۱۸ ماهه رز همراه فروهر", "available": true, "price": "۴۵,۸۹۹,۰۰۰", "id":1
    }
  return (
    <div className="w-full max-w-[1676px] p-4">
      <DetailsSectionNav />
      <div className="flex">
        {/* right */}
        <div className="flex-1">
          <section className="pb-96 bg-pink-100" id="introduction">
            introduction
          </section>
          <section
            className="pb-96 bg-gray-100"
            id="professional"
          >
            professional
          </section>
          <section className="pb-96 bg-pink-100" id="details">
            details
          </section>
          <section className="pb-96 bg-gray-100" id="opinions">
            opinions
          </section>
          <section className="pb-96 bg-pink-100" id="questions">
            questions
          </section>
        </div>
        {/* left */}
        <div className="p-5">
            <div className="flex flex-col gap-3 border border-gray-200 bg-gray-100 rounded-xl p-4 text-xs leading-loose max-w-[300px]">
                <div className="flex gap-2">
                    <div>
                        <img className="w-20 h-20" src={DetailsSectionP.img} alt="" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-[2px]">
                        <p className="line-clamp-2">{DetailsSectionP.title}</p>
                        <div className="flex gap-2 items-center">
                            <div className="w-4 h-4 bg-black rounded-full"></div>
                            <p>{DetailsSectionP.color}</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="text-gray-600 flex flex-col gap-2">
                    <span className="flex gap-2">
                        <Icon className="text-gray-700" icon={shop}/>
                        <span>{DetailsSectionP.guaranteeName}</span>
                    </span>
                    <span className="flex gap-2">
                        <Icon className="text-gray-700" icon={ic_verified_user_outline}/>
                        <span>{DetailsSectionP.guarantee}</span>
                    </span>
                    {DetailsSectionP.available?<span className="flex gap-2">
                        <Icon className="text-cyan-500" icon={checkSquare}/>
                        <span>موجود در انبار دیجی‌کالا</span>
                    </span>:null}
                </div>
                <div className="flex justify-end"><PriceWithToman price={DetailsSectionP.price} textSize={"text-lg font-bold"}/></div>
                <span className="text-xs text-sky-700">{"۱۰+ هزار بازدید در ۲۴ ساعت اخیر"}</span>
                <button className="bg-rose-500 text-white w-full py-3 rounded-lg text-xs">افزودن به سبد</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
