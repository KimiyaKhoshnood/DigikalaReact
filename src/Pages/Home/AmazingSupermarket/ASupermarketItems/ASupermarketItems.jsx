import OffPercent from "../../../../Components/OffPercent/OffPercent";

const ASupermarketItems = ({image, off}) => {
    return ( 
        <>
        <a href="#" className="lg:w-[74px] lg:h-[74px] w-[68px] h-[68px] rounded-full bg-white p-2">
            <img className="rounded-full" src={image} alt="" />
            <div className="relative bottom-2"><OffPercent off={off}/></div>
        </a>
        </>
     );
}
 
export default ASupermarketItems;