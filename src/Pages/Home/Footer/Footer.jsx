import Icon from 'react-icons-kit'
import {arrow_up} from 'react-icons-kit/ikons/arrow_up'
import {arrow_left} from 'react-icons-kit/ikons/arrow_left'

const Footer = () => {
  const FooterP = {
    "contactUs": [
        {"text":"تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱", "id":1 },
        {"text":"|", "id":2 },
        {"text":"۰۲۱-۹۱۰۰۰۱۰۰", "id":3 },
        {"text":"|", "id":4 },
        {"text":"۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم", "id": 5 }
    ],
    "digikalaAdvantages": [
        {
            "img": "https://www.digikala.com/statics/img/svg/footer/express-delivery.svg",
            "text": "اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس"
        },
        {
            "img": "https://www.digikala.com/statics/img/svg/footer/cash-on-delivery.svg",
            "text": "امکان پرداخت در محل"
        },
        {
            "img": "https://www.digikala.com/statics/img/svg/footer/support.svg",
            "text": "۷ روز ﻫﻔﺘﻪ، ۲۴ ﺳﺎﻋﺘﻪ"
        },
        {
            "img": "https://www.digikala.com/statics/img/svg/footer/days-return.svg",
            "text": "هفت روز ضمانت بازگشت کالا"
        },
        {
            "img": "https://www.digikala.com/statics/img/svg/footer/original-products.svg",
            "text": "ﺿﻤﺎﻧﺖ اﺻﻞ ﺑﻮدن ﮐﺎﻟﺎ"
        }
    ],
    "footerLists": [
        {
            "title": "با دیجی‌کالا",
            "lists": [
                {"text": "اتاق خبر دیجی‌کالا", "id":1},
                {"text": "فروش در دیجی‌کالا", "id":2},
                {"text": "فرصت‌های شغلی", "id":3},
                {"text": "گزارش تخلف در دیجی‌کالا", "id":4},
                {"text": "تماس با دیجی‌کالا", "id":5},
                {"text": "درباره دیجی‌کالا", "id":6}
            ]
        },
        {
            "title": "خدمات مشتریان",
            "lists": [
                {"text": "پاسخ به پرسش‌های متداول", "id":1},
                {"text": "رویه‌های بازگرداندن کالا", "id":2},
                {"text": "شرایط استفاده", "id":3},
                {"text": "حریم خصوصی", "id":4},
                {"text": "گزارش باگ", "id":5}
            ]
        },
        {
            "title": "راهنمای خرید از دیجی‌کالا",
            "lists": [
                {"text": "نحوه ثبت سفارش", "id":1},
                {"text": "رویه ارسال سفارش", "id":2},
                {"text": "شیوه‌های پرداخت", "id":3}
            ]
        }
    ],
    "socialMedia": [
        {"img":"", "id":1},
        {"img":"", "id":2},
        {"img":"", "id":3},
        {"img":"", "id":4},
    ],
    "downloadApp": [
        {"img": "https://www.digikala.com/statics/img/svg/appStores/sib-app.svg", "id":1},
        {"img": "https://www.digikala.com/statics/img/svg/appStores/myket.svg", "id":2},
        {"img": "https://www.digikala.com/statics/img/svg/appStores/coffe-bazzar.svg", "id":3},
        {"img": "https://www.digikala.com/statics/img/svg/More.svg", "id":4},
    ],
    "readMoreText": [
        " اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمان ی کوتاه به دست مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی که فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و توانسته از این طریق مشتریان ثابت خود را داشته باشد.",
        "یکی از مهم‌ترین دغدغه‌های کاربران دیجی‌کالا یا هر فروشگاه‌ اینترنتی دیگری، این است که کالای خریداری شده چه زمانی به دستشان می‌رسد. دیجی‌کالا شیوه‌های مختلفی از ارسال را متناسب با فروشنده کالا،‌ مقصد کالا و همچنین نوع کالا در اختیار کاربران خود قرار می‌دهد. هر یک از روش های ارسال دیجی کالا شرایط و ویژگی‌های خاص خود را دارند که ممکن است گاهی برای کاربران جدید، مبهم و پیچیده به نظر برسند. برای آگاهی بیشتر مشتریان از خدمات دیجی‌کالا، این فروشگاه اینترنتی در بخشی از وب‌سایت خود راهنمای کاملی از شیوه‌‌های ارسال را به صورت ساده و به دور از پیچیدگی، قرار داده است که شامل 8 نوع ارسال کالا به روش‌های زیر است: ارسال امروز، دریافت حضوری، دریافت از گنجه، ارسال توسط فروشنده، ارسال عادی، ارسال کالاهای بزرگ، سنگین و فوق سنگین، ارسال سریع سوپرمارکتی، ارسال با پست",
        "کدام محصولات در دیجی‌کالا قابل سفارش هستند؟",
        "تقریبا می‌توان گفت محصولی وجود ندارد که دیجی‌کالا برای مشتریان خود در سراسر کشور فراهم نکرده باشد. شما می‌توانید در تمامی روزهای هفته و تمامی شبانه روز دیجی‌کالا که محصولات دارای تخفیف عالی می‌شوند، سفارش خود را به سادگی ثبت کرده و در روز و محدوده زمانی مناسب خود، درب منزل تحویل بگیرید. بعضی از گروه‌های اصلی و زیر مجموعه‌های پرطرفدار محصولات دیجی‌کالا شامل مواردی می‌شود که در ادامه به معرفی آن‌ها می‌پردازیم که امکان ارسال امروز برای آن ها وجود دارد. ",
        "دیجی کالا در جشنواره‌های سالیانه خود به طور معمول روی تمام دسته بندی‌های کالایی تخفیف‌های عالی قرار‌می‌دهد. به عنوان مثال در زمان بلک فرایدی یا حراج جمعه سیاه، در این سال‌ها بیشترین درصد تخفیف در اختیار مشتریان دیجی‌کالا قرار گرفته‌است و شامل دسته بندی های مختلف از موبایل و لپ تاپ تا عطر و لباس و حتی غذای حیوانات خانگی بوده‌است. ",
        "کالای دیجیتال",
        "",
        "",
        "",
    ],
    "readMoreBrands": [
        {"img": "https://www.digikala.com/statics/img/png/rezi.webp", "id":1},
        {"img": "https://www.digikala.com/statics/img/png/kasbokar.webp", "id":2},
        {"img": "https://www.digikala.com/statics/img/png/rezi.webp", "id":3},
    ],
    "digiBrands": [
        {"img":"https://www.digikala.com/statics/img/svg/footer/digimag.svg", "id":1},
        {"img":"https://www.digikala.com/statics/img/svg/footer/digimag.svg", "id":2},
        {"img":"https://www.digikala.com/statics/img/svg/footer/digimag.svg", "id":3},
        {"img":"https://www.digikala.com/statics/img/svg/footer/digimag.svg", "id":4},
        {"img":"https://www.digikala.com/statics/img/svg/footer/digimag.svg", "id":5},
        {"img":"https://www.digikala.com/statics/img/svg/footer/digimag.svg", "id":6},
        {"img":"https://www.digikala.com/statics/img/svg/footer/digimag.svg", "id":7},
        {"img":"https://www.digikala.com/statics/img/svg/footer/digimag.svg", "id":8},
        {"img":"https://www.digikala.com/statics/img/svg/footer/digimag.svg", "id":9},
        {"img":"https://www.digikala.com/statics/img/svg/footer/digimag.svg", "id":10},
        {"img":"https://www.digikala.com/statics/img/svg/footer/digimag.svg", "id":11},
        {"img":"https://www.digikala.com/statics/img/svg/footer/digimag.svg", "id":12},
        {"img":"https://www.digikala.com/statics/img/svg/footer/digimag.svg", "id":13},
        {"img":"https://www.digikala.com/statics/img/svg/footer/digimag.svg", "id":14}
    ]
  }

  
  return (
    <>
    <footer>
        <div className="px-5 mt-5 flex justify-between">
            <div>
              <img
                className="h-[30px]"
                src="https://www.digikala.com/brand/full-horizontal.svg"
                alt=""
              />
            </div>
            <a className="text-gray-400 text-xs flex gap-2 w-fit items-center border px-4 py-2 rounded-lg border-gray-300" href="" target="_top">
                بازگشت به بالا
                <Icon icon={arrow_up} size={20} />
            </a>
        </div>

        <div className='px-5 py-2 flex gap-5 text-gray-700'>
            {
                FooterP.contactUs.map((elem)=>{
                    return <p className='text-xs' key={elem.id}>{elem.text}</p>
                })
            }
        </div>

        <div className='flex py-10'>
            {
                FooterP.digikalaAdvantages.map((elem)=>{
                    return <div className='text-xs text-gray-700 flex-1 flex flex-col items-center'>
                        <img className='w-14 h-14' src={elem.img} alt="" />
                        <h4>{elem.text}</h4>
                    </div>
                })
            }
        </div>

        <div className='px-5 flex gap-56'>
            {
                FooterP.footerLists.map((elem)=>{
                    return <div className='flex flex-col gap-4'>
                        <h3 className='text-gray-600 font-semibold'>{elem.title}</h3>
                        {
                            elem.lists.map((elem2)=>{
                                return <a className='text-sm text-gray-500' href="">{elem2.text}</a>
                            })
                        }
                    </div>
                })
            }
            <div className='flex flex-col gap-3'>
                <h4>همراه ما باشید!</h4>
                <div className='flex gap-8'>
                    {
                        FooterP.socialMedia.map((elem)=>{
                            return <a className='w-[40px] h-[40px] bg-slate-300 block' href="">
                                <img src={elem.img} alt="" />
                            </a>
                        })
                    }
                </div>
                <h4>با ثبت ایمیل، از جدیدترین تخفیف‌ها باخبر شوید</h4>
                <form className='flex gap-2' action="">
                    <input className='bg-gray-100 text-gray-100 flex-1 p-3 rounded-md' type="text" placeholder='ایمیل شما'/>
                    <button className='bg-gray-300 text-white px-3 rounded-md'>ثبت</button>
                </form>
            </div>
        </div>

        <div className="flex justify-center p-4">
            <div className="bg-[#3C4B6D] rounded-xl max-w-[1636px] w-full px-4 py-3 flex justify-between items-center">
                <div className="text-white flex items-center gap-5 text-xl">
                    <img className="w-[44px] h-[44px]" src="https://www.digikala.com/statics/img/png/footerlogo2.webp" alt="" />
                    دانلود اپلیکیشن دیجی‌کالا
                </div>
                <div className="flex gap-5">
                    {
                        FooterP.downloadApp.map((elem)=>{
                            return <a href="">
                                <img className='h-[44px] bg-white rounded-md' src={elem.img} alt="" />
                            </a>
                        })
                    }
                </div>
            </div>
        </div>

        <hr />

        {/* <div className='flex px-5 py-10'>
            <div className='flex-1'>
                <div>
                    <h1 className='text-2xl text-gray-600 leading-loose'><strong>فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین</strong></h1>
                    <p className='text-xs text-gray-500 leading-loose'></p>
                </div>
                <span>
                    مشاهده بیشتر
                    <Icon icon={arrow_left}/>
                </span>
            </div>
            <div className='flex gap-5'>
                {
                    FooterP.readMoreBrands.map((elem) => {
                        return <div className='p-4 border border-gray-300 rounded-md w-fit h-fit' key={elem.id}>
                            <img className='w-[75px] h-[75px]' src={elem.img} alt="" />
                        </div>
                    })
                }
            </div>
        </div> */}

        <hr />

        <div className='py-9 text-xs text-center text-gray-500'>
            برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع» کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه (فروشگاه آنلاین دیجی‌کالا) است.
        </div>

        <div className='flex'>
            {
                FooterP.digiBrands.map((elem)=>{
                    return(elem.id<=8 && <div className='flex-1 flex justify-center bg-gray-200 py-5 border-b border-r border-gray-300'>
                        <img className='h-[20px]' src={elem.img} alt="" />
                    </div>)
                })
            }
        </div>
        <div className='flex'>
            {
                FooterP.digiBrands.map((elem)=>{
                    return(elem.id>8 && <div className='flex-1 flex justify-center bg-gray-200 py-5 border-b border-r border-gray-300'>
                        <img className='h-[20px]' src={elem.img} alt="" />
                    </div>)
                })
            }
        </div>
    </footer>
    </>
  )
}

export default Footer