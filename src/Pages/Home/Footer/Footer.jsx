import Icon from 'react-icons-kit'
import {arrow_up} from 'react-icons-kit/ikons/arrow_up'

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

        <div className='px-5'>
            {}
        </div>
    </footer>
    </>
  )
}

export default Footer