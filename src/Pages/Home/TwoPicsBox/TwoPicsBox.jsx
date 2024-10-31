import { useDispatch, useSelector } from "react-redux";
import TwoPicItems from "./TwoPicItems/TwoPicItems";
import { useEffect } from "react";
import { fetchPost } from "../../../Redux/Posts/PostReducer";

const TwoPicsBox = () => {

    let TwoPicItemsP = [
        {"image":"https://dkstatics-public.digikala.com/digikala-adservice-banners/40975c427842b45947d76c6590913d0b69a31818_1727268635.jpg?x-oss-process=image/quality,q_95/format,webp", id:1},
        {"image":"https://dkstatics-public.digikala.com/digikala-adservice-banners/f111c8fbbecc9e2d7242264451ec8d806c35c6d9_1727706944.gif?x-oss-process=image?x-oss-process=image/format,webp", id:2},
    ]

    // const {posts, loading, error} = useSelector((state)=>state.posts)
    // const dispatch = useDispatch()
    // useEffect(()=>{
    //     dispatch(fetchPost("TwoPicItemsP"))
    // },[])

    // console.log("two:",posts);
    

    return ( 
        <>
        <div className="flex justify-center p-4">
            <div className="max-w-[1336px] w-full gap-4 grid lg:grid-cols-2 grid-cols-1">
                {
                    TwoPicItemsP?.map((elem)=>{
                        return( <TwoPicItems image={elem.image} key={elem.id}/> )
                })
                }
            </div>
        </div>
        </>
     );
}
 
export default TwoPicsBox;