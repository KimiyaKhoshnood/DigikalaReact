import Icon from "react-icons-kit";

import {gift} from 'react-icons-kit/typicons/gift'
import {ribbonB} from 'react-icons-kit/ionicons/ribbonB'
import {map} from 'react-icons-kit/ionicons/map'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPost } from "../../../Redux/Posts/PostReducer";

const Digiclub = () => {
    // const {posts, loading, error} = useSelector((state)=>state.posts)
    // const dispatch = useDispatch()
    // useEffect(()=>{
    //     dispatch(fetchPost())
    // },[])
    return ( 
        <>
        <div className="flex justify-center p-4">
            <div className="bg-gradient-to-l from-[#007295] to-[#35a6c8] rounded-xl max-w-[1336px] w-full px-4 py-3 flex justify-between items-center">
                <a className="px-4" href="">
                    <img className="w-[119px] h-[33px]" src="https://www.digikala.com/statics/img/svg/club/digiclub-logo-white.svg" alt="" />
                </a>
                <div className="flex gap-1">
                    <a className="flex bg-white items-center p-[2px] rounded-r-lg" href="">
                        <div className="flex items-center gap-1">
                            <Icon className="text-[#35a6c8]" icon={ribbonB} size={20}/>
                            <span className="text-xs font-semibold">چرخ و بخت</span>
                        </div>
                        <div className="w-[168px] h-[60px]">
                            <img className="w-full h-full object-cover" src="https://www.digikala.com/statics/img/png/digiclub/wheel-spinner.webp" alt="" />
                        </div>
                    </a>
                    <a className="flex bg-white items-center p-[2px]" href="">
                        <div className="flex items-center gap-1">
                            <Icon className="text-[#35a6c8]" icon={map} size={20}/>
                            <span className="text-xs font-semibold">ماموریت ها</span>
                        </div>
                        <div className="w-[168px] h-[60px]">
                            <img className="w-full h-full object-cover" src="https://www.digikala.com/statics/img/png/digiclub/missions.webp" alt="" />
                        </div>
                    </a>
                    <a className="flex bg-white items-center  p-[2px] rounded-l-lg" href="">
                        <div className="flex items-center gap-1">
                            <Icon className="text-[#35a6c8]" icon={gift} size={20}/>
                            <span className="text-xs font-semibold">جایزه ها</span>
                        </div>
                        <div className="w-[168px] h-[60px]">
                            <img className="w-full h-full object-cover" src="https://www.digikala.com/statics/img/png/digiclub/awards.webp" alt="" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Digiclub;