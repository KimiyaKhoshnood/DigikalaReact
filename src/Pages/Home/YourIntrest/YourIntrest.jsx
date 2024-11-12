import BlueLinkWithLeftArrow from "../../../Components/BlueLinkWithLeftArrow/BlueLinkWithLeftArrow"

const YourIntrest = () => {
  const YourIntrestP = [
    {
        "title":"کیف و کاور گوشی",
        "images":[{
            "img":"https://dkstatics-public.digikala.com/digikala-products/3e522d7132d2bb4c3f83321f5ce3070919e4cd88_1729977913.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            "id":1
        },{
            "img":"https://dkstatics-public.digikala.com/digikala-products/c0d977d18cf58b033a8346934cce80b1cfaab572_1722884842.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            "id":2
        },{
            "img":"https://dkstatics-public.digikala.com/digikala-products/8e7b84f5ba25a79673b2814e2aead169a54f97a6_1673976012.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            "id":3
        },{
            "img":"https://dkstatics-public.digikala.com/digikala-products/56ad80d1b7c45780578989b1aaea6413b9d7372c_1615464898.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            "id":4
        }],
        "id":1
    },{
        "title":"گوشی موبایل",
        "images":[{
            "img":"https://dkstatics-public.digikala.com/digikala-products/d4e2b4df5348faef2b375081baf57c378d6b865a_1721741880.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            "id":1
        },{
            "img":"https://dkstatics-public.digikala.com/digikala-products/8da0ac0e9c414ff6bc745cd6b032ef61e6d93cf1_1730113501.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            "id":2
        },{
            "img":"https://dkstatics-public.digikala.com/digikala-products/8da0ac0e9c414ff6bc745cd6b032ef61e6d93cf1_1730113501.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            "id":3
        },{
            "img":"https://dkstatics-public.digikala.com/digikala-products/82229ebb4fbe465f907c7078e0542139d865b2d8_1721401058.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
            "id":4
        }],
        "id":2
    },{
        "title":"هدفون، هدست و هندزفری",
        "images":[{
            "img":"https://dkstatics-public.digikala.com/digikala-products/49583a51f0f0e51843718c0a14bda58c683e1bdf_1718703853.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            "id":1
        },{
            "img":"https://dkstatics-public.digikala.com/digikala-products/49583a51f0f0e51843718c0a14bda58c683e1bdf_1718703853.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            "id":2
        },{
            "img":"https://dkstatics-public.digikala.com/digikala-products/49583a51f0f0e51843718c0a14bda58c683e1bdf_1718703853.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            "id":3
        },{
            "img":"https://dkstatics-public.digikala.com/digikala-products/49583a51f0f0e51843718c0a14bda58c683e1bdf_1718703853.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            "id":4
        }],
        "id":3
    },{
        "title":"ساعت هوشمند",
        "images":[{
            "img":"https://dkstatics-public.digikala.com/digikala-products/49583a51f0f0e51843718c0a14bda58c683e1bdf_1718703853.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            "id":1
        },{
            "img":"https://dkstatics-public.digikala.com/digikala-products/49583a51f0f0e51843718c0a14bda58c683e1bdf_1718703853.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            "id":2
        },{
            "img":"https://dkstatics-public.digikala.com/digikala-products/49583a51f0f0e51843718c0a14bda58c683e1bdf_1718703853.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            "id":3
        },{
            "img":"https://dkstatics-public.digikala.com/digikala-products/49583a51f0f0e51843718c0a14bda58c683e1bdf_1718703853.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
            "id":4
        }],
        "id":4
    },
  ]
  return (
    <div className="flex justify-center p-4">
    <div className="max-w-[1336px] w-full grid lg:grid-cols-4 grid-cols-1 gap-1 divide-x divide-x-reverse lg:divide-y-0 divide-y border rounded-xl">
        {
            YourIntrestP.map((eachIntrest)=>{
                return <div className="px-5 py-2 leading-loose">
                    <h4>{eachIntrest.title}</h4>
                    <p className="text-gray-500 text-[11px]">بر اساس سلیقه شما</p>
                    <div className="grid grid-cols-2 [&>*:nth-child(4n-1)]:border-t [&>*:nth-child(4n)]:border-t">
                        {
                            eachIntrest.images.map((elem)=>{
                                return <div className="p-2 flex odd:border-l justify-center" key={elem.id}><img className="max-w-[300px] w-full" src={elem.img} alt="" /></div>
                            })
                        }
                    </div>
                    <div className="w-full text-center"><BlueLinkWithLeftArrow text={"مشاهده همه"} size={"text-[11px]"}/></div>
                </div>
            })
        }
    </div>
    </div>
  )
}

export default YourIntrest