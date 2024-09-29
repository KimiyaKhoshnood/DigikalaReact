const AmazingSuggestionItems = ({image, title, oldPrice, newPrice, off}) => {
    return ( 
        <>
        <a href="" className="h-full lg:w-[160px] w-[130px] p-[14px] flex flex-col justify-center">
            <img className="" src={image} alt="" />
            <h3 className="text-xs leading-relaxed py-2 line-clamp-2 h-[50px]">{title}</h3>
            <div className="flex justify-between">
                <div className="text-xs bg-red-700 text-white text-center w-[32px] rounded-xl flex justify-center items-center">{off}٪</div>
                <div className="flex gap-1">
                    <span className="text-sm">{newPrice}</span>
                    <img className="w-[20px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTAjW86KHVtGKOts1_vzW0oM03BOSx5djx5Q&s" alt="" />
                </div>
            </div>
            <div className="text-xs text-end line-through text-gray-300 pl-6">{oldPrice}</div>
        </a>
        </>
     );
}
 
export default AmazingSuggestionItems;