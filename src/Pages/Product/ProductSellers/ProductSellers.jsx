import Icon from 'react-icons-kit'
import {u2734} from 'react-icons-kit/noto_emoji_regular/u2734'

const ProductSellers = () => {
  const ProductSellersP = [
    {
        "title": "هشتگ کالا رز همراه",
        "selection": false,
        "satisfaction": "۱۰۰",
        "performance": "عالی",
        "days": 0,
        "guarantee": "گارانتی ۱۸ ماهه رز همراه فروهر",
        "price": "۴۵,۸۹۹,۰۰۰",
        "plusService": true,
        "id": 1
    }
  ]
  return (
    <div className="w-full max-w-[1676px] px-4">
        <div className="h-1 bg-gray-200"></div>
          <div className="py-3">
            <p className="py-3">فروشندگان این کالا</p>
            <div className="h-[2px] w-[70px] bg-rose-500"></div>
          </div>
          <div>
            {ProductSellersP.map((elem)=>{
                return <div className=''>
                    {elem.plusService && <div className='text-xs bg-purple-300'>
                        <span className='text-purple-500'><Icon icon={u2734} size={20} />خدمات پلاس </span>
                        <span className='text-gray-500'>ارسال فوری برای شهر تهران و کرج (رایگان)</span>
                        </div>}
                </div>
            })}
          </div>
        <div className="h-1 bg-gray-200"></div>
    </div>
  )
}

export default ProductSellers