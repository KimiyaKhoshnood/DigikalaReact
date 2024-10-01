const BuyBySortingItems = ({image, text}) => {
    return ( 
        <>
        <a className="flex flex-col items-center px-2 lg:w-[132px] w-[122px]" href="">
            <img className="lg:w-[100px] lg:h-[100px] w-[90px] h-[90px] bg-red-200" src={image} alt="" />
            <p className="text-xs w-fit bg-red-400 max-w-[100px]">{text}</p>
        </a>
        </>
     );
}
 
export default BuyBySortingItems;