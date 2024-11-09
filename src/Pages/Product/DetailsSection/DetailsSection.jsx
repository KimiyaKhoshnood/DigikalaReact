import Icon from "react-icons-kit";
import DetailsSectionNav from "./DetailsSectionNav";
import { shop } from "react-icons-kit/ikons/shop";
import { ic_verified_user_outline } from "react-icons-kit/md/ic_verified_user_outline";
import { checkSquare } from "react-icons-kit/feather/checkSquare";
import PriceWithToman from "../../../Components/PriceWithToman/PriceWithToman";
import TopicWithRedLine from "../TopicWithRedLine/TopicWithRedLine";
import BlueLinkWithLeftArrow from "../../../Components/BlueLinkWithLeftArrow/BlueLinkWithLeftArrow";
import { useState } from "react";
import {starFull} from 'react-icons-kit/icomoon/starFull'
import {starHalf} from 'react-icons-kit/icomoon/starHalf'
import {starEmpty} from 'react-icons-kit/icomoon/starEmpty'

const DetailsSection = () => {
  const DetailsSectionP = {
    "img": "https://dkstatics-public.digikala.com/digikala-products/8da0ac0e9c414ff6bc745cd6b032ef61e6d93cf1_1730113501.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
    "title":
      "گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت - نات اکتیو",
    "color": "مشکی",
    "guaranteeName": "هشتگ کالا رز همراه",
    "guarantee": "گارانتی ۱۸ ماهه رز همراه فروهر",
    "available": true,
    "price": "۴۵,۸۹۹,۰۰۰",
    "introduction": "گوشی موبایل iPhone 13 CH پرچم‌دار جدید شرکت اپل است که با چند ویژگی جدید و دوربین دوگانه روانه بازار شده است. نمایشگر آیفون 13 به پنل Super Retina مجهز ‌شده است تا تصاویر بسیار مطلوبی را به کاربر عرضه کند. این نمایشگر رزولوشن بسیار بالایی دارد؛ به‌طوری‌که در اندازه­‌ی 6.1 اینچی‌اش، حدود 460 پیکسل را در هر اینچ جا داده است. امکان شارژ بی‌‌سیم باتری در این گوشی وجود دارد. تشخیص چهره با استفاده از دوربین جلو دیگر ویژگی است که در آیفون جدید اپل به کار گرفته شده است. از نظر سخت‌‌افزاری این گوشی از تراشه­‌ی جدید A15 بهره می‌برد که دارای 15 میلیارد ترانزیستور است که دارای کنترل گرمای مطلوبی بوده که تا بتواند علاوه بر کارهای معمول، از قابلیت‌های جدید واقعیت مجازی که اپل این روزها روی آن تمرکز خاصی دارد، پشتیبانی کند. به گفته خود شرکت اپل این گوشی دارای سرعتی 50 برابر نسخه 12 خود است. پردازنده دارای ماژولار جدیدی است که مصرف باتری را بسیار پایین‌تر آورده است و شما دارای حفظ باتری بالاتری هستید. اپل در این سری از گوشی‌های iPhone خود پردازنده گرافیکی‌ای را قرار داده که از سری 12 گوشی‌های خود 30 درصد سریع‌تر است و این نویدبخش آن است که شما می‌توانید بازی‌هایی را با گرافیک و MAP سنگین تر و بزرگ‌تر اجرا کنید. یکی از ویژگی‌هایی که در iPhone 13 شاهد هستیم سیستم فیلمبرداری ProRes سینمایی آن است که می تواند انقلابی در فیلمبرداری گوشی‌های موبایل به‌راه انداخته باشد. گوشی‌های نات اکتیو با قرار گرفتن سیم‌کارت‌های داخلی اکتیو می‌شوند و برخلاف مدل اکتیو پلمپ کالا باز نشده است. گوشی‌های اکتیو برند اپل هم به این شکل هستند که به دلیل محدودیت‌های برخی از محصولات اپل برای کشور ایران، در کشور‌های همسایه به‌صورت رسمی با یک بار قرار گرفتن سیم‌کارت، اکتیو شده و پلمپ می‌شوند و باید بدانید که این پروسه هیچ مشکلی در راستای گارانتی کالا به‌همراه ندارد. پارت‌نامبر‌های اروپا و ژاپن و امارات تک سیم‌کارت هستند و پارت‌نامبر‌های مربوط به امارات هم از فیس تایم پشتیبانی نمی‌کنند. پارت‌نامبر JA (ژاپن) هم حتی در حالت سایلنت صدای شاتر عکس قطع نمی‌شود.",
    "professionalDetails": {
        "introduction": "گوشی‌های هوشمند خانواده آیفون 13 در قالب چهار گوشی آیفون 13 پرو مکس، آیفون 13 پرو، آیفون 13 و آیفون 13 مینی معرفی شدند. بدون شک دو مدل پرو و پرو مکس به عنوان پرچمداران این شرکت از مشخصات فنی قدرتمند‌تری بهره برده‌اند. اما در این میان آیفون 13 به همراه مدل مینی با قیمتی مقرون‌به‌صرفه‌تر روانه بازار شده‌اند تا امکان خرید برای کاربران بیشتری امکان‌پذیر باشد. در این مقاله خواهیم دید که آیفون 13 به نسبت نسل قبلی چه مشخصاتی با خود به‌همراه داشته و در بخش‌های مختلف چه عملکردی را از خودش به‌نمایش می‌گذارد. شاید با توجه به مشخصات تقریبا مشابه آیفون 13 و آیفون 12، این سوال برای شما به وجود آید که چرا آیفون 13 می‌تواند عملکرد بهتری داشته باشد. پس با ما همراه باشید تا به دلایل عملکرد بهتر و قدرتمند‌تر آیفون 13 به نسبت آیفون 12 پی ببرید.",
        "img": "https://dkstatics-public.digikala.com/digikala-reviews/1ab22d57eaceec398123173e592835275e6d027e_1632043862.jpg?x-oss-process=image/quality,q_70"
    },
    "overallDetails": [
        {"title":"نوع گوشی موبایل", "detail": "سیستم عامل iOS", "id":1},
        {"title":"دسته ‌بندی", "detail": "پرچم‌دار", "id":2},
        {"title":"مدل", "detail": "iPhone ۱۳ CH", "id":3},
        {"title":"زمان معرفی", "detail": "۱۴ سپتامبر ۲۰۲۱", "id":4},
        {"title":"ابعاد", "detail": "۱۴۶.۷x۷۱.۵x۷.۶۵ میلی‌متر", "id":5}
    ],
    "opinions": {
        "rateEnglish": "4.5",
        "ratePersian": "۴.۵",
        "count": "۸,۹۷۷"
    },
    "comments": [
        {
            "img": "https://dkstatics-public.digikala.com/digikala-comment-files/1365c6d3fea1631cb378690a07c6401be01b7aa2_1663925882.jpeg?x-oss-process=image/resize,m_lfit,h_1024,w_1024/quality,q_80",
            "user": "کاربر دیجی‌کالا",
            "rateEnglish": "5",
            "date": "۱۰ ساعت پیش",
            "comment": "سلام سریع رسید ب دستم دقیق همون ساعت مرسی دیجی کالا",
            "guaranteeName": "اسمارت تکنولوژی قشم",
            "color": "سفید",
            "like": 0,
            "dislike": 0,
            "id": 1
        },{
            "img": "https://dkstatics-public.digikala.com/digikala-comment-files/e1882bbdffe6169610337ddd901134062d19e0f0_1652873908.jpeg?x-oss-process=image/resize,m_lfit,h_1024,w_1024/quality,q_80",
            "user": "کاربر دیجی‌کالا",
            "rateEnglish": "5",
            "date": "۱۰ ساعت پیش",
            "comment": "سلام سریع رسید ب دستم دقیق همون ساعت مرسی دیجی کالا",
            "guaranteeName": "اسمارت تکنولوژی قشم",
            "color": "سفید",
            "like": 0,
            "dislike": 0,
            "id": 2
        },{
            "img": "https://dkstatics-public.digikala.com/digikala-comment-files/97314e3336eacad0a24b30b3a59d55a9ab61af26_1659511974.jpeg?x-oss-process=image/resize,m_lfit,h_1024,w_1024/quality,q_80",
            "user": "کاربر دیجی‌کالا",
            "rateEnglish": "5",
            "date": "۱۰ ساعت پیش",
            "comment": "سلام سریع رسید ب دستم دقیق همون ساعت مرسی دیجی کالا",
            "guaranteeName": "اسمارت تکنولوژی قشم",
            "color": "سفید",
            "like": 0,
            "dislike": 0,
            "id": 3
        },{
            "img": "https://dkstatics-public.digikala.com/digikala-comment-files/73576b21ef699181b349ee49aad3d9ef9090682a_1652696686.jpg?x-oss-process=image/resize,m_lfit,h_1024,w_1024/quality,q_80",
            "user": "کاربر دیجی‌کالا",
            "rateEnglish": "5",
            "date": "۱۰ ساعت پیش",
            "comment": "سلام سریع رسید ب دستم دقیق همون ساعت مرسی دیجی کالا",
            "guaranteeName": "اسمارت تکنولوژی قشم",
            "color": "سفید",
            "like": 0,
            "dislike": 0,
            "id": 4
        },
    ]
  };

  const [readMore, setReadMore] = useState(false);
  const [readMoreBtn, setReadMoreBtn] = useState("بیشتر");

  const ReadMoreBtnFunc = () => {
    setReadMore(!readMore);
    readMore ? setReadMoreBtn("بیشتر") : setReadMoreBtn("بستن");
  };

  const stars = Array(5).fill(0)
  console.log("stars", stars);
  

  return (
    <div className="w-full max-w-[1676px] p-4">
      <DetailsSectionNav />
      <div className="flex">
        {/* right */}
        <div className="flex-1">
          <section className="pt-4 pb-7" id="introduction">
            <TopicWithRedLine title={"معرفی"} />
            <p className={`${readMore?"":"line-clamp-3"} text-sm leading-loose my-2`}>{DetailsSectionP.introduction}</p>
            <BlueLinkWithLeftArrow text={readMoreBtn} size={"text-xs"} functionBtn={ReadMoreBtnFunc} />
          </section>

          <div className="h-1 bg-gray-100"></div>

          <section className="py-5" id="professional">
            <TopicWithRedLine title={"بررسی تخصصی"}/>
            <span className="font-bold py-5 block">معرفی</span>
            <div className="flex">
                <p className="text-sm leading-loose"><span className="px-3">&nbsp;</span>{DetailsSectionP.professionalDetails.introduction}</p>
                <img className="w-[340px] h-[340px]" src={DetailsSectionP.professionalDetails.img} alt="" />
            </div>
            <BlueLinkWithLeftArrow text={readMoreBtn} size={"text-xs"} functionBtn={ReadMoreBtnFunc}/>
          </section>

          <div className="h-1 bg-gray-100"></div>

          <section className="py-5" id="details">
            <TopicWithRedLine title={"مشخصات"} />
            <div className="flex gap-5 py-5 leading-loose">
                <span className="!w-64">مشخصات کلی</span>
                <div className="flex flex-col text-sm flex-1">
                    {
                        DetailsSectionP.overallDetails.map((elem)=>{
                          return <div className="flex items-center">
                            <p className="text-gray-500 w-[200px]">{elem.title}</p>
                            <p className="border-b py-4 flex-1">{elem.detail}</p>
                          </div>
                        })
                    }
                </div>
            </div>
            <BlueLinkWithLeftArrow text={readMoreBtn} size={"text-xs"} functionBtn={ReadMoreBtnFunc}/>
            <div className="flex items-center text-xs gap-2 py-2 text-gray-500">
                <div className="flex justify-center items-center text-[11px] w-[14px] h-[14px] border border-gray-600 text-gray-500 rounded-full">
                  i
                </div>
                <p>هشدار سامانه همتا: در صورت انجام معامله، از فروشنده کد فعالسازی را گرفته و حتما در حضور ایشان، دستگاه را از طریق #7777*، برای سیمکارت خود فعالسازی نمایید. آموزش تصویری در آدرس اینترنتی hmti.ir/06</p>
            </div>
          </section>

          <div className="h-1 bg-gray-100"></div>

          <section className="py-5" id="opinions">
            <TopicWithRedLine title={"امتیاز و دیدگاه کاربران"} />
            <div className="flex gap-5">
                <div className="flex flex-col gap-3 py-4 w-[260px]">
                    <div>
                        <span className="text-2xl">{DetailsSectionP.opinions.ratePersian}</span>
                        <span className="text-[10px]">{" از ۵ "}</span>
                    </div>
                    <div className="text-yellow-400 flex items-center gap-1">
                        <div>{
                            Array(5).fill(0).map((_,index)=>{
                                return (DetailsSectionP.opinions.rateEnglish>= index+1 &&  <Icon size={20} icon={starFull} />
                                )
                            })
                        }
                        {
                            DetailsSectionP.opinions.rateEnglish > Math.floor(DetailsSectionP.opinions.rateEnglish) && <Icon size={20} icon={starHalf} style={{transform:"rotateY(180deg)"}}/>
                        }
                        {
                            Array(5).fill(0).map((_,index)=>{
                                return (Math.ceil(DetailsSectionP.opinions.rateEnglish)< index+1 &&  <Icon size={20} icon={starEmpty} />
                                )
                            })
                        }</div>
                        <span className="text-gray-400 text-[10px] leading-loose">از مجموع {DetailsSectionP.opinions.count}  امتیاز</span>
                    </div>
                    <p className="text-gray-500 text-[11px]">شما هم درباره این کالا دیدگاه ثبت کنید</p>
                    <button className="border border-rose-500 text-rose-500 w-full py-3 rounded-lg text-xs">
                    ثبت دیدگاه
                    </button>
                    <div className="text-gray-500 flex gap-1 leading-loose">
                        <div className="flex justify-center items-center text-[11px] w-[14px] h-[14px] border border-gray-600 text-gray-500 rounded-full">
                        i
                        </div>
                        <p className="text-xs">با ثبت دیدگاه بر روی کالاهای خریداری شده ۵ امتیاز در دیجی‌کلاب دریافت کنید</p>
                    </div>
                </div>
                <div>
                    <div className="flex gap-8">
                        {
                            DetailsSectionP.comments.map((elem) => {
                                return <img className="w-[57px] h-[57px] rounded-lg" src={elem.img} alt="" />
                            })
                        }
                    </div>
                    <div className="py-5"><BlueLinkWithLeftArrow text={readMoreBtn} size={"text-xs"} functionBtn={ReadMoreBtnFunc} /></div>
                    <hr />
                    d
                </div>
            </div>
          </section>
          
          <div className="h-1 bg-gray-100"></div>

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
                <Icon className="text-gray-700" icon={shop} />
                <span>{DetailsSectionP.guaranteeName}</span>
              </span>
              <span className="flex gap-2">
                <Icon
                  className="text-gray-700"
                  icon={ic_verified_user_outline}
                />
                <span>{DetailsSectionP.guarantee}</span>
              </span>
              {DetailsSectionP.available ? (
                <span className="flex gap-2">
                  <Icon className="text-cyan-500" icon={checkSquare} />
                  <span>موجود در انبار دیجی‌کالا</span>
                </span>
              ) : null}
            </div>
            <div className="flex justify-end">
              <PriceWithToman
                price={DetailsSectionP.price}
                textSize={"text-lg font-bold"}
              />
            </div>
            <span className="text-xs text-sky-700">
              {"۱۰+ هزار بازدید در ۲۴ ساعت اخیر"}
            </span>
            <button className="bg-rose-500 text-white w-full py-3 rounded-lg text-xs">
              افزودن به سبد
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
