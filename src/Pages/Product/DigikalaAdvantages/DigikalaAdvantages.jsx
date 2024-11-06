const DigikalaAdvantages = () => {
  const digikalaAdvantagesP= [
        {
          img: "https://www.digikala.com/statics/img/svg/infosection/express-delivery.svg",
          text: "اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس",
          "id": 1
        },
        {
          "img": "https://www.digikala.com/statics/img/svg/infosection/support.svg",
          "text": "۷ روز ﻫﻔﺘﻪ، ۲۴ ﺳﺎﻋﺘﻪ",
          "id": 2
        },
        {
          "img": "https://www.digikala.com/statics/img/svg/infosection/cash-on-delivery.svg",
          "text": "امکان پرداخت در محل",
          "id": 3
        },
        {
          "img": "https://www.digikala.com/statics/img/svg/infosection/days-return.svg",
          "text": "هفت روز ضمانت بازگشت کالا",
          "id": 4
        },
        {
          "img": "https://www.digikala.com/statics/img/svg/infosection/original-products.svg",
          "text": "ﺿﻤﺎﻧﺖ اﺻﻞ ﺑﻮدن ﮐﺎﻟﺎ",
          "id": 5
        },
      ]
  return (
    <div className="w-full max-w-[1676px] p-4 min-w-[85px]">
        <div className="h-[1px] bg-gray-200"></div>
        <div className="flex gap-1 py-3 max-w-[1636px] w-full">
              {digikalaAdvantagesP.map((elem) => {
                return (
                  <div className="text-[11px] text-gray-400 flex-1 flex lg:flex-row flex-col items-center justify-center">
                    <img className="w-11 h-11" src={elem.img} alt="" />
                    <h4>{elem.text}</h4>
                  </div>
                );
              })}
        </div>

    </div>
  )
}

export default DigikalaAdvantages