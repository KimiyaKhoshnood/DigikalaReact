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
                    return <div key={elem.id} className="flex flex-col items-center p-3">
                        <div className="py-2">
                            <img className="h-[150px]" src={elem.img} alt="" />
                        </div>
                        <div className="flex justify-between items-center w-full">
                            <span className="bg-red-600 px-2 py-[2px] text-xs text-white h-fit rounded-xl">{elem.offPercent}%</span>
                            <span className="flex gap-1">{elem.offPrice} <img className="w-5 h-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTAjW86KHVtGKOts1_vzW0oM03BOSx5djx5Q&s" alt="" /></span>
                        </div>
                        <span className="text-sm text-gray-400 line-through w-full block text-left px-5">{elem.price}</span>
                    </div>
                })}
            </div>
        </div>
    </div>
  )
}

export default SellSelection