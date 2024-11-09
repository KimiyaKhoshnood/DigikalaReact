import Icon from "react-icons-kit"
import {shop} from 'react-icons-kit/ikons/shop'
import {megaphone} from 'react-icons-kit/entypo/megaphone'

const Address = () => {
  return (
    <div className="p-4 w-full max-w-[1676px] flex justify-between text-xs text-gray-500">
        <div className="flex gap-2">
            <a href="">دیجی‌کالا</a>
            /
            <a href="">موبایل</a>
            /
            <a href="">گوشی موبایل</a>
        </div>
        <div className="lg:flex hidden gap-8">
            <div>
                ثبت آگهی در پیندو
                <Icon className="px-1" icon={megaphone}/>
            </div>
            <div>
                فروش در دیجی‌کالا
                <Icon className="px-1" icon={shop}/>
            </div>
        </div>
    </div>
  )
}

export default Address