const HighlightItems = ({image, text}) => {
    return ( 
        <>
        <div className="bg-orange-200 flex flex-col gap-2 py-2 items-center w-[82px]">
            <img src={image} alt="" className="w-[52px] h-[52px]"/>
            <span className="text-xs text-center px-4 text-wrap leading-relaxed">{text}</span>
        </div>
        </>
     );
}
 
export default HighlightItems;