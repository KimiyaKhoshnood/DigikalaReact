import { useDispatch, useSelector } from "react-redux";
import FourPicItems from "./FourPicItems/FourPicItems";
import { useEffect } from "react";
import { fetchPost } from "../../../Redux/Posts/PostReducer";

const FourPicsBox = () => {

    let FourPicItemsP = [
        {"image":"https://dkstatics-public.digikala.com/digikala-adservice-banners/5e124f3f520c85b07b264c293397d04a55afe2ef_1727683322.jpg?x-oss-process=image/quality,q_95/format,webp", id:1},
        {"image":"https://dkstatics-public.digikala.com/digikala-adservice-banners/56651058c7fb5c844ad73adc1ed899ecd604c57f_1727679080.jpg?x-oss-process=image/quality,q_95/format,webp", id:2},
        {"image":"https://dkstatics-public.digikala.com/digikala-adservice-banners/acbbeeae46b4a432951190982daf31b64a7bd612_1727168918.jpg?x-oss-process=image/quality,q_95/format,webp", id:3},
        {"image":"https://dkstatics-public.digikala.com/digikala-adservice-banners/f0d3ab9abc4b8700de602ca65bdf6863c87d78c6_1727518426.jpg?x-oss-process=image/quality,q_95/format,webp", id:4},
    ]


    // const {posts, loading, error} = useSelector((state)=>state.posts)
    // const dispatch = useDispatch()
    // useEffect(()=>{
    //     dispatch(fetchPost("FourPicItemsP"))
    // },[])
    // console.log("four: ", posts);
    

    return ( 
        <>
        <div className="flex justify-center p-4">
            <div className="max-w-[1336px] w-full gap-4 grid lg:grid-cols-4 grid-cols-2">
                {
                    FourPicItemsP?.map((elem)=>{
                        return( <FourPicItems image={elem.image} key={elem.id}/> )
                })
                }
            </div>
        </div>
        </>
     );
}
 
export default FourPicsBox;