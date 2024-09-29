const ASupermarketItems = ({image, off}) => {
    return ( 
        <>
        <a href="#" className="w-[74px] h-[74px] rounded-full bg-white p-2">
            <img className="rounded-full" src={image} alt="" />
            <div className="relative bottom-2 text-xs bg-red-700 text-white text-center w-[32px] rounded-xl h-[20px] flex items-center justify-center">{off}٪</div>
        </a>
        </>
     );
}
 
export default ASupermarketItems;