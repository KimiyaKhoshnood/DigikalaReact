import LineThroughPrice from "../../../Components/LineThroughPrice/LineThroughPrice"
import OffPercent from "../../../Components/OffPercent/OffPercent"
import PriceWithToman from "../../../Components/PriceWithToman/PriceWithToman"

const SellSelection = () => {
  const SellSelectionP = [
    {"img":"https://dkstatics-public.digikala.com/digikala-products/49583a51f0f0e51843718c0a14bda58c683e1bdf_1718703853.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80", "offPrice":"۷۰۹,۸۰۰", "price":"۷۸۰,۰۰۰", "offPercent":"۹", "id":1},
    {"img":"https://dkstatics-public.digikala.com/digikala-products/49583a51f0f0e51843718c0a14bda58c683e1bdf_1718703853.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80", "offPrice":"۷۰۹,۸۰۰", "price":"۷۸۰,۰۰۰", "offPercent":"۹", "id":2},
    {"img":"https://dkstatics-public.digikala.com/digikala-products/49583a51f0f0e51843718c0a14bda58c683e1bdf_1718703853.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80", "offPrice":"۷۰۹,۸۰۰", "price":"۷۸۰,۰۰۰", "offPercent":"۹", "id":3},
    {"img":"https://dkstatics-public.digikala.com/digikala-products/49583a51f0f0e51843718c0a14bda58c683e1bdf_1718703853.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80", "offPrice":"۷۰۹,۸۰۰", "price":"۷۸۰,۰۰۰", "offPercent":"۹", "id":4},
    {"img":"https://dkstatics-public.digikala.com/digikala-products/49583a51f0f0e51843718c0a14bda58c683e1bdf_1718703853.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80", "offPrice":"۷۰۹,۸۰۰", "price":"۷۸۰,۰۰۰", "offPercent":"۹", "id":5},
    {"img":"https://dkstatics-public.digikala.com/digikala-products/49583a51f0f0e51843718c0a14bda58c683e1bdf_1718703853.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80", "offPrice":"۷۰۹,۸۰۰", "price":"۷۸۰,۰۰۰", "offPercent":"۹", "id":6},
    {"img":"https://dkstatics-public.digikala.com/digikala-products/49583a51f0f0e51843718c0a14bda58c683e1bdf_1718703853.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80", "offPrice":"۷۰۹,۸۰۰", "price":"۷۸۰,۰۰۰", "offPercent":"۹", "id":7},
    {"img":"https://dkstatics-public.digikala.com/digikala-products/49583a51f0f0e51843718c0a14bda58c683e1bdf_1718703853.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80", "offPrice":"۷۰۹,۸۰۰", "price":"۷۸۰,۰۰۰", "offPercent":"۹", "id":8},
    {"img":"https://dkstatics-public.digikala.com/digikala-products/49583a51f0f0e51843718c0a14bda58c683e1bdf_1718703853.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80", "offPrice":"۷۰۹,۸۰۰", "price":"۷۸۰,۰۰۰", "offPercent":"۹", "id":9},
    {"img":"https://dkstatics-public.digikala.com/digikala-products/49583a51f0f0e51843718c0a14bda58c683e1bdf_1718703853.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80", "offPrice":"۷۰۹,۸۰۰", "price":"۷۸۰,۰۰۰", "offPercent":"۹", "id":10},
    {"img":"https://dkstatics-public.digikala.com/digikala-products/49583a51f0f0e51843718c0a14bda58c683e1bdf_1718703853.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80", "offPrice":"۷۰۹,۸۰۰", "price":"۷۸۰,۰۰۰", "offPercent":"۹", "id":11},
    {"img":"https://dkstatics-public.digikala.com/digikala-products/49583a51f0f0e51843718c0a14bda58c683e1bdf_1718703853.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80", "offPrice":"۷۰۹,۸۰۰", "price":"۷۸۰,۰۰۰", "offPercent":"۹", "id":12},
    {"img":"https://dkstatics-public.digikala.com/digikala-products/49583a51f0f0e51843718c0a14bda58c683e1bdf_1718703853.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80", "offPrice":"۷۰۹,۸۰۰", "price":"۷۸۰,۰۰۰", "offPercent":"۹", "id":13},
    {"img":"https://dkstatics-public.digikala.com/digikala-products/49583a51f0f0e51843718c0a14bda58c683e1bdf_1718703853.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80", "offPrice":"۷۰۹,۸۰۰", "price":"۷۸۰,۰۰۰", "offPercent":"۹", "id":14},
    {"img":"https://dkstatics-public.digikala.com/digikala-products/49583a51f0f0e51843718c0a14bda58c683e1bdf_1718703853.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80", "offPrice":"۷۰۹,۸۰۰", "price":"۷۸۰,۰۰۰", "offPercent":"۹", "id":15},
    {"img":"https://dkstatics-public.digikala.com/digikala-products/49583a51f0f0e51843718c0a14bda58c683e1bdf_1718703853.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80", "offPrice":"۷۰۹,۸۰۰", "price":"۷۸۰,۰۰۰", "offPercent":"۹", "id":16},
    {"img":"https://dkstatics-public.digikala.com/digikala-products/49583a51f0f0e51843718c0a14bda58c683e1bdf_1718703853.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80", "offPrice":"۷۰۹,۸۰۰", "price":"۷۸۰,۰۰۰", "offPercent":"۹", "id":17},
    {"img":"https://dkstatics-public.digikala.com/digikala-products/49583a51f0f0e51843718c0a14bda58c683e1bdf_1718703853.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80", "offPrice":"۷۰۹,۸۰۰", "price":"۷۸۰,۰۰۰", "offPercent":"۹", "id":18},
  ]
  return (
    <div className="flex justify-center p-4">
        <div className="max-w-[1336px] w-full lg:border border-gray-300 rounded-xl p-4">
            <div className="flex justify-center py-4">
                <h3 className="text-xl">منتخب محصولات تخفیف و حراج</h3>
            </div>
            <div className="grid xl:grid-cols-6 lg:grid-cols-5 grid-cols-2 divide-x divide-x-reverse divide-y">
                {SellSelectionP.map((elem)=> {
                    return <div key={elem.id} className="flex flex-col items-center p-3 ">
                        <div className="py-2">
                            <img className="h-[150px]" src={elem.img} alt="" />
                        </div>
                        <div className="flex justify-between items-center w-full">
                            <OffPercent off={elem.offPercent} />
                            <PriceWithToman  price={elem.offPrice} textSize={"text-md"} />

                        </div>
                        <div className="w-full text-left pl-5"><LineThroughPrice oldPrice={elem.price} /></div>
                    </div>
                })}
            </div>
        </div>
    </div>
  )
}

export default SellSelection