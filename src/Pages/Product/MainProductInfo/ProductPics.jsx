import React from 'react'
import Icon from 'react-icons-kit'
import { share } from 'react-icons-kit/entypo/share'
import { ic_flip } from 'react-icons-kit/md/ic_flip'
import { ic_format_list_bulleted } from 'react-icons-kit/md/ic_format_list_bulleted'
import { ic_notifications_active_outline } from 'react-icons-kit/md/ic_notifications_active_outline'
import { ic_timeline } from 'react-icons-kit/md/ic_timeline'
import { heartOutline } from 'react-icons-kit/typicons/heartOutline'

const ProductPics = () => {
  return (
    <div className="flex flex-col">
        <div className="flex">
          <div className="flex flex-col gap-2 text-gray-700">
            <div className="">
              <Icon size={25} icon={heartOutline} />
            </div>
            <div className="">
              <Icon size={25} icon={share} />
            </div>
            <div className="">
              <Icon size={25} icon={ic_notifications_active_outline} />
            </div>
            <div className="">
              <Icon size={25} icon={ic_timeline} />
            </div>
            <div className="">
              <Icon size={25} icon={ic_flip} />
            </div>
            <div className="">
              <Icon size={25} icon={ic_format_list_bulleted} />
            </div>
          </div>
          <div>
            <img
              className="xl:w-[400px] w-[300px]"
              src="https://dkstatics-public.digikala.com/digikala-products/8da0ac0e9c414ff6bc745cd6b032ef61e6d93cf1_1730113501.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90"
              alt=""
            />
          </div>
        </div>
        <div className="lg:flex hidden gap-3 py-3">
          <div className="border border-gray-300 rounded-md w-fit p-1">
            <img
              className="h-[72px] w-[72px]"
              src="https://dkstatics-public.digikala.com/digikala-products/8da0ac0e9c414ff6bc745cd6b032ef61e6d93cf1_1730113501.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90"
              alt=""
            />
          </div>
          <div className="border border-gray-300 rounded-md w-fit p-1">
            <img
              className="h-[72px] w-[72px]"
              src="https://dkstatics-public.digikala.com/digikala-products/8da0ac0e9c414ff6bc745cd6b032ef61e6d93cf1_1730113501.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90"
              alt=""
            />
          </div>
        </div>
        <div className="lg:flex hidden gap-5">
          <span className="flex gap-1 text-gray-600">
            <div className="flex justify-center items-center text-[11px] w-[18px] h-[18px] border border-gray-600 rounded-full">
              i
            </div>
            <span className="text-xs">گزارش مشخصات کالا یا موارد قانونی</span>
          </span>
          <span className="text-xs text-gray-500">DKP-8366616</span>
        </div>
      </div>
  )
}

export default ProductPics